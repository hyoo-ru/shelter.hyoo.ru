namespace $ {

	const Shelters = $mol_data_array(
		$mol_data_record({
			id: $mol_data_string,
			name: $mol_data_string,
		})
	)

	type Shelter = ( typeof Shelters.Value )[ number ]
	
	export class $gravity_shelter_list extends $mol_store<
		Record< string, ReturnType< $gravity_shelter['data'] > >
	> {

		// @ $mol_mem
		// data() {

		// 	const list = Shelters( this.$.$gravity_transport.load( 'shelters' ) )
			
		// 	const dict = {} as Record< string, Shelter >
		// 	for( const item of list ) {
		// 		dict[ item.id ] = item
		// 	}
			
		// 	return dict
		// }

		@ $mol_mem
		list() {
			return Object.keys( this.data() ).map(
				key => this.Shelter( key )
			)
		}

		@ $mol_mem_key
		Shelter( index : string ) {
			return this.sub( index , new $gravity_shelter( this.data()[ index ] ?? {} ) )
		}

	}

}
