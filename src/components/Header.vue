<template lang="pug">
header.header
  .container
    .row
      .col-sm-12.d-flex
        strong
            g-link(to='/') {{ $static.metadata.siteName }}
        nav.nav
            g-link.nav__link(to='/') Home
            g-link.nav__link(to='/shots') Shots
            g-link.nav__link(to='/posts') Posts
            g-link.nav__link(to='/about') About
            
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

