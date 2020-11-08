namespace $.$$ {
	export class $hyoo_shelter extends $.$hyoo_shelter {
		
		@ $mol_mem
		pages() {

			if( !this.$.$hyoo_shelter_auth.signed() ) {
				return [ this.Auth() ]
			}

			return this.Manage().pages()

		}

		logout() {
			this.$.$hyoo_shelter_auth.drop()
		}

		render() {

			const login = this.$.$mol_state_arg.value( 'login' )
			if( login ) {

				$mol_fiber_defer( ()=> {
					this.Auth().login( login )
					this.Auth().submit( new KeyboardEvent( 'keypress' ) )
					this.$.$mol_state_arg.value( 'login', null )
				} )
				
			}
			
			return super.render()
		}

	}
}
