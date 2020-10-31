namespace $ {

	const { rem } = $mol_style_unit

	$mol_style_define( $gravity_shelter_manage_filter_group , {
		padding: rem(.75),
		Title: {
			padding: rem(.75),
			textShadow: '0 0 ',
		},
	} )

	$mol_style_define( $gravity_shelter_manage , {

		Search: {
			margin: [ 0 , rem(.75) ],
		},

		Filter_page: {
			flex: {
				basis: rem(15),
			},
		},

		Animals_page: {
			flex: {
				basis: rem(45),
			},
			Title: {
				flex: {
					basis: 'auto',
					grow: 0,
				},
			},
		},

		Animal_edit: {
			flex: {
				basis: rem(35),
				grow: 1000,
			},
		},

		Animal_list: {
			padding: rem(.75),
		},

	} )

}
