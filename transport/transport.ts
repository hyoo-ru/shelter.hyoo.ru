namespace $ {
	
	export class $hyoo_shelter_transport extends $mol_object2 {

		static api_base() {
			return 'https://gravity-animal-shelter.herokuapp.com/api/'
		}

		@ $mol_mem
		static token( next? : string | null ) {
			return this.$.$mol_state_local.value( 'token' , next )
		}
		
		@ $mol_mem
		static headers() {

			const headers = {
				'Content-Type': 'application/json',
			}
			
			const token = this.token()
			if( !token ) return headers
			
			return {
				... headers,
				'Authorization': `Bearer ${token}`,
			}

		}

		@ $mol_fiber.method
		static load( path : string ) : any {
			return this.$.$mol_fetch.json( this.api_base() + path , {
				headers : this.headers()
			} )
		}

		static link( path : string ) : any {
			return this.api_base() + path
		}

		@ $mol_fiber.method
		static save(
			path : string ,
			method : 'post' | 'put' ,
			body : object
		) : any {

			const uri = this.api_base() + path
			
			const res = this.$.$mol_fetch.json( uri , {
				method ,
				headers : this.headers(),
				body : JSON.stringify( body ),
			} )

			return res
		}

		@ $mol_fiber.method
		static send(
			path : string ,
			file : File
		) : any {

			const uri = this.api_base() + path

			const body = new FormData
			body.append( 'photos[0]', file )
			
			const res = this.$.$mol_fetch.json( uri , {
				method: 'post' ,
				headers : { ... this.headers(), 'Content-Type': 'multipart/form-data' },
				body,
			} )

			return res
		}

	}

}
