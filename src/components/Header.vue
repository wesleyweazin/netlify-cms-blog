<template lang="pug">
header.header
        strong
            g-link(to='/') {{ $static.metaData.siteName }}
        nav.nav
            g-link.nav__link(to='/') Home
            g-link.nav__link(to='/about') About
            g-link.nav__link(to='/team') Team
</template>

<static-query>
query {
  metaData {
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
        height: 80px;
        .nav__link {
        margin-left: 20px;
    }
    }

    
</style>
