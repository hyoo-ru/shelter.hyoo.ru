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

	}
}
