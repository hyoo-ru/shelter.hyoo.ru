namespace $.$$ {
	
	export class $gravity_animal_edit extends $.$gravity_animal_edit {

		name( next?: string ) {
			return this.animal().name( next )
		}

		card( next?: string ) {
			return this.animal().card( next )
		}

		chip( next?: string ) {
			return this.animal().chip( next )
		}

		cage( next?: string ) {
			return this.animal().cage( next )
		}

		arrived_date( next?: $mol_time_moment ) {
			return this.animal().arrived_date( next )
		}

		departed_date( next?: $mol_time_moment ) {
			return this.animal().arrived_date( next )
		}

		born_date( next?: $mol_time_moment ) {
			return this.animal().arrived_date( next )
		}

	}

}
