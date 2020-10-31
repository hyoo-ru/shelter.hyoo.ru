namespace $.$$ {
	export class $gravity extends $.$gravity {
		
		@ $mol_mem
		pages() {

			if( !this.$.$gravity_auth.signed() ) {
				return [ this.Auth() ]
			}

			return this.Manage().pages()

		}

		logout() {
			this.$.$gravity_auth.drop()
		}

	}
}
