// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
//Import global styles
import './assets/style/main.scss'
//components
import Header from '~/components/Header.vue'
//layouts
import DefaultLayout from '~/layouts/Default.vue'
import PostLayout from '~/layouts/Post.vue'
import WorkLayout from '~/layouts/Work.vue'
import ShotLayout from '~/layouts/Shot.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Header', Header)
  Vue.component('Layout', DefaultLayout)
  Vue.component('PostLayout', PostLayout)
  Vue.component('WorkLayout', WorkLayout)
  Vue.component('ShotLayout', ShotLayout)
}
