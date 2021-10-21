<template>
  <div class="leads">
    <Logo />
    <!-- <Logo dark-background /> -->
    <h1 class="leads__title">Leads</h1>

	<clientes-potenciais />
    
  </div>
</template>

<script>

export default {

	data() {return {}},
  	computed: {},	
	mounted() {},
	methods: {}  
}

</script>

<style lang="scss" scoped="true">
.leads {
  &__title {
    margin: 1.4rem 0;
    padding: 1.4rem 0;
    border-top: $border-color 1px solid;
  }
}


</style>
