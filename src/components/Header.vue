<template lang="pug">
header.header
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

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 100px;
}

.nav__link {
  margin-left: 20px;
}
</style>