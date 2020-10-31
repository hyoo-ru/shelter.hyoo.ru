namespace $.$$ {

	export class $gravity_shelter_manage extends $.$gravity_shelter_manage {

		shelter_name() {
			return this.shelter().name()
		}

		animal( key: string ) {
			return this.animals().Animal( key )
		}

		@ $mol_mem
		animal_list() {
			
			const list = this.animals().list().slice()
			
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

	}

}
