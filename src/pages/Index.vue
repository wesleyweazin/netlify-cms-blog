<template lang="pug">
Layout
    .introduce
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
    .work-grid
        .work-grid__item(v-for='work in $page.works.edges' :key='work.id')
            g-link(:to="work.node.path").link
                .image(:style="'background-image:url('+ work.node.cover +')'")
            p.name {{work.node.title}}

</template>

<script>
export default {
    metaInfo: {
        title: 'Hello, world!'
    }
}
</script>
<page-query>
query Works{
  works: allWork{
    edges{
      node{
        title
        content
        path
        cover
      }
    }
  }
}
</page-query>

<style lang="scss">
.introduce {
    padding: 0 2rem;
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
        padding: 0.5rem;
        box-sizing: border-box;

        .link {
            display: block;
            background-color: #ccc;
        }

        .image {
            width: 100%;
            border: 1px solid red;
            background-size: cover;
            background-position: center;
            &:before {
                content: '';
                padding-top: 100%;
                float: left;
            }
            &:after {
                content: '';
                display: block;
                clear: both;
            }
        }

        .name {
            text-align: center;
            font-size: 0.85rem;

        }
    }
}
</style>
