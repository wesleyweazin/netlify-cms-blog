<template lang="pug">
DefaultLayout.home
    .row.d-flex.justify-content-center.my-5
        .col-sm-12.col-md-10.text-center
            h1 Hello World
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
    .row
        .col-sm-12.col-md-4(v-for='work in $page.allWork.edges' :key='work.id')
            g-link(:to="work.node.path")
                g-image(:src='work.node.cover' style='width: 100%')
            p.text-center.mt-2.mb-4 {{work.node.title}}

    .row
        .col-12
            Pager(:info="$page.allWork.pageInfo")
    //- Pagination(baseUrl="" :currentPage="$page.entries.pageInfo.currentPage" :totalPages="$page.entries.pageInfo.totalPages" :maxVisibleButtons="5" v-if="$page.entries.pageInfo.totalPages" ) 1

</template>

<script>
import { Pager } from 'gridsome';
import Pagination from "~/components/Pagination.vue";
export default {
  components: {
      Pagination,
      Pager
  },
    metaInfo: {
        title: 'Hello, world!'
    }
}
</script>
<page-query>
query($page:Int) {
    allWork(perPage:9, page: $page)@paginate{
        pageInfo{
          currentPage
          perPage
          totalPages
        }
        edges{
            node{
                title
                content
                path
                cover(width:500, height:500, fit: cover)
            }
        }
    }
}
</page-query>

<style lang="scss">
.introduce {
    margin-bottom:  2rem;
    p {
        font-size: 1rem;
    }
}

.work-grid {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    &__item {
        width: 33.33%;
        padding: 1rem;
        box-sizing: border-box;

        .link {
            display: block;
            background-color: #ccc;
        }

        .image {
            width: 100%;
            // background-size: cover;
            // background-position: center;
            // &:before {
            //     content: '';
            //     padding-top: 100%;
            //     float: left;
            // }
            // &:after {
            //     content: '';
            //     display: block;
            //     clear: both;
            // }
        }

        .name {
            text-align: center;
            font-size: 0.85rem;
            margin-bottom: 1rem;

        }
    }
}
</style>
