namespace $ {

	export type $gravity_animal_kind = 'Cat' | 'Dog' 
	export type $gravity_animal_gender = 'Male' | 'Female' 
	
	export class $gravity_animal extends $mol_store<{
		id?: number
		name?: string
		card?: string
		chip?: string
		cage?: string
		arrivedAt?: string
		departedAt?: string | null
		birthDate?: string
		kind?: $gravity_animal_kind
		gender?: $gravity_animal_gender
		weight?: number
		ears?: string
		tail?: string
		size?: string
		color?: string
		description?: string
		photos?: readonly string[]
		fur?: string
		shelterId?: number
	}> {

		photos( next?: string[] ) {
			return this.value( 'photos', next ) ?? []
		}

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

		size( next? : string ) {
			return this.value( 'size' , next ) ?? ''
		}

		ear( next? : string ) {
			return this.value( 'ears' , next ) ?? ''
		}

		tail( next? : string ) {
			return this.value( 'tail' , next ) ?? ''
		}

		color( next? : string ) {
			return this.value( 'color' , next ) ?? ''
		}

		weight( next? : number ) {
			return this.value( 'weight' , next ) ?? 0
		}

		kind( next? : $gravity_animal_kind ) {
			return this.value( 'kind' , next ) ?? ''
		}

		gender( next? : $gravity_animal_gender ) {
			return this.value( 'gender' , next ) ?? ''
		}

		shelter_id() {
			return String( this.value( 'shelterId' ) ?? '' )
		}

		arrived_date( next? : $mol_time_moment | null ) {
			let str = next?.toString()
			str = this.value( 'arrivedAt' , str )
			return str && new $mol_time_moment( str ).mask( '1111-11-11' ) || null
		}

		departed_date( next? : $mol_time_moment | null ) {
			let str = next?.toString()
			str = this.value( 'departedAt' , str )
			return str && new $mol_time_moment( str ).mask( '1111-11-11' ) || null
		}

		born_date( next? : $mol_time_moment | null ) {
			let str = next?.toString()
			str = this.value( 'birthDate' , str )
			return str && new $mol_time_moment( str ).mask( '1111-11-11' ) || null
		}

	}

}
