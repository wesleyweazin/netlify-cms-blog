<template lang="pug">
DefaultLayout
    h1 shots
      .row.no-gutters
        .col-sm-4(v-for='shot in $page.allShot.edges')
          g-image(:src='shot.node.cover').w-100
    //- .images(v-for='shot in $page.allShot.edges')
        
</template>

<script>

export default {

}
</script>
<page-query>
query {
  allShot{
    edges{
      node{
        cover(width:500)
      }
    }
  }
}
</page-query>