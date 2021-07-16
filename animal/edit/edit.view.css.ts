namespace $ {

	const { rem } = $mol_style_unit

	$mol_style_define( $hyoo_shelter_animal_edit , {
		
		Body: {
			padding: 0,
		},

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

		$mol_attach_item: {
			flex: {
				basis: rem(10),
			},
			width: rem(10),
			height: rem(10),
		},

		Photos: {
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

	$mol_style_define( $hyoo_shelter_animal_edit_section , {
		margin: 0,
		padding: 0,
	})
	
	$mol_style_define( $hyoo_shelter_animal_edit_group , {
		
		margin: 0,
		padding: 0,

		flex: {
			grow: 1,
			shrink: 1,
			basis: rem(30),
		},

		$mol_form_field: {
			flex: {
				grow: 1,
				shrink: 0,
				basis: rem(14),
			},
			margin: $mol_gap.block,
		},

	} )

	$mol_style_define( $hyoo_shelter_animal_edit_links , {
		
		Add: {
			flex: {
				grow: 1,
			},
		},

	} )

}
