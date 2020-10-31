namespace $.$$ {

	export class $gravity_auth_form extends $.$gravity_auth_form {

		auth() {

			const person = this.$.$gravity_auth.auth({
				username : this.login() ,
				password : this.pass() ,
			})

		}

		submit( event: KeyboardEvent ) {
			this.Submit().event_activate( event )
		}

	}

}
