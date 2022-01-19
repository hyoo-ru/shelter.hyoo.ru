namespace $ {

	const Response = $mol_data_record({
		token: $mol_data_string,
	})

	export class $hyoo_shelter_auth extends $mol_object2 {

		@ $mol_action
		static auth( creds : { username : string , password : string } ) {

			// const res = this.$.$hyoo_shelter_transport.save(
			// 	`login_check`,
			// 	'post',
			// 	creds,
			// )

			// this.$.$hyoo_shelter_transport.token( Response( res ).token )
			
			this.$.$hyoo_shelter_transport.token( $mol_guid() )

			return true
		}

		static signed() {
			return Boolean( this.$.$hyoo_shelter_transport.token() )
		}

		static drop() {
			this.$.$hyoo_shelter_transport.token( '' )
		}

	}

}
