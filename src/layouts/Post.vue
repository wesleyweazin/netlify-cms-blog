<template lang="pug">
.container
	.row
		.col-12
			Header
			.markdown-body
			slot
</template>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang='scss' scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css);
.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>
