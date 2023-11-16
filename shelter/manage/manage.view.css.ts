namespace $ {

	const { rem, per } = $mol_style_unit

	$mol_style_define( $hyoo_shelter_shelter_manage_filter_group , {
		Title: {
			padding: $mol_gap.block,
			textShadow: '0 0 ',
		},
	} )

	$mol_style_define( $hyoo_shelter_shelter_manage , {
		
		Summaries: {
			flex: {
				wrap: 'wrap',
			},
			maxWidth: per(100),
		},

		Summary_options: {
			flex: {
				wrap: 'wrap',
			},
			width: 'fit-content',
		},

		Summary_title: {
			textShadow: '0 0 ',
			padding: $mol_gap.text,
		},

		Filter_page: {
			flex: {
				basis: rem(15),
				shrink: 0,
			},
		},
		
		Animals_page: {
			flex: {
				basis: rem(40),
				shrink: 0,
			},
		},
		
		Animal_edit: {
			flex: {
				basis: rem(80),
				grow: 1000,
				shrink: 0,
			},
		},

	} )

}
