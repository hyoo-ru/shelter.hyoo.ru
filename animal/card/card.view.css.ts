namespace $ {

	const { rem, px } = $mol_style_unit

	$mol_style_define( $gravity_animal_card , {

		Card: {
			flex: {
				basis: rem(4),
				grow: 0,
				shrink: 0,
			},
		},
		
		'>': {
			$mol_view: {
				margin: rem(.25),
			},
		},

	} )

}
