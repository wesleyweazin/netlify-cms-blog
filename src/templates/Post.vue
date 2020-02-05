<template lang="pug">
  PostLayout
      h1 post template
      h1 {{$page.post.title}}
      div(v-html='$page.post.content')
</template>
<page-query>
query Post ($path:String!){
  post: post(path:$path){
    title
    content
  }
}
</page-query>


<script>
export default {
    metaInfo(){
        return{
            title: this.$page.post.title
        }
    }
}
</script>
<style lang="scss">


</style>

