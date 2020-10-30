namespace $ {
	
	export class $gravity_animal extends $mol_store<{
		name?: string
	}> {

		name( next? : string ) {
			return this.value( 'name' , next ) ?? ''
		}

	}

}
