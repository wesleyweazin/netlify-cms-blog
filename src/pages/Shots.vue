<template lang="pug">
DefaultLayout
    h1 shots
    v-masonry(transition-duration="0.3s" item-selector=".item" :origin-top="true" :horizontal-order="false")
      .row.no-gutters
        .col-sm-4(v-for='shot in $page.allShot.edges')
          g-image(:src='shot.node.cover').w-100
    //- .images(v-for='shot in $page.allShot.edges')
        
</template>

<script>
import {VueMasonryPlugin} from 'vue-masonry';

export default {
  components: {
      VueMasonryPlugin,
  },
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