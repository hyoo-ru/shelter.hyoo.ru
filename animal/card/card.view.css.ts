namespace $ {

	const { rem, px } = $mol_style_unit

	$mol_style_define( $gravity_animal_card , {

		Card: {
			flex: {
				basis: rem(5),
				grow: 0,
				shrink: 0,
			},
		},

		Age: {
			flex: {
				basis: rem(5),
				grow: 0,
				shrink: 0,
			},
		},

		Size: {
			flex: {
				basis: rem(5),
				grow: 0,
				shrink: 0,
			},
		},

		Chip: {
			flex: {
				basis: rem(10),
				grow: 0,
				shrink: 0,
			},
		},

		'@': {
			mol_link_current: {
				'true': {
					Name: {
						color: 'currentColor' as any,
					},
				},
			},
			gravity_animal_card_gender: {
				'Male': {
					Name: {
						color: '#0078d7' as any,
					},
				},
				'Female': {
					Name: {
						color: '#f7630c' as any,
					},
				},
			},
		},

		Name: {
			textShadow: '0 0',
			flex: {
				basis: rem(15),
				grow: 1,
				shrink: 1,
			},
		},
		
		'>': {
			$mol_view: {
				margin: rem(.25),
			},
		},

	} )

}
