<template lang="pug">
Layout
    .container
        .row.mb-5
            .col-sm-12.text-center
                h1 文章列表
        .row
            .col-sm-12.post-list
                .row.item(v-for='post in $page.posts.edges' :key='post.id')
                    .col-sm-8
                        .item__content
                            p.text-muted.small.mb-1 {{post.node.date}}
                            h3.item__content__title.mb-2 {{post.node.title_zh}}
                            p.item__content__text(v-html='post.node.content.substring(0,100)')
                            a.item__content__link(:href='post.node.path') 繼續閱讀
                    .col-sm-4
                        .item__image
                            g-image(:src='post.node.cover')
                    //- .item__image(:style="'background-image:url('+ post.node.cover +')'")
</template>

<page-query>
query Posts{
  posts: allPost{
    edges{
      node{
        title_zh
        content
        path
        cover
        date(format: "MMMM DD, YYYY")
      }
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
        title: 'posts'
    }
}
</script>

<style lang="scss" scoped>
.post-list {
    .item {
        margin-bottom: 2rem;
        &__image {
            height: 0;
            padding-top: 62.5%;
            position: relative;
            img {
                width: 100%;
                height:  100%;
                object-fit: cover;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
        &__content {
            &__title {
                font-size: 1.8rem;
                font-weight: 700;
            }
        }
    }
}
</style>
