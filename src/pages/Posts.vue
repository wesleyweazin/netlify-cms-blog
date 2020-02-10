<template lang="pug">
Layout
    h1 文章列表
    .post-list
        a.item(v-for='post in $page.posts.edges' :key='post.id')
            .item__content
                .item__content__title {{post.node.title_zh}}
                .item__content__text(v-html='post.node.content.substring(0,100)')
            .item__image(:style="'background-image:url('+ post.node.cover +')'")
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
        display: flex;
        margin-bottom: 2rem;

        &__image {
            width: 30%;
            background-size: cover;

            &:before {
                content: '';
                padding-top: 62.5%;
                float: left;
            }

            &:after {
                content: '';
                display: block;
                clear: both;
            }
        }

        &__content {
            width: 70%;
            padding-right: 1rem;

            &__title {
                font-size: 1.5rem;
                font-weight: 700;
            }
        }
    }
}
</style>
