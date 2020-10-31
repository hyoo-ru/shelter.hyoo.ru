namespace $ {
	
	export class $gravity_animal extends $mol_store<{
		id?: number
		name?: string
		card?: string
		chip?: string
		cage?: string
		arrivedAt?: string
		departedAt?: string | null
		birthDate?: string
	}> {

		id() {
			return String( this.value( 'id' ) ?? '' )
		}

		name( next? : string ) {
			return this.value( 'name' , next ) ?? ''
		}

		card( next? : string ) {
			return this.value( 'card' , next ) ?? ''
		}

		chip( next? : string ) {
			return this.value( 'chip' , next ) ?? ''
		}

		cage( next? : string ) {
			return this.value( 'cage' , next ) ?? ''
		}

		arrived_date( next? : $mol_time_moment ) {
			let str = next?.toString()
			str = this.value( 'arrivedAt' , str )
			return new $mol_time_moment( str ).mask( '1111-11-11' )
		}

		departed_date( next? : $mol_time_moment ) {
			let str = next?.toString()
			str = this.value( 'departedAt' , str )
			return new $mol_time_moment( str ).mask( '1111-11-11' )
		}

		born_date( next? : $mol_time_moment ) {
			let str = next?.toString()
			str = this.value( 'birthDate' , str )
			return new $mol_time_moment( str ).mask( '1111-11-11' )
		}

	}

}
