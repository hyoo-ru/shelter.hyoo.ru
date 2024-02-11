namespace $ {

	const Animals = $mol_data_array(
		$mol_data_record({
			arrivedAt: $mol_data_string,
			departedAt: $mol_data_nullable( $mol_data_string ),
			birthDate: $mol_data_string,
			card: $mol_data_string,
			chip: $mol_data_string,
			color: $mol_data_string,
			description: $mol_data_string,
			ears: $mol_data_string,
			name: $mol_data_string,
			photos: $mol_data_array( $mol_data_string ),
			id: $mol_data_integer,
			weight: $mol_data_number,
			readyForDepart: $mol_data_boolean,
			gender: $mol_data_optional($mol_data_variant( $mol_data_const( 'Male' as const), $mol_data_const( 'Female' as const) )),
			kind: $mol_data_optional($mol_data_variant( $mol_data_const( 'Cat' as const), $mol_data_const( 'Dog' as const) )),
			size: $mol_data_string,
			tail: $mol_data_string,
			shelterId: $mol_data_number,
			fur: $mol_data_string,
		})
	)
	
	export class $hyoo_shelter_shelter_animals extends $mol_store<
		Record< string, ReturnType< $hyoo_shelter_animal['data'] > >
	> {

		@ $mol_mem
		data( next?: Record< string, ReturnType< $hyoo_shelter_animal['data'] > > ) {

			if( next !== undefined ) return next

			const list = Animals( this.$.$hyoo_shelter_transport.load( 'animals' ) )
			
			const dict = {} as Record< string, ReturnType< $hyoo_shelter_animal['data'] > >
			for( const item of list ) {
				dict[ item.id ] = item
			}
			
			return dict
		}

		value( key : string , next? : ReturnType< $hyoo_shelter_animal['data'] > ) {
			
			if( next ) {
				try {
					this.$.$hyoo_shelter_transport.save( `animals/${key}`, 'put', next )
				} catch( error: any ) {
					if( error instanceof Promise ) $mol_fail_hidden( error )
					console.error( error )
				}
			}
			
			return super.value( key, next )
		}

		@ $mol_mem
		list() {
			return Object.keys( this.data() ).map(
				key => this.Animal( key )
			)
		}

		@ $mol_mem_key
		Animal( index : string ) {
			return this.sub( index , new $hyoo_shelter_animal( this.data()[ index ] ?? {} ) )
		}

	}

	export class $hyoo_shelter_shelter extends $mol_store<{
		id?: number
		name?: string
	}> {

		id() {
			return String( this.value( 'id' ) ?? '' )
		}

		name( next? : string ) {
			return this.value( 'name' , next ) ?? ''
		}

	}

}
