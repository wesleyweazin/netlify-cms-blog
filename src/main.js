// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
//components
import Header from '~/components/Header.vue'
//layouts
import DefaultLayout from '~/layouts/Default.vue'
import PostLayout from '~/layouts/PostList.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Header', Header)
  Vue.component('Layout', DefaultLayout)
  Vue.component('PostLayout', PostLayout)
}
