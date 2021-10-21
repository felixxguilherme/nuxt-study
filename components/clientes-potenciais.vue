<template>

    <div class="container">

		<div class="container__clientes_list" @mouseleave="itemClicado('')">

			<!--  -->

			<div class="clientes__poteciais">

				<h2> Clientes potenciais </h2>

				<div class="filter__checkbox">

					<div class="filter__checkbox_item">						
						<input v-model="filterBy.aggregate" type="checkbox" @input="itemClicado('')">
						<label> Aggregate </label>
					</div>

					<div class="filter__checkbox_item">						
						<input v-model="filterBy['real-time']" type="checkbox" @input="itemClicado('')">
						<label> Real-Time </label>
					</div>

					<div class="filter__checkbox_item">						
						<input v-model="filterBy.technologies" type="checkbox" @input="itemClicado('')">
						<label> Technologies </label>
					</div>

					<div class="form__group">				
						<input class="form__field" type="search" @input="clientesFiltrados = $event.target.value">
						<label class="form__label"> buscar por nome </label>
					</div>				

				</div>

				<ul class="clientes__potenciais_lista">

					<li v-for="(cliente, index) in filtra" :key="index"
					class="clientes__potenciais_lista-item"
					:class="{ active: (cliente.id === clicado) }"
					@click.stop="itemClicado(cliente.id)">
						{{ cliente.name }}
					</li>

				</ul>

			</div>

			<div v-show="showClientBox && clicado" class="cliente__box">

				<div v-for="(cliente, index) in filtra" :key="index">

					<div v-if="cliente.id === clicado"
					class="cliente__potencial">

						<div class="cliente__potencial_item">
							<label for="">Name:</label>	
							<span> {{ cliente.name }} </span>							
						</div>

						<div class="cliente__potencial_item">
							<label for="">Username:</label>
							<span> {{ cliente.username }} </span>
						</div>

						<div class="cliente__potencial_item">
							<label for="">Email:</label>
							<span> {{ cliente.email }} </span>
						</div>

						<div class="cliente__potencial_item">
							<label for="">Company:</label>	
							<span> {{ cliente.company.name }} </span>							
						</div>

						<div class="cliente__potencial_item">
							<label for="">Company Category</label>	
							<span> {{ cliente.company.bs }} </span>							
						</div>
										
					</div>

				</div>
			</div>			

		</div>
		
	</div>

</template>

<script>

export default {
	data() {
		return {
			clientesFiltrados: '',
			clicado: false,
			showClientBox: false,
			filterBy:{
				'aggregate': '',
				'real-time': '',
				'technologies': ''
			}			
		}
  	},

  	computed: {
		  filtra() {
			  
			if(!this.clientesFiltrados && !this.filterBy.aggregate && !this.filterBy['real-time'] && !this.filterBy.technologies) {
				return this.$store.getters.clienteGetter[0]
			}

			else if (this.clientesFiltrados){
				const exp = new RegExp(this.clientesFiltrados.trim(), 'i');
				return this.$store.getters.clienteGetter[0].filter(cliente => exp.test(cliente.name))
			}

			else if (this.filterBy.aggregate) {				
				const exp = new RegExp('aggregate'.trim(), 'i');
				return this.$store.getters.clienteGetter[0].filter(cliente => exp.test(cliente.company.bs))
			}

			else if (this.filterBy['real-time']) {
				const exp = new RegExp('real-time'.trim(), 'i');
				return this.$store.getters.clienteGetter[0].filter(cliente => exp.test(cliente.company.bs))
			}

			else if (this.filterBy.technologies) {
				const exp = new RegExp('technologies'.trim(), 'i');
				return this.$store.getters.clienteGetter[0].filter(cliente => exp.test(cliente.company.bs))
			}

			else {
				return this.$store.getters.clienteGetter[0]
			}	
			
	  	}
 	},

	
	mounted() {
		this.$store.dispatch('getClientes')

	},

	methods: {

		itemClicado(id) {
			this.clicado = id
			this.showClientBox = true
		},
  	}
  
}

</script>

<style>

</style>