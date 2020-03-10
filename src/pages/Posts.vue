<template lang="pug">
DefaultLayout
    .row.mb-5
        .col-sm-12.text-center
            h1 文章列表
    .row
        .col-sm-12.post-list
            .row.item(v-for='post in $page.allPost.edges' :key='post.id')
                .col-sm-8
                    .item__content
                        p.text-muted.small.mb-1 {{post.node.date}}
                        h3.item__content__title.mb-2 {{post.node.title_zh}}
                        .item__content__tags
                            g-link(v-for="tag in post.node.tags" :to='tag.path').text-secondary.mr-2 {{tag.id}}
                        p.item__content__text(v-html='post.node.content.substring(0,100)')
                        a.item__content__link(:href='post.node.path') 繼續閱讀
                .col-sm-4
                    .item__image
                        g-image(:src='post.node.cover')
    .row
        .col-sm-12
            Pager(:info="$page.allPost.pageInfo")
</template>

<page-query>
query($page: Int){
  allPost(perPage: 1, page: $page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title_zh
        content
        path
        cover(width:800, height:600)
        date(format: "MMMM DD, YYYY")
        tags {
            id
            path
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
    metaInfo: {
        title: 'posts'
    },
    components: {
        Pager
    }
}
</script>

<style lang="scss">
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
            &__tags a{
                &:before {
                    content: '#';

                }
            }
        }
        
    }
}
</style>
