namespace $ {

	const Response = $mol_data_record({
		tail_types: $mol_data_array( $mol_data_string ),
		ears_types: $mol_data_array( $mol_data_string ),
		death_reasons: $mol_data_array( $mol_data_string ),
		departure_reasons: $mol_data_array( $mol_data_string ),
		fur_types: $mol_data_dict( $mol_data_array( $mol_data_string ) ),
		colors: $mol_data_dict( $mol_data_array( $mol_data_string ) ),
		breeds: $mol_data_dict( $mol_data_array( $mol_data_string ) ),
	})

	export class $hyoo_shelter_dict extends $mol_object2 {

		@ $mol_mem
		static data() {
			$mol_wire_solid()
			return Response( this.$.$hyoo_shelter_transport.load( `dictionaries` ) )
		}

		static tail_suggest() {
			return this.data().tail_types
		}

		static ear_suggest() {
			return this.data().ears_types
		}

		static dead_reason_suggest() {
			return this.data().death_reasons
		}

		static departed_reason_suggest() {
			return this.data().departure_reasons
		}

		static fur_suggest( kind : $hyoo_shelter_animal_kind ) {
			return this.data().fur_types[ kind ]
		}

		static color_suggest( kind : $hyoo_shelter_animal_kind ) {
			return this.data().colors[ kind ]
		}

		static breed_suggest( kind : $hyoo_shelter_animal_kind ) {
			return this.data().breeds[ kind ]
		}

	}

}
