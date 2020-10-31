namespace $.$$ {

	export class $gravity_shelter_manage extends $.$gravity_shelter_manage {

		shelter_name() {
			return this.shelter().name()
		}

		animal( key: string ) {
			return this.animals().Animal( key )
		}

		@ $mol_mem
		animal_list_filtered() {
			
			return this.animals().list().filter( $mol_match_text( this.search(), animal => [
				animal.name(),
				animal.card(),
				animal.chip(),
			] ) )

		}
		
		@ $mol_mem
		animal_list() {
			
			let list = this.animal_list_filtered().slice()
			
			list.sort( ( a, b )=> b.arrived_date()!.valueOf() - a.arrived_date()!.valueOf() )
			
			return list.map( animal => this.Animal_card( animal.id() ) )
		}
		
		animal_current( next? : string ) {
			return this.$.$mol_state_arg.value( 'animal' , next )
		}

		pages() {
			return [
				this.Animals_page(),
				... this.animal_current() ? [ this.Animal_edit( this.animal_current() ) ] : [],
			]
		}

		add() {
			const Response = $mol_data_record({ id : $mol_data_string })
			const response = this.$.$gravity_transport.save( `shelters/${ this.shelter().id() }/animals`, 'post', {
				name: '',
				readyForDepart: false,
				card: '',
				chip: '',
				kind: '',
				gender: '',
				cage: '',
				arrivedAt: '',
				departedAt: null,
				birthDate: '',
				weight: 0,
				ears: '',
				tail: '',
				size: '',
				color: '',
				description: '',
				photos: [],
				fur: '',
			} )
			const id = Response( response ).id
			this.$.$mol_state_arg.value( 'animal', id )
		}

	}

}
