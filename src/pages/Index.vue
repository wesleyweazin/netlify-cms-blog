<template lang="pug">
Layout
        .introduce
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
        .container
            .flex
                .w-1/3 123 
                .w-1/3 123
                .w-1/3 123
        .work-grid
            .work-grid__item(v-for='n in 10')
                a(href="#").link
                    img().image
                p.name this is test title

        ul
            li(v-for='work in $page.works.edges' :key='work.id')
                g-link(:to="work.node.path") {{work.node.title}}
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
      }
    }
  }
}
</page-query>

<style lang="scss">
.introduce {
    p {
        font-size: 0.85rem;
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
            height: 0;
            padding-top: 100%;
            background-color: #ccc;
            border: 1px solid #ccc;
        }

        .name {
            text-align: center;
            font-size: 0.85rem;

        }
    }
}
</style>
