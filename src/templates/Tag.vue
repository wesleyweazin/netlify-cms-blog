<template lang="pug">
    DefaultLayout
        .container
            .row.mb-4
                .col-12
                    h1 {{$page.tag.title}}
            .row
                .col-sm-12.post-list
                    .row.item(v-for='post in $page.tag.belongsTo.edges' :key='post.id')
                        .col-sm-8
                            .item__content
                                p.text-muted.small.mb-1 {{post.node.date}}
                                h3.item__content__title.mb-2 {{post.node.title_zh}}
                                p.item__content__tags
                                    g-link(v-for="tag in post.node.tags" :to='tag.path').mr-2 {{tag.id}}
                                p.item__content__text(v-html='post.node.content.substring(0,100)')
                                a.item__content__link(:href='post.node.path') 繼續閱讀
                        .col-sm-4
                            .item__image
                                g-image(:src='post.node.cover') 
</template>

<page-query>
query($id: ID!){
  tag(id:$id){
    title
    belongsTo{
        edges{
            node{
                ... on Post{
                    id
                    title_zh
                    content
                    path
                    cover(width:500, quality:90)
                    date(format: "MMMM DD, YYYY")
                    tags {
                        id
                        path
                    }
            }
        }
      }
    }
  }
}
</page-query>