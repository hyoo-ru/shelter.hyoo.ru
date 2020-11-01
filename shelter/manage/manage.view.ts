namespace $.$$ {

	export class $gravity_shelter_manage extends $.$gravity_shelter_manage {

		animal( key: string ) {
			return this.animals().Animal( key )
		}

		@ $mol_mem
		animal_list_filtered() {
			
			let list = this.animals().list()

			const shelter = this.shelter_current()
			if( shelter ) {
				list = list.filter( animal => animal.shelter_id() === shelter )
			}

			list = list.filter( $mol_match_text( this.search(), animal => [
				animal.name(),
				animal.card(),
				animal.chip(),
			] ) )

			return list
		}
		
		@ $mol_mem
		animal_list() {
			
			let list = this.animal_list_filtered().slice()
			
			list.sort( ( a, b )=> b.arrived_date()!.valueOf() - a.arrived_date()!.valueOf() )
			
			return list.map( animal => this.Animal_card( animal.id() ) )
		}
		
		animal_current( next? : string ) {
			return this.$.$mol_state_arg.value( 'animal' , next )
		}

		pages() {
			return [
				this.Filter_page(),
				this.Animals_page(),
				... this.animal_current() ? [ this.Animal_edit( this.animal_current() ) ] : [],
			]
		}

		@ $mol_mem
		shelter_current() {
			return this.$.$mol_state_arg.value( 'shelter' ) ?? this.shelter_single()?.id() ?? null
		}

		@ $mol_mem
		shelter_single() {
			const all = this.shelters().list()
			if( all.length === 1 ) return all[0]
			return null
		}

		can_edit() {
			return !! this.shelter_single()
		}

		card_shelters() {
			return this.shelter_current() ? null as any : this.shelters()
		}

		animals_page_tools() {
			return [
				this.Search(),
				this.Download(),
				this.Summaries(),
				... this.can_edit() ? [ this.Add() ] : [ ],
			]
		}

		download_link() {
			return this.$.$gravity_transport.link( `../reports/shelters/${ this.shelter_current() }/animal-register.docx` )
		}

		download_name() {
			return `animal-register.docx`
		}

		summary_1w() {
			return this.$.$gravity_transport.link( `../reports/summary/1W.pdf` )
		}

		summary_1m() {
			return this.$.$gravity_transport.link( `../reports/summary/1M.pdf` )
		}

		summary_3m() {
			return this.$.$gravity_transport.link( `../reports/summary/3M.pdf` )
		}

		summary_1y() {
			return this.$.$gravity_transport.link( `../reports/summary/1Y.pdf` )
		}

		add() {
			const Response = $mol_data_record({ id : $mol_data_string })
			const response = this.$.$gravity_transport.save( `shelters/${ this.shelter_current() }/animals`, 'post', {
				name: '',
				readyForDepart: false,
				card: '',
				chip: '',
				kind: '',
				gender: '',
				cage: '',
				arrivedAt: '',
				departedAt: null,
				birthDate: '',
				weight: 0,
				ears: '',
				tail: '',
				size: '',
				color: '',
				description: '',
				photos: [],
				fur: '',
			} )
			const id = Response( response ).id
			this.$.$mol_state_arg.value( 'animal', id )
		}

		filter_shelter_list() {
			return [
				this.Shelter_link_all(),
				... this.shelters().list().map( shelter => this.Shelter_link( shelter.id() ) )
			]
		}

		shelter_id( id: string ) {
			return id
		}

		shelter_name( id: string ) {
			return this.shelters().Shelter( id ).name()
		}

	}

}
