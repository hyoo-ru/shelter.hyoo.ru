namespace $ {

	const { rem } = $mol_style_unit

	$mol_style_define( $hyoo_shelter_animal_card , {

		padding: $mol_gap.text,

		flex: {
			wrap: 'wrap',
		},

		Shelter: {
			flex: {
				basis: rem(6),
				grow: 1,
				shrink: 1,
			},
		},

		Card: {
			flex: {
				basis: rem(6),
				grow: 0,
				shrink: 0,
			},
		},

		Age: {
			flex: {
				basis: rem(2),
				grow: 0,
				shrink: 0,
			},
			alignContent: 'flex-end',
		},

		Size: {
			flex: {
				basis: rem(8),
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
				basis: rem(6),
				grow: 1,
				shrink: 1,
			},
		},
		
	} )

}
