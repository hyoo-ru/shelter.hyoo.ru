namespace $ {

	const { rem } = $mol_style_unit

	$mol_style_define( $hyoo_shelter_shelter_manage_filter_group , {
		padding: $mol_gap.block,
		Title: {
			padding: $mol_gap.block,
			textShadow: '0 0 ',
		},
	} )

	$mol_style_define( $hyoo_shelter_shelter_manage , {

		Summaries: {
			padding: $mol_gap.block,
			flex: {
				wrap: 'wrap',
			},
		},

		Summary_options: {
			flex: {
				wrap: 'wrap',
			},
		},

		Summary_title: {
			textShadow: '0 0 ',
			padding: $mol_gap.text,
		},

		Filter_page: {
			flex: {
				basis: rem(17),
			},
		},

		Animals_page: {
			flex: {
				basis: rem(30),
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
				basis: rem(33),
				grow: 1000,
			},
		},

		Animal_list: {
			padding: rem(.5),
		},

	} )

}
