<template lang="pug">
.Page.navigation.d-flex.justify-content-center
  ul.pagination
    li.page-item(v-if='!isFirstPage(currentPage, totalPages)')
      g-link.page-link(:to='previousPage(currentPage,totalPages)' tabindex='-1') &laquo;
    li.page-item(v-for='page in pages' :key='page.name')
      g-link.page-link(:to='page.link' :aria-label='page.name' :aria-current='page.name') {{page.name}}
    li.page-item(v-if='!isLastPage(currentPage, totalPages)')
      g-link.page-link(:to='nextPage(currentPage,totalPages)' tabindex='-1') &raquo;
</template>

<script>
export default {
  props: {
    baseUrl: String,
    currentPage: Number,
    totalPages: Number,
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5
    }
  },
  methods: {
    isFirstPage(currentPage, totalPages) {
        return currentPage == 1;
    },
    isLastPage(currentPage, totalPages) {
        return currentPage == totalPages;
    },
    isCurrentPage(currentPage, pageElement) {
        return currentPage == pageElement;
    },
    nextPage(currentPage, totalPages) {
      return `${this.baseUrl}/${currentPage + 1}`;
    },
    previousPage(currentPage, totalPages) {
      return currentPage === 2
        ? `${this.baseUrl}/`
        : `${this.baseUrl}/${currentPage - 1}`;
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.currentPage - 1;
      }
      return this.currentPage - 1;
    },
    pages() {
      const range = [];
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i += 1
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
          link: i === 1 ? `${this.baseUrl}/` : `${this.baseUrl}/${i}`
        });
      }
      return range;
    }
  }
};
</script>
