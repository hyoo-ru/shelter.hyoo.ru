namespace $.$$ {

	export class $hyoo_shelter_shelter_manage extends $.$hyoo_shelter_shelter_manage {

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

		only() {
			return this.$.$mol_state_arg.value( 'only' )
		}

		pages() {
			if( this.animal_current() ) {
				return [
					... ( this.only() === null ) ? [
						this.Filter_page(),
						this.Animals_page(),
					]: [],
					this.Animal_edit( this.animal_current() ),
				]
			}
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
			return true
		}

		can_add() {
			return Boolean( this.can_edit() && this.shelter_current() )
		}

		card_shelters() {
			return this.shelter_current() ? null as any : this.shelters()
		}

		animals_page_tools() {
			return [
				this.Search(),
				this.Download(),
				... this.can_add() ? [ this.Add() ] : [ ],
			]
		}

		download_link() {
			return this.$.$hyoo_shelter_transport.link( `../reports/shelters/${ this.shelter_current() }/animal-register.docx` )
		}

		download_name() {
			return `animal-register.docx`
		}

		summary_1w() {
			return this.$.$hyoo_shelter_transport.link( `../reports/summary/1W.pdf` )
		}

		summary_1m() {
			return this.$.$hyoo_shelter_transport.link( `../reports/summary/1M.pdf` )
		}

		summary_3m() {
			return this.$.$hyoo_shelter_transport.link( `../reports/summary/3M.pdf` )
		}

		summary_1y() {
			return this.$.$hyoo_shelter_transport.link( `../reports/summary/1Y.pdf` )
		}

		add() {
			const Response = $mol_data_record({ id : $mol_data_integer })
			const response = this.$.$hyoo_shelter_transport.save( `shelters/${ this.shelter_current() }/animals`, 'post', {
				name: '',
				readyForDepart: false,
				card: $mol_stub_code(),
				kind: 'Dog',
				chip: $mol_stub_code(),
				gender: 'Male',
				cage: '',
				arrivedAt: new $mol_time_moment().mask('1111-11-11').toString(),
				departedAt: null,
				birthDate: new $mol_time_moment().mask('1111-11-11').toString(),
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
			this.$.$mol_state_arg.value( 'animal', String( id ) )
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
