namespace $ {

	const { rem } = $mol_style_unit

	$mol_style_define( $hyoo_shelter_animal_edit , {
		
		Weight: {
			String: {
				textAlign: 'left',
			},
		},

		Ear: {
			alignSelf: 'stretch',
		},

		Tail: {
			alignSelf: 'stretch',
		},

		Color: {
			alignSelf: 'stretch',
		},

		Photos: {
			Item: {
				flex: {
					basis: rem(10),
				},
				width: rem(10),
				height: rem(10),
			},
			Add: {
				width: rem(10),
				height: rem(10),
				flex: {
					basis: rem(10),
					grow: 0,
				},
			},
		},

	} )

}
