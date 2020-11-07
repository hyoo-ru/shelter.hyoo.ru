namespace $.$$ {

	export class $hyoo_shelter_auth_form extends $.$hyoo_shelter_auth_form {

		auth() {

			const person = this.$.$hyoo_shelter_auth.auth({
				username : this.login() ,
				password : this.pass() ,
			})

		}

		submit( event: KeyboardEvent ) {
			this.Submit().event_activate( event )
		}

	}

}
