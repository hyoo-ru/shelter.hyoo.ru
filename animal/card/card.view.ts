namespace $.$$ {
	
	export class $gravity_animal_card extends $.$gravity_animal_card {

		id() {
			return this.animal().id()
		}

		sub() {
			return [
				... this.shelters() ? [ this.Shelter() ] : [],
				this.Card(),
				this.Chip(),
				this.Kind(),
				this.Name(),
				this.Age(),
				this.Size(),
			]
		}

		shelter_name() {
			return this.shelters().Shelter( this.animal().shelter_id() ).name()
		}
		
		name() {
			return this.animal().name()
		}

		card() {
			return this.animal().card()
		}

		chip() {
			return this.animal().chip()
		}

		gender() {
			return this.animal().gender()
		}

		size() {
			return this.animal().size()
		}

		@ $mol_mem
		age() {

			const start = this.animal().born_date()
			if( !start ) return ''
			
			const interval = new $mol_time_interval({ start , end: new $mol_time_moment })

			return interval.duration.count( 'P1Y' ).toFixed( 1 )
		}

		kind() {
			const mapping = {
				'Cat': '🐱',
				'Dog': '🐶',
			}
			return mapping[ this.animal().kind() ] ?? '🐾'
		}

	}

}