<template lang="pug">
  .container.layout
    .row
      .col-12
        Header
    .row
      .col-12
        slot
    .row
      .col-12
        Footer
</template>


<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

/* .layout {
  margin: 0 auto;
  padding: 0;
} */


</style>
