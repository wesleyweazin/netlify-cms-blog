<template lang="pug">
    WorkLayout
        h1 work template
        h1 {{$page.work.title}}
        div(v-html='$page.work.content')
</template>
<page-query>
query Work ($path:String!){
  work: work(path:$path){
    title
    content
  }
}
</page-query>


<script>
export default {
    metaInfo(){
        return{
            title: this.$page.work.title
        }
    }
}
</script>
<style lang="scss">


</style>

