
<template lang="pug">
    PostLayout
        h1 Articles
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.
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
        title: 'Team'
    }
}
</script>
