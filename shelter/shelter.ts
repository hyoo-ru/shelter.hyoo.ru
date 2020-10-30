namespace $ {

	export class $gravity_shelter extends $mol_store<{
		name: string
		name_legal: string
		animal: readonly ReturnType< $gravity_animal['data'] >[]
	}> {

		name( next? : string ) {
			return this.value( 'name' , next ) ?? ''
		}

		name_legal( next? : string ) {
			return this.value( 'name_legal' , next ) ?? ''
		}

		@ $mol_mem
		animal() {
			return this.value( 'animal' ).map(
				( json , index )=> this.Animal( index )
			)
		}

		@ $mol_mem_key
		Animal( index : number ) {
			return this.sub( 'animal' ).sub( index , new $gravity_animal( this.value( 'animal' )[ index ] ?? {} ) )
		}

	}

}
