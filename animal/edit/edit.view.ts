namespace $.$$ {
	
	export class $gravity_animal_edit extends $.$gravity_animal_edit {

		@ $mol_mem
		photos( next?: $mol_attach_item[] ) {
			return next ?? this.animal().photos().map( ( link, index )=> this.Photo( index ) )
		}

		photo( index: number ) {
			return this.$.$gravity_transport.link( '..' + this.animal().photos()[ index ] )
		}

		photo_new( file: File ) {
			this.$.$gravity_transport.send( `shelters/${ this.animal().shelter_id() }/photos`, file )
		}

		description( next?: string ) {
			return this.animal().description( next )
		}

		name( next?: string ) {
			return this.animal().name( next )
		}

		card( next?: string ) {
			return this.animal().card( next )
		}

		chip( next?: string ) {
			return this.animal().chip( next )
		}

		cage( next?: string ) {
			return this.animal().cage( next )
		}

		weight( next?: number ) {
			return this.animal().weight( next )
		}

		size( next?: string ) {
			return this.animal().size( next )
		}

		ear( next?: string ) {
			this.ear_suggest()
			return this.animal().ear( next )
		}
		
		tail( next?: string ) {
			this.tail_suggest()
			return this.animal().tail( next )
		}

		color( next?: string ) {
			return this.animal().color( next )
		}

		fur( next?: string ) {
			return this.animal().fur( next )
		}

		kind( next?: $gravity_animal_kind ) {
			return this.animal().kind( next )
		}

		gender( next?: $gravity_animal_gender ) {
			return this.animal().gender( next )
		}

		arrived_date( next?: $mol_time_moment ) {
			return this.animal().arrived_date( next )
		}

		departed_date( next?: $mol_time_moment ) {
			return this.animal().departed_date( next )
		}

		born_date( next?: $mol_time_moment ) {
			return this.animal().born_date( next )
		}

		ear_suggest() {
			return this.$.$gravity_dict.ear_suggest()
		}

		tail_suggest() {
			return this.$.$gravity_dict.tail_suggest()
		}

		color_suggest() {
			return this.$.$gravity_dict.color_suggest( this.kind() )
		}

		fur_suggest() {
			return this.$.$gravity_dict.fur_suggest( this.kind() )
		}

		download_name() {
			return `${ this.card() } ${ this.name() }.docx`
		}

		download_link() {
			return this.$.$gravity_transport.link( `../reports/animals/${ this.animal().id() }/animal-card.docx` )
		}

	}

}
