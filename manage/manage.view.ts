namespace $.$$ {

	export class $gravity_manage extends $.$gravity_manage {

		shelter_name() {
			return this.shelter().name()
		}

		animal( index: number ) {
			return this.shelter().Animal( index )
		}

		@ $mol_mem
		animal_list() {
			console.log( $mol_fetch.json( 'https://gravity-animal-shelter.herokuapp.com/api/shelters/1/animals', {
				headers: {
					'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDQwOTQ4MjUsImV4cCI6MTYwNDA5ODQyNSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlciJ9.RLeedmvNo87U91cuQysPD2awOcIBPhfHJe_ugln4H9Ohjl87M2nmBqoEz9dYT3W3erfpcmumxXxqLve_VuSjp0nC-TRi6gV62ItxiQbn_9uYIsORsBv5fQgBMY4-CdiKDg4nfm66ed6bKOTVKXaDWr3wkoVtL-PpF6nkT1lmpCsVljUEThiNKKl8-oAHirOxrAKWz8eobaIRZXjtVts6BBBrGCfbiVqPgaCVZXhHmGbSmxXUZGUZixk4r9VDyAclKK1reWR6ZxZR8gw1ZH8xxRBgv_UcH56-9o1wG_m5MK3Zo0eJJJwcTknG-wyXpmGg41hqceG_dtlJX3v5egk9q741lbu6ZhuUWuW5ybbLNOGrn4H_T07Y56JQusvRYuAOBRfp5m44sF0K_Z-Tosq5g2jNDvHY3Alr3DKayqcWhVMMBQgpB6ZZTcJ_wPVN5a-DNY-Vtgiqfct4VLVoGYs5N5kmFX9fQlIWChV8Rqr5a6yxT_AlcMFwhm3nKT42D1xfzkz3JKanz7ivt-uS3mxZHNf-T-Lv3dwXOh_DkdNRoR7yOjrzDhVan26-DuLhqqrSfFtWY11pbJuGtTnen1OnZ5rC9VX8OnNmhSp-mFpD4DS9vqqKsOABQJe9PcYxl8jn4GZ1v1wvRmQ3FFSkPNDeh3RbbCtrudmmr8xxRhDDwcU',
				},
			} ) )
			return this.shelter().animal().map( (_,i)=> this.Animal_card(i) )
		}

	}

}
