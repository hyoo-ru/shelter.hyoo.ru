namespace $ {

	const Response = $mol_data_record({
		token: $mol_data_string,
	})

	export class $gravity_auth extends $mol_object2 {

		@ $mol_fiber.method
		static auth( creds : { username : string , password : string } ) {

			const res = this.$.$gravity_transport.save(
				`login_check`,
				'post',
				creds,
			)

			this.$.$gravity_transport.token( Response( res ).token )

			return true
		}

		static signed() {
			return Boolean( this.$.$gravity_transport.token() )
		}

		static drop() {
			this.$.$gravity_transport.token( '' )
		}

	}

}
