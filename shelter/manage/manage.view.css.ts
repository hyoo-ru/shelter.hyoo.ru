namespace $ {

	const { per , rem } = $mol_style_unit

	$mol_style_define( $gravity_shelter_manage , {

		Animals_page: {
			flex: {
				basis: rem(40),
			},
			Title: {
				flex: {
					basis: 'auto',
				},
			},
		},

		Animal_edit: {
			flex: {
				basis: rem(40),
				grow: 1000,
			},
			maxWidth: rem(120),
		},

		Animal_list: {
			padding: rem(.75),
		},

	} )

}
