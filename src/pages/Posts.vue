<template lang="pug">
Layout
  h1 Posts
  .post-list
    a.post-list__item(v-for='post in $page.posts.edges' :key='post.id')
      .post-list__item__image(:style="'background-image:url('+ post.node.cover +')'")
      .post-list__item__heading {{post.node.title}}
      .post-list__item__content(v-html='post.node.content.substring(0,100)')
  ul
      li(v-for='post in $page.posts.edges' :key='post.id')
          g-link(:to="post.node.path") {{post.node.title}}
</template>

<page-query>
query Posts{
  posts: allPost{
    edges{
      node{
        title
        content
        path
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
