<template lang="pug">
Layout.home
    .row.d-flex.justify-content-center.my-5
        .col-sm-12.col-md-10.text-center
            h1 Hello World
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
    .row
        .col-sm-12.col-md-4(v-for='work in $page.allWork.edges' :key='work.id')
            g-link(:to="work.node.path")
                g-image(:src='work.node.cover' style='width: 100%')
            p.name {{work.node.title}}
    .row
        .col-12
            iframe(style='border: none;' width='100%' height='450' src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FdLd7Ssjaf4CaQnadfiFfKJ%2Ffigma-UI-challenge-example-by-rei%3Fnode-id%3D0%253A1' allowfullscreen='')

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
    allWork(perPage:3, page: $page)@paginate{
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

        }
    }
}
</style>
