declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $ {

	type $mol_book2_sub__1 = $mol_type_enforce<
		ReturnType< $mol_book2['pages'] >[number]
		,
		$mol_view
	>
	type $mol_book2_sub__2 = $mol_type_enforce<
		ReturnType< $mol_book2['placeholders'] >[number]
		,
		$mol_view
	>
	type $mol_view__title_mol_book2_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['title'] >
	>
	export class $mol_book2 extends $mol_scroll {
		pages_deep( ): readonly($mol_view)[]
		pages( ): ReturnType< $mol_book2['pages_deep'] >
		Placeholder( ): $mol_view
		placeholders( ): readonly($mol_view)[]
		menu_title( ): string
		sub( ): readonly($mol_view)[]
		minimal_width( ): number
		Gap( id: any): $mol_view
	}
	
}

//# sourceMappingURL=book2.view.tree.d.ts.map
declare namespace $ {

	export class $mol_theme_auto extends $mol_plugin {
		dark( ): string
		theme( ): ReturnType< $mol_theme_auto['dark'] >
		light( ): string
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_theme_auto['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=auto.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__dom_name_mol_page_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_2 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_page_3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_page_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name_mol_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_6 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type __mol_page_7 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub_mol_page_8 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_mol_page_9 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name_mol_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_11 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		attr( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $ {

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $ {

	export class $mol_follower extends $mol_ghost {
		transform( ): string
		Anchor( ): $mol_view
		align( ): readonly(number)[]
		offset( ): readonly(number)[]
		style( ): ({ 
			'transform': ReturnType< $mol_follower['transform'] >,
		})  & ReturnType< $mol_ghost['style'] >
	}
	
}

//# sourceMappingURL=follower.view.tree.d.ts.map
declare namespace $ {

	type $mol_pop_bubble__content_mol_pop_1 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max_mol_pop_2 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	type $mol_follower__offset_mol_pop_3 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_offset'] >
		,
		ReturnType< $mol_follower['offset'] >
	>
	type $mol_follower__align_mol_pop_4 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_align'] >
		,
		ReturnType< $mol_follower['align'] >
	>
	type $mol_follower__Anchor_mol_pop_5 = $mol_type_enforce<
		ReturnType< $mol_pop['Anchor'] >
		,
		ReturnType< $mol_follower['Anchor'] >
	>
	type $mol_follower__Sub_mol_pop_6 = $mol_type_enforce<
		ReturnType< $mol_pop['Bubble'] >
		,
		ReturnType< $mol_follower['Sub'] >
	>
	export class $mol_pop extends $mol_view {
		bubble( ): any
		Anchor( ): any
		bubble_offset( ): readonly(number)[]
		bubble_align( ): readonly(number)[]
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		Follower( ): $mol_follower
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		align( ): string
		prefer( ): string
		auto( ): readonly(any)[]
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'tabindex': number,
			'popover': string,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $ {

	export class $mol_speck extends $mol_view {
		value( ): any
		theme( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		activate( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		key_press( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		status( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			click( next?: ReturnType< $mol_button['activate'] > ): ReturnType< $mol_button['activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['key_press'] > ): ReturnType< $mol_button['key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__minimal_width_mol_pick_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height_mol_pick_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled_mol_pick_3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked_mol_pick_4 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks_mol_pick_5 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub_mol_pick_6 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint_mol_pick_7 = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		gap_before( ): number
		Gap_before( ): $mol_view
		Empty( ): $mol_view
		gap_after( ): number
		Gap_after( ): $mol_view
		rows( ): readonly($mol_view)[]
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window_shift( next?: number ): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_mol_search_1 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y_mol_search_2 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_search_3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value_mol_search_4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_search_5 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit_mol_search_6 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_search_7 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard_mol_search_8 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter_mol_search_9 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint_mol_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_search_11 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_search_12 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows_mol_search_14 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_search_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_dimmer__haystack_mol_search_16 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_search_17 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__18 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub_mol_search_19 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_mol_search_20 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_21 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {

	type $mol_dimmer__haystack_mol_select_1 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_select_2 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y_mol_select_3 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_select_4 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle_mol_select_5 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows_mol_select_6 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_select_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__enabled_mol_select_8 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__event_click_mol_select_9 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_mol_select_10 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_select_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query_mol_select_12 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint_mol_select_13 = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit_mol_select_14 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled_mol_select_15 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		enabled( ): boolean
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
		trigger_enabled( ): ReturnType< $mol_select['enabled'] >
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__minimal_height_mol_labeler_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_2 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_labeler_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_4 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_form_field_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_form_field extends $mol_labeler {
		name( ): string
		bid( ): string
		Bid( ): $mol_view
		control( ): any
		bids( ): readonly(string)[]
		label( ): readonly(any)[]
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {

	export class $mol_status extends $mol_view {
		message( ): string
		status( ): ReturnType< $mol_status['title'] >
		minimal_height( ): number
		minimal_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=status.view.tree.d.ts.map
declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {

	type $mol_list__sub_mol_form_1 = $mol_type_enforce<
		ReturnType< $mol_form['body'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type __mol_form_2 = $mol_type_enforce<
		Parameters< $mol_form['submit_activate'] >[0]
		,
		Parameters< ReturnType< $mol_form['Submit'] >['activate'] >[0]
	>
	type $mol_button_major__title_mol_form_3 = $mol_type_enforce<
		ReturnType< $mol_form['submit_title'] >
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__hint_mol_form_4 = $mol_type_enforce<
		ReturnType< $mol_form['submit_hint'] >
		,
		ReturnType< $mol_button_major['hint'] >
	>
	type $mol_button_major__click_mol_form_5 = $mol_type_enforce<
		ReturnType< $mol_form['submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_status__message_mol_form_6 = $mol_type_enforce<
		ReturnType< $mol_form['result'] >
		,
		ReturnType< $mol_status['message'] >
	>
	type $mol_row__sub_mol_form_7 = $mol_type_enforce<
		ReturnType< $mol_form['foot'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_form extends $mol_list {
		keydown( next?: any ): any
		form_invalid( ): string
		form_fields( ): readonly($mol_form_field)[]
		body( ): ReturnType< $mol_form['form_fields'] >
		Body( ): $mol_list
		submit_title( ): string
		submit_hint( ): string
		submit_activate( next?: ReturnType< ReturnType< $mol_form['Submit'] >['activate'] > ): ReturnType< ReturnType< $mol_form['Submit'] >['activate'] >
		submit( next?: any ): any
		Submit( ): $mol_button_major
		result( next?: any ): any
		Result( ): $mol_status
		buttons( ): readonly($mol_view)[]
		foot( ): ReturnType< $mol_form['buttons'] >
		Foot( ): $mol_row
		submit_allowed( ): boolean
		submit_blocked( ): boolean
		event( ): ({ 
			keydown( next?: ReturnType< $mol_form['keydown'] > ): ReturnType< $mol_form['keydown'] >,
		})  & ReturnType< $mol_list['event'] >
		save( next?: any ): any
		message_done( ): string
		errors( ): Record<string, string>
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_hyoo_shelter_auth_form_1 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $hyoo_shelter_auth_form['submit'] > ): ReturnType< $hyoo_shelter_auth_form['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_select__value_hyoo_shelter_auth_form_2 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_auth_form['login'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary_hyoo_shelter_auth_form_3 = $mol_type_enforce<
		({ 
			'user': string,
			'gbu1': string,
			'gbu2': string,
			'gbu3': string,
			'gbu4': string,
			'gbu5': string,
			'gbu6': string,
			'gbu7': string,
			'gbu8': string,
			'gbu9': string,
			'gbu10': string,
			'gbu11': string,
			'gbu12': string,
			'gbu13': string,
			'admin1': string,
			'admin2': string,
			'admin3': string,
			'admin4': string,
			'admin5': string,
			'admin6': string,
			'admin7': string,
			'admin8': string,
			'trustee1': string,
			'trustee2': string,
			'trustee3': string,
			'trustee4': string,
			'trustee5': string,
			'trustee6': string,
			'trustee7': string,
			'trustee8': string,
			'trustee9': string,
			'trustee10': string,
			'trustee11': string,
			'trustee12': string,
			'trustee13': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_form_field__name_hyoo_shelter_auth_form_4 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_auth_form['Login_name'] >
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__control_hyoo_shelter_auth_form_5 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_auth_form['Login'] >
		,
		ReturnType< $mol_form_field['control'] >
	>
	type $mol_string__type_hyoo_shelter_auth_form_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__value_hyoo_shelter_auth_form_7 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_auth_form['pass'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled_hyoo_shelter_auth_form_8 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_form_field__name_hyoo_shelter_auth_form_9 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_auth_form['Pass_name'] >
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__control_hyoo_shelter_auth_form_10 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_auth_form['Pass'] >
		,
		ReturnType< $mol_form_field['control'] >
	>
	type $mol_button_major__title_hyoo_shelter_auth_form_11 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_auth_form['Auth_label'] >
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_hyoo_shelter_auth_form_12 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_auth_form['auth'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_form__form_fields_hyoo_shelter_auth_form_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form['form_fields'] >
	>
	type $mol_form__buttons_hyoo_shelter_auth_form_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form['buttons'] >
	>
	export class $hyoo_shelter_auth_form extends $mol_page {
		submit( next?: any ): any
		Enter( ): $mol_hotkey
		Login_name( ): string
		login( next?: string ): string
		Login( ): $mol_select
		Login_field( ): $mol_form_field
		Pass_name( ): string
		pass( next?: string ): string
		Pass( ): $mol_string
		Pass_field( ): $mol_form_field
		Auth_label( ): string
		auth( next?: any ): any
		Submit( ): $mol_button_major
		Form( ): $mol_form
		title( ): string
		plugins( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_icon extends $mol_check {
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_brightness_4 extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=4.view.tree.d.ts.map
declare namespace $ {

	export class $mol_lights_toggle extends $mol_check_icon {
		Lights_icon( ): $mol_icon_brightness_4
		lights( next?: boolean ): boolean
		Icon( ): ReturnType< $mol_lights_toggle['Lights_icon'] >
		hint( ): string
		checked( next?: ReturnType< $mol_lights_toggle['lights'] > ): ReturnType< $mol_lights_toggle['lights'] >
	}
	
}

//# sourceMappingURL=toggle.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_logout extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=logout.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_download extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=download.view.tree.d.ts.map
declare namespace $ {

	export class $mol_image extends $mol_view {
		uri( ): string
		title( ): string
		loading( ): string
		decoding( ): string
		cors( ): any
		natural_width( ): number
		natural_height( ): number
		load( next?: any ): any
		dom_name( ): string
		attr( ): Record<string, any> & ReturnType< $mol_view['attr'] >
		event( ): Record<string, any>
		minimal_width( ): number
		minimal_height( ): number
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_upload extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=upload.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_open_native__files_mol_button_open_1 = $mol_type_enforce<
		ReturnType< $mol_button_open['files_handled'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_open_native__accept_mol_button_open_2 = $mol_type_enforce<
		ReturnType< $mol_button_open['accept'] >
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__multiple_mol_button_open_3 = $mol_type_enforce<
		ReturnType< $mol_button_open['multiple'] >
		,
		ReturnType< $mol_button_open_native['multiple'] >
	>
	export class $mol_button_open extends $mol_button_minor {
		Icon( ): $mol_icon_upload
		files( next?: readonly(File)[] ): readonly(File)[]
		files_handled( next?: ReturnType< $mol_button_open['files'] > ): ReturnType< $mol_button_open['files'] >
		accept( ): string
		multiple( ): boolean
		Native( ): $mol_button_open_native
		sub( ): readonly(any)[]
	}
	
	export class $mol_button_open_native extends $mol_view {
		accept( ): string
		multiple( ): boolean
		picked( next?: any ): any
		dom_name( ): string
		files( next?: readonly(File)[] ): readonly(File)[]
		attr( ): ({ 
			'type': string,
			'accept': ReturnType< $mol_button_open_native['accept'] >,
			'multiple': ReturnType< $mol_button_open_native['multiple'] >,
		}) 
		event( ): ({ 
			change( next?: ReturnType< $mol_button_open_native['picked'] > ): ReturnType< $mol_button_open_native['picked'] >,
		}) 
	}
	
}

//# sourceMappingURL=open.view.tree.d.ts.map
declare namespace $ {

	type $mol_image__title_mol_attach_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri_mol_attach_2 = $mol_type_enforce<
		ReturnType< $mol_attach['item_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_button_minor__click_mol_attach_3 = $mol_type_enforce<
		ReturnType< $mol_attach['item_drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_attach_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_open__title_mol_attach_5 = $mol_type_enforce<
		ReturnType< $mol_attach['attach_title'] >
		,
		ReturnType< $mol_button_open['title'] >
	>
	type $mol_button_open__files_mol_attach_6 = $mol_type_enforce<
		ReturnType< $mol_attach['attach_new'] >
		,
		ReturnType< $mol_button_open['files'] >
	>
	export class $mol_attach extends $mol_view {
		item_drop( id: any, next?: any ): any
		item_uri( id: any): string
		Image( id: any): $mol_image
		Item( id: any): $mol_button_minor
		attach_title( ): string
		attach_new( next?: any ): any
		Add( ): $mol_button_open
		content( ): readonly($mol_view)[]
		items( next?: readonly(string)[] ): readonly(string)[]
		sub( ): ReturnType< $mol_attach['content'] >
	}
	
}

//# sourceMappingURL=attach.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__checked_mol_check_list_1 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label_mol_check_list_2 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled_mol_check_list_3 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint_mol_check_list_4 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height_mol_check_list_5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=chevron.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_left extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=left.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_right extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=right.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_mol_number_1 = $mol_type_enforce<
		({ 
			down( next?: ReturnType< $mol_number['event_dec'] > ): ReturnType< $mol_number['event_dec'] >,
			up( next?: ReturnType< $mol_number['event_inc'] > ): ReturnType< $mol_number['event_inc'] >,
			pageDown( next?: ReturnType< $mol_number['event_dec_boost'] > ): ReturnType< $mol_number['event_dec_boost'] >,
			pageUp( next?: ReturnType< $mol_number['event_inc_boost'] > ): ReturnType< $mol_number['event_inc_boost'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_button_minor__event_click_mol_number_2 = $mol_type_enforce<
		ReturnType< $mol_number['event_dec'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled_mol_number_3 = $mol_type_enforce<
		ReturnType< $mol_number['dec_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_mol_number_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_string__type_mol_number_5 = $mol_type_enforce<
		ReturnType< $mol_number['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__keyboard_mol_number_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__value_mol_number_7 = $mol_type_enforce<
		ReturnType< $mol_number['value_string'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_number_8 = $mol_type_enforce<
		ReturnType< $mol_number['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__enabled_mol_number_9 = $mol_type_enforce<
		ReturnType< $mol_number['string_enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__submit_mol_number_10 = $mol_type_enforce<
		ReturnType< $mol_number['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_button_minor__event_click_mol_number_11 = $mol_type_enforce<
		ReturnType< $mol_number['event_inc'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled_mol_number_12 = $mol_type_enforce<
		ReturnType< $mol_number['inc_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_mol_number_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_number extends $mol_view {
		precision( ): number
		event_dec( next?: any ): any
		event_inc( next?: any ): any
		event_dec_boost( next?: any ): any
		event_inc_boost( next?: any ): any
		Hotkey( ): $mol_hotkey
		dec_enabled( ): ReturnType< $mol_number['enabled'] >
		dec_icon( ): $mol_icon_chevron_left
		Dec( ): $mol_button_minor
		type( ): string
		value_string( next?: string ): string
		hint( ): string
		string_enabled( ): ReturnType< $mol_number['enabled'] >
		submit( next?: any ): any
		String( ): $mol_string
		inc_enabled( ): ReturnType< $mol_number['enabled'] >
		inc_icon( ): $mol_icon_chevron_right
		Inc( ): $mol_button_minor
		precision_view( ): ReturnType< $mol_number['precision'] >
		precision_change( ): ReturnType< $mol_number['precision'] >
		boost( ): number
		value_min( ): number
		value_max( ): number
		value( next?: number ): number
		enabled( ): boolean
		plugins( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=number.view.tree.d.ts.map
declare namespace $ {

	export class $mol_stack extends $mol_view {
	}
	
}

//# sourceMappingURL=stack.view.tree.d.ts.map
declare namespace $ {

	export class $mol_text_code_token extends $mol_dimmer {
		type( ): string
		attr( ): ({ 
			'mol_text_code_token_type': ReturnType< $mol_text_code_token['type'] >,
		})  & ReturnType< $mol_dimmer['attr'] >
	}
	
	export class $mol_text_code_token_link extends $mol_text_code_token {
		uri( ): string
		dom_name( ): string
		type( ): string
		attr( ): ({ 
			'href': ReturnType< $mol_text_code_token_link['uri'] >,
			'target': string,
		})  & ReturnType< $mol_text_code_token['attr'] >
	}
	
}

//# sourceMappingURL=token.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_text_code_line_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text_code_token__type_mol_text_code_line_2 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_type'] >
		,
		ReturnType< $mol_text_code_token['type'] >
	>
	type $mol_text_code_token__haystack_mol_text_code_line_3 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_text'] >
		,
		ReturnType< $mol_text_code_token['haystack'] >
	>
	type $mol_text_code_token__needle_mol_text_code_line_4 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['highlight'] >
		,
		ReturnType< $mol_text_code_token['needle'] >
	>
	type $mol_text_code_token_link__haystack_mol_text_code_line_5 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_text'] >
		,
		ReturnType< $mol_text_code_token_link['haystack'] >
	>
	type $mol_text_code_token_link__needle_mol_text_code_line_6 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['highlight'] >
		,
		ReturnType< $mol_text_code_token_link['needle'] >
	>
	type $mol_text_code_token_link__uri_mol_text_code_line_7 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_uri'] >
		,
		ReturnType< $mol_text_code_token_link['uri'] >
	>
	export class $mol_text_code_line extends $mol_paragraph {
		numb( ): number
		token_type( id: any): string
		token_text( id: any): string
		highlight( ): string
		token_uri( id: any): string
		text( ): string
		minimal_height( ): number
		numb_showed( ): boolean
		syntax( ): any
		uri_resolve( id: any): string
		Numb( ): $mol_view
		Token( id: any): $mol_text_code_token
		Token_link( id: any): $mol_text_code_token_link
		find_pos( id: any): any
	}
	
}

//# sourceMappingURL=line.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	type $mol_blob__mol_button_copy_1 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob__mol_button_copy_2 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $ {

	type $mol_text_code_line__numb_showed_mol_text_code_1 = $mol_type_enforce<
		ReturnType< $mol_text_code['sidebar_showed'] >
		,
		ReturnType< $mol_text_code_line['numb_showed'] >
	>
	type $mol_text_code_line__numb_mol_text_code_2 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_numb'] >
		,
		ReturnType< $mol_text_code_line['numb'] >
	>
	type $mol_text_code_line__theme_mol_text_code_3 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_theme'] >
		,
		ReturnType< $mol_text_code_line['theme'] >
	>
	type $mol_text_code_line__text_mol_text_code_4 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_text'] >
		,
		ReturnType< $mol_text_code_line['text'] >
	>
	type $mol_text_code_line__syntax_mol_text_code_5 = $mol_type_enforce<
		ReturnType< $mol_text_code['syntax'] >
		,
		ReturnType< $mol_text_code_line['syntax'] >
	>
	type $mol_text_code_line__uri_resolve_mol_text_code_6 = $mol_type_enforce<
		ReturnType< $mol_text_code['uri_resolve'] >
		,
		ReturnType< $mol_text_code_line['uri_resolve'] >
	>
	type $mol_text_code_line__highlight_mol_text_code_7 = $mol_type_enforce<
		ReturnType< $mol_text_code['highlight'] >
		,
		ReturnType< $mol_text_code_line['highlight'] >
	>
	type $mol_list__render_visible_only_mol_text_code_8 = $mol_type_enforce<
		ReturnType< $mol_text_code['render_visible_only'] >
		,
		ReturnType< $mol_list['render_visible_only'] >
	>
	type $mol_list__rows_mol_text_code_9 = $mol_type_enforce<
		ReturnType< $mol_text_code['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_copy__hint_mol_text_code_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text_mol_text_code_11 = $mol_type_enforce<
		ReturnType< $mol_text_code['text_export'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	export class $mol_text_code extends $mol_stack {
		sidebar_showed( ): boolean
		render_visible_only( ): boolean
		row_numb( id: any): number
		row_theme( id: any): string
		row_text( id: any): string
		syntax( ): any
		uri_resolve( id: any): string
		highlight( ): string
		Row( id: any): $mol_text_code_line
		rows( ): readonly(any)[]
		Rows( ): $mol_list
		text_export( ): string
		Copy( ): $mol_button_copy
		attr( ): ({ 
			'mol_text_code_sidebar_showed': ReturnType< $mol_text_code['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		text( ): string
		text_lines( ): readonly(string)[]
		find_pos( id: any): any
		uri_base( ): string
		row_themes( ): readonly(string)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=code.view.tree.d.ts.map
declare namespace $ {

	type $mol_textarea_edit__value_mol_textarea_1 = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_textarea_edit['value'] >
	>
	type $mol_textarea_edit__hint_mol_textarea_2 = $mol_type_enforce<
		ReturnType< $mol_textarea['hint'] >
		,
		ReturnType< $mol_textarea_edit['hint'] >
	>
	type $mol_textarea_edit__enabled_mol_textarea_3 = $mol_type_enforce<
		ReturnType< $mol_textarea['enabled'] >
		,
		ReturnType< $mol_textarea_edit['enabled'] >
	>
	type $mol_textarea_edit__spellcheck_mol_textarea_4 = $mol_type_enforce<
		ReturnType< $mol_textarea['spellcheck'] >
		,
		ReturnType< $mol_textarea_edit['spellcheck'] >
	>
	type $mol_textarea_edit__length_max_mol_textarea_5 = $mol_type_enforce<
		ReturnType< $mol_textarea['length_max'] >
		,
		ReturnType< $mol_textarea_edit['length_max'] >
	>
	type $mol_textarea_edit__selection_mol_textarea_6 = $mol_type_enforce<
		ReturnType< $mol_textarea['selection'] >
		,
		ReturnType< $mol_textarea_edit['selection'] >
	>
	type $mol_textarea_edit__submit_mol_textarea_7 = $mol_type_enforce<
		ReturnType< $mol_textarea['submit'] >
		,
		ReturnType< $mol_textarea_edit['submit'] >
	>
	type $mol_textarea_edit__submit_with_ctrl_mol_textarea_8 = $mol_type_enforce<
		ReturnType< $mol_textarea['submit_with_ctrl'] >
		,
		ReturnType< $mol_textarea_edit['submit_with_ctrl'] >
	>
	type $mol_text_code__text_mol_textarea_9 = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__render_visible_only_mol_textarea_10 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code['render_visible_only'] >
	>
	type $mol_text_code__row_numb_mol_textarea_11 = $mol_type_enforce<
		ReturnType< $mol_textarea['row_numb'] >
		,
		ReturnType< $mol_text_code['row_numb'] >
	>
	type $mol_text_code__sidebar_showed_mol_textarea_12 = $mol_type_enforce<
		ReturnType< $mol_textarea['sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_text_code__highlight_mol_textarea_13 = $mol_type_enforce<
		ReturnType< $mol_textarea['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	type $mol_text_code__syntax_mol_textarea_14 = $mol_type_enforce<
		ReturnType< $mol_textarea['syntax'] >
		,
		ReturnType< $mol_text_code['syntax'] >
	>
	export class $mol_textarea extends $mol_stack {
		clickable( next?: boolean ): boolean
		sidebar_showed( ): boolean
		press( next?: any ): any
		hover( next?: any ): any
		value( next?: string ): string
		hint( ): string
		enabled( ): boolean
		spellcheck( ): boolean
		length_max( ): number
		selection( next?: readonly(number)[] ): readonly(number)[]
		bring( ): ReturnType< ReturnType< $mol_textarea['Edit'] >['bring'] >
		submit( next?: any ): any
		submit_with_ctrl( ): boolean
		Edit( ): $mol_textarea_edit
		row_numb( id: any): number
		highlight( ): string
		syntax( ): $mol_syntax2
		View( ): $mol_text_code
		attr( ): ({ 
			'mol_textarea_clickable': ReturnType< $mol_textarea['clickable'] >,
			'mol_textarea_sidebar_showed': ReturnType< $mol_textarea['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		event( ): ({ 
			keydown( next?: ReturnType< $mol_textarea['press'] > ): ReturnType< $mol_textarea['press'] >,
			pointermove( next?: ReturnType< $mol_textarea['hover'] > ): ReturnType< $mol_textarea['hover'] >,
		}) 
		sub( ): readonly(any)[]
		symbols_alt( ): Record<string, string>
		symbols_alt_ctrl( ): Record<string, string>
		symbols_alt_shift( ): Record<string, string>
	}
	
	export class $mol_textarea_edit extends $mol_string {
		dom_name( ): string
		enter( ): string
		field( ): ({ 
			'scrollTop': number,
		})  & ReturnType< $mol_string['field'] >
	}
	
}

//# sourceMappingURL=textarea.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_calendar extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_calendar_today extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=today.view.tree.d.ts.map
declare namespace $ {

	export class $mol_format extends $mol_string {
		mask( id: any): string
		allow( ): string
		hint( ): ReturnType< $mol_format['mask'] >
		keyboard( ): string
	}
	
}

//# sourceMappingURL=format.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=can.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hor extends $mol_view {
	}
	
}

//# sourceMappingURL=hor.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__minimal_height_mol_calendar_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_calendar_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_calendar_3 = $mol_type_enforce<
		ReturnType< $mol_calendar['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_hor__sub_mol_calendar_4 = $mol_type_enforce<
		ReturnType< $mol_calendar['weekdays'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__holiday_mol_calendar_5 = $mol_type_enforce<
		ReturnType< $mol_calendar['weekend'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__sub_mol_calendar_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	type $mol_hor__sub_mol_calendar_7 = $mol_type_enforce<
		ReturnType< $mol_calendar['week_days'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__ghost_mol_calendar_8 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_ghost'] >
		,
		ReturnType< $mol_calendar_day['ghost'] >
	>
	type $mol_calendar_day__holiday_mol_calendar_9 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_holiday'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__selected_mol_calendar_10 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_selected'] >
		,
		ReturnType< $mol_calendar_day['selected'] >
	>
	type $mol_calendar_day__today_mol_calendar_11 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_today'] >
		,
		ReturnType< $mol_calendar_day['today'] >
	>
	type $mol_calendar_day__theme_mol_calendar_12 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_theme'] >
		,
		ReturnType< $mol_calendar_day['theme'] >
	>
	type $mol_calendar_day__sub_mol_calendar_13 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_content'] >
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	export class $mol_calendar extends $mol_list {
		title( ): string
		Title( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		weekdays( ): readonly($mol_view)[]
		Weekdays( ): $mol_hor
		weekend( id: any): boolean
		weekday( id: any): string
		week_days( id: any): readonly($mol_view)[]
		day_ghost( id: any): boolean
		day_holiday( id: any): boolean
		day_selected( id: any): boolean
		day_today( id: any): boolean
		day_theme( id: any): any
		day_text( id: any): string
		day_content( id: any): readonly(any)[]
		sub( ): readonly(any)[]
		weeks( ): readonly($mol_view)[]
		weeks_count( ): number
		Weekday( id: any): $mol_calendar_day
		Week( id: any): $mol_hor
		Day( id: any): $mol_calendar_day
		month_string( ): string
		month_moment( ): $mol_time_moment
	}
	
	export class $mol_calendar_day extends $mol_view {
		holiday( ): boolean
		ghost( ): boolean
		selected( ): boolean
		today( ): boolean
		theme( ): any
		minimal_height( ): number
		minimal_width( ): number
		attr( ): ({ 
			'mol_calendar_holiday': ReturnType< $mol_calendar_day['holiday'] >,
			'mol_calendar_ghost': ReturnType< $mol_calendar_day['ghost'] >,
			'mol_calendar_selected': ReturnType< $mol_calendar_day['selected'] >,
			'mol_calendar_today': ReturnType< $mol_calendar_day['today'] >,
			'mol_theme': ReturnType< $mol_calendar_day['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_minor__hint_mol_date_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_date_2 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_date_3 = $mol_type_enforce<
		ReturnType< $mol_date['today_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_date_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type __mol_date_5 = $mol_type_enforce<
		Parameters< $mol_date['value_changed'] >[0]
		,
		Parameters< ReturnType< $mol_date['Input'] >['value_changed'] >[0]
	>
	type $mol_format__value_mol_date_6 = $mol_type_enforce<
		ReturnType< $mol_date['value'] >
		,
		ReturnType< $mol_format['value'] >
	>
	type $mol_format__mask_mol_date_7 = $mol_type_enforce<
		ReturnType< $mol_date['input_mask'] >
		,
		ReturnType< $mol_format['mask'] >
	>
	type $mol_format__enabled_mol_date_8 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_format['enabled'] >
	>
	type $mol_button_minor__hint_mol_date_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_date_10 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_date_11 = $mol_type_enforce<
		ReturnType< $mol_date['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_date_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_date_13 = $mol_type_enforce<
		ReturnType< $mol_date['input_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__hint_mol_date_14 = $mol_type_enforce<
		ReturnType< $mol_date['prev_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_mol_date_15 = $mol_type_enforce<
		ReturnType< $mol_date['prev'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_date_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__hint_mol_date_17 = $mol_type_enforce<
		ReturnType< $mol_date['next_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_mol_date_18 = $mol_type_enforce<
		ReturnType< $mol_date['next'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_date_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_date_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_date_calendar__enabled_mol_date_21 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_date_calendar['enabled'] >
	>
	type $mol_date_calendar__month_moment_mol_date_22 = $mol_type_enforce<
		ReturnType< $mol_date['month_moment'] >
		,
		ReturnType< $mol_date_calendar['month_moment'] >
	>
	type $mol_date_calendar__day_selected_mol_date_23 = $mol_type_enforce<
		ReturnType< $mol_date['day_selected'] >
		,
		ReturnType< $mol_date_calendar['day_selected'] >
	>
	type $mol_date_calendar__day_click_mol_date_24 = $mol_type_enforce<
		ReturnType< $mol_date['day_click'] >
		,
		ReturnType< $mol_date_calendar['day_click'] >
	>
	type $mol_date_calendar__head_mol_date_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_date_calendar['head'] >
	>
	export class $mol_date extends $mol_pick {
		enabled( ): boolean
		today_click( next?: any ): any
		Today_icon( ): $mol_icon_calendar_today
		Today( ): $mol_button_minor
		value( next?: string ): string
		value_changed( next?: ReturnType< ReturnType< $mol_date['Input'] >['value_changed'] > ): ReturnType< ReturnType< $mol_date['Input'] >['value_changed'] >
		input_mask( id: any): string
		Input( ): $mol_format
		clear( next?: any ): any
		Clear_icon( ): $mol_icon_trash_can_outline
		Clear( ): $mol_button_minor
		input_content( ): readonly(any)[]
		Input_row( ): $mol_view
		month_moment( ): ReturnType< $mol_date['value_moment'] >
		day_selected( id: any): boolean
		day_click( id: any, next?: any ): any
		Calendar_title( ): ReturnType< ReturnType< $mol_date['Calendar'] >['Title'] >
		prev_hint( ): string
		prev( next?: any ): any
		Prev_icon( ): $mol_icon_chevron_left
		Prev( ): $mol_button_minor
		next_hint( ): string
		next( next?: any ): any
		Next_icon( ): $mol_icon_chevron_right
		Next( ): $mol_button_minor
		Calendar_tools( ): $mol_view
		Calendar( ): $mol_date_calendar
		Icon( ): $mol_icon_calendar
		bubble_content( ): readonly(any)[]
		value_number( next?: number ): number
		value_moment( next?: $mol_time_moment ): $mol_time_moment
	}
	
	type $mol_button_minor__title_mol_date_calendar_1 = $mol_type_enforce<
		ReturnType< $mol_date_calendar['day_text'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__event_click_mol_date_calendar_2 = $mol_type_enforce<
		ReturnType< $mol_date_calendar['day_click'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__minimal_height_mol_date_calendar_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__enabled_mol_date_calendar_4 = $mol_type_enforce<
		ReturnType< $mol_date_calendar['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	export class $mol_date_calendar extends $mol_calendar {
		day_click( id: any, next?: any ): any
		enabled( ): boolean
		Day_button( id: any): $mol_button_minor
		day_content( id: any): readonly(any)[]
	}
	
}

//# sourceMappingURL=date.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_tick extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=tick.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_box extends $mol_check {
		Icon( ): $mol_icon_tick
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	export class $mol_form_group extends $mol_view {
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {

	type $mol_link__hint_hyoo_shelter_animal_edit_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__file_name_hyoo_shelter_animal_edit_2 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['download_name'] >
		,
		ReturnType< $mol_link['file_name'] >
	>
	type $mol_link__uri_hyoo_shelter_animal_edit_3 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['download_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_hyoo_shelter_animal_edit_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_attach__items_hyoo_shelter_animal_edit_5 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['photos'] >
		,
		ReturnType< $mol_attach['items'] >
	>
	type $mol_attach__minimal_height_hyoo_shelter_animal_edit_6 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_attach['minimal_height'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_8 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Photos'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__value_hyoo_shelter_animal_edit_9 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled_hyoo_shelter_animal_edit_10 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_11 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_12 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Name'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__value_hyoo_shelter_animal_edit_13 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['card'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled_hyoo_shelter_animal_edit_14 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_16 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Card'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__value_hyoo_shelter_animal_edit_17 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['chip'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled_hyoo_shelter_animal_edit_18 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_19 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_20 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Chip'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__value_hyoo_shelter_animal_edit_21 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['cage'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled_hyoo_shelter_animal_edit_22 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_23 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_24 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Cage'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_switch__value_hyoo_shelter_animal_edit_25 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['kind'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__enabled_hyoo_shelter_animal_edit_26 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_switch['enabled'] >
	>
	type $mol_switch__options_hyoo_shelter_animal_edit_27 = $mol_type_enforce<
		({ 
			'Cat': string,
			'Dog': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_28 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_29 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Kind'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_switch__value_hyoo_shelter_animal_edit_30 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['gender'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__enabled_hyoo_shelter_animal_edit_31 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_switch['enabled'] >
	>
	type $mol_switch__options_hyoo_shelter_animal_edit_32 = $mol_type_enforce<
		({ 
			'Male': string,
			'Female': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_33 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_34 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Gender'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_switch__value_hyoo_shelter_animal_edit_35 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['departed_reason'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__enabled_hyoo_shelter_animal_edit_36 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_switch['enabled'] >
	>
	type $mol_switch__options_hyoo_shelter_animal_edit_37 = $mol_type_enforce<
		({ 
			'Dead': string,
			'Owned': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_38 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_39 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Departed_reason'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_number__enabled_hyoo_shelter_animal_edit_40 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_number['enabled'] >
	>
	type $mol_number__value_hyoo_shelter_animal_edit_41 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['weight'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_42 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_43 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Weight'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_switch__value_hyoo_shelter_animal_edit_44 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['size'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__enabled_hyoo_shelter_animal_edit_45 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_switch['enabled'] >
	>
	type $mol_switch__options_hyoo_shelter_animal_edit_46 = $mol_type_enforce<
		({ 
			'small': string,
			'middle': string,
			'large': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_47 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_48 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Size'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_search__hint_hyoo_shelter_animal_edit_49 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__query_hyoo_shelter_animal_edit_50 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['size'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__enabled_hyoo_shelter_animal_edit_51 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	type $mol_search__suggests_hyoo_shelter_animal_edit_52 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['tail_suggest'] >
		,
		ReturnType< $mol_search['suggests'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_53 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_54 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Tail'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_search__hint_hyoo_shelter_animal_edit_55 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__query_hyoo_shelter_animal_edit_56 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['ear'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__enabled_hyoo_shelter_animal_edit_57 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	type $mol_search__suggests_hyoo_shelter_animal_edit_58 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['ear_suggest'] >
		,
		ReturnType< $mol_search['suggests'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_59 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_60 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Ear'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_search__hint_hyoo_shelter_animal_edit_61 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__query_hyoo_shelter_animal_edit_62 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['color'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__enabled_hyoo_shelter_animal_edit_63 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	type $mol_search__suggests_hyoo_shelter_animal_edit_64 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['color_suggest'] >
		,
		ReturnType< $mol_search['suggests'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_65 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_66 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Color'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_search__hint_hyoo_shelter_animal_edit_67 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__query_hyoo_shelter_animal_edit_68 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['fur'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__enabled_hyoo_shelter_animal_edit_69 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	type $mol_search__suggests_hyoo_shelter_animal_edit_70 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['fur_suggest'] >
		,
		ReturnType< $mol_search['suggests'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_71 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_72 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Fur'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_textarea__enabled_hyoo_shelter_animal_edit_73 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_74 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_75 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Trait'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_date__value_moment_hyoo_shelter_animal_edit_76 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['arrived_date'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	type $mol_date__enabled_hyoo_shelter_animal_edit_77 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_date['enabled'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_78 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__content_hyoo_shelter_animal_edit_79 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_field['content'] >
	>
	type $mol_date__value_moment_hyoo_shelter_animal_edit_80 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['born_date'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	type $mol_date__enabled_hyoo_shelter_animal_edit_81 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_date['enabled'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_82 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__content_hyoo_shelter_animal_edit_83 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_field['content'] >
	>
	type $mol_date__value_moment_hyoo_shelter_animal_edit_84 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['departed_date'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	type $mol_date__enabled_hyoo_shelter_animal_edit_85 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_date['enabled'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_86 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__content_hyoo_shelter_animal_edit_87 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_field['content'] >
	>
	type $mol_check_box__title_hyoo_shelter_animal_edit_88 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__enabled_hyoo_shelter_animal_edit_89 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_check_box['enabled'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_90 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Depart_ready'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_textarea__hint_hyoo_shelter_animal_edit_91 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__enabled_hyoo_shelter_animal_edit_92 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__value_hyoo_shelter_animal_edit_93 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['description'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_94 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_95 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Description'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_96 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_97 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_98 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_99 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_100 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_101 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_102 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_103 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_104 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_105 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_106 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_107 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_108 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_109 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_110 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_111 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_112 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_113 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Catch'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_114 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_115 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Procedure'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_field__name_hyoo_shelter_animal_edit_116 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_hyoo_shelter_animal_edit_117 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['Contract'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_form_group__sub_hyoo_shelter_animal_edit_118 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_group['sub'] >
	>
	type $mol_form__form_fields_hyoo_shelter_animal_edit_119 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form['form_fields'] >
	>
	type $mol_form__body_hyoo_shelter_animal_edit_120 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_edit['groups'] >
		,
		ReturnType< $mol_form['body'] >
	>
	type $hyoo_shelter_animal__hyoo_shelter_animal_edit_121 = $mol_type_enforce<
		[ Record<string, any> ]
		,
		ConstructorParameters< typeof $hyoo_shelter_animal >
	>
	export class $hyoo_shelter_animal_edit extends $mol_page {
		download_name( ): string
		download_link( ): string
		Download_icon( ): $mol_icon_download
		Download( ): $mol_link
		photos( next?: readonly(string)[] ): readonly(string)[]
		Photos( ): $mol_attach
		Photos_field( ): $mol_form_field
		name( next?: string ): string
		Name( ): $mol_string
		Name_field( ): $mol_form_field
		card( next?: string ): string
		Card( ): $mol_string
		Card_field( ): $mol_form_field
		chip( next?: string ): string
		Chip( ): $mol_string
		Chip_field( ): $mol_form_field
		cage( next?: string ): string
		Cage( ): $mol_string
		Cage_field( ): $mol_form_field
		kind( next?: string ): string
		Kind( ): $mol_switch
		Kind_field( ): $mol_form_field
		gender( next?: string ): string
		Gender( ): $mol_switch
		Gender_field( ): $mol_form_field
		departed_reason( next?: string ): string
		Departed_reason( ): $mol_switch
		Departed_reason_field( ): $mol_form_field
		weight( next?: number ): number
		Weight( ): $mol_number
		Weight_field( ): $mol_form_field
		size( next?: string ): string
		Size( ): $mol_switch
		Size_field( ): $mol_form_field
		tail_suggest( ): readonly(string)[]
		Tail( ): $mol_search
		Tail_field( ): $mol_form_field
		ear( next?: string ): string
		ear_suggest( ): readonly(string)[]
		Ear( ): $mol_search
		Ear_field( ): $mol_form_field
		color( next?: string ): string
		color_suggest( ): readonly(string)[]
		Color( ): $mol_search
		Color_field( ): $mol_form_field
		fur( next?: string ): string
		fur_suggest( ): readonly(string)[]
		Fur( ): $mol_search
		Fur_field( ): $mol_form_field
		Trait( ): $mol_textarea
		Trait_field( ): $mol_form_field
		arrived_date( next?: $mol_time_moment ): $mol_time_moment
		Arrived_date( ): $mol_date
		Arrived_date_field( ): $mol_form_field
		born_date( next?: $mol_time_moment ): $mol_time_moment
		Born_date( ): $mol_date
		Born_date_field( ): $mol_form_field
		departed_date( next?: $mol_time_moment ): $mol_time_moment
		Departed_date( ): $mol_date
		Departed_date_field( ): $mol_form_field
		Depart_ready( ): $mol_check_box
		Depart_ready_field( ): $mol_form_field
		description( next?: string ): string
		Description( ): $mol_textarea
		Description_field( ): $mol_form_field
		Attaches( ): $mol_form_group
		Main( ): $mol_form_group
		Codes( ): $mol_form_group
		General( ): $mol_form_group
		Transitions( ): $mol_form_group
		Lifetime( ): $mol_form_group
		Dates( ): $mol_form_group
		Types( ): $mol_form_group
		Gabarites( ): $mol_form_group
		Classification( ): $mol_form_group
		Ends( ): $mol_form_group
		Visual( ): $mol_form_group
		Appearance( ): $mol_form_group
		Visual2( ): $mol_form_group
		Appearance2( ): $mol_form_group
		Exports( ): $mol_form_group
		Catch( ): $hyoo_shelter_animal_edit_links
		Catch_field( ): $mol_form_field
		Procedure( ): $hyoo_shelter_animal_edit_links
		Procedure_field( ): $mol_form_field
		Contract( ): $hyoo_shelter_animal_edit_links
		Contract_field( ): $mol_form_field
		Documents( ): $mol_form_group
		groups( ): readonly(any)[]
		Form( ): $mol_form
		animal( ): $hyoo_shelter_animal
		title( ): string
		enabled( ): boolean
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
	type $mol_button_minor__sub_hyoo_shelter_animal_edit_links_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $hyoo_shelter_animal_edit_links extends $mol_view {
		Add_icon( ): $mol_icon_plus
		Add( ): $mol_button_minor
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=edit.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_hyoo_shelter_animal_card_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dimmer__haystack_hyoo_shelter_animal_card_2 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_card['card'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_hyoo_shelter_animal_card_3 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_card['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_view__sub_hyoo_shelter_animal_card_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dimmer__haystack_hyoo_shelter_animal_card_5 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_card['name'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_hyoo_shelter_animal_card_6 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_animal_card['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_view__sub_hyoo_shelter_animal_card_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hyoo_shelter_animal_card_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_shelter_animal__hyoo_shelter_animal_card_9 = $mol_type_enforce<
		[ Record<string, any> ]
		,
		ConstructorParameters< typeof $hyoo_shelter_animal >
	>
	type $hyoo_shelter_shelter_list__hyoo_shelter_animal_card_10 = $mol_type_enforce<
		[ Record<string, any> ]
		,
		ConstructorParameters< typeof $hyoo_shelter_shelter_list >
	>
	export class $hyoo_shelter_animal_card extends $mol_link {
		id( ): string
		gender( ): string
		shelter_name( ): string
		Shelter( ): $mol_view
		card( ): string
		highlight( ): string
		Card( ): $mol_dimmer
		kind( ): string
		Kind( ): $mol_view
		name( ): string
		Name( ): $mol_dimmer
		age( ): string
		Age( ): $mol_view
		size( ): string
		Size( ): $mol_view
		animal( ): $hyoo_shelter_animal
		shelters( ): $hyoo_shelter_shelter_list
		arg( ): ({ 
			'animal': ReturnType< $hyoo_shelter_animal_card['id'] >,
		}) 
		attr( ): ({ 
			'gravity_animal_card_gender': ReturnType< $hyoo_shelter_animal_card['gender'] >,
		})  & ReturnType< $mol_link['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=card.view.tree.d.ts.map
declare namespace $ {

	type $mol_link_source__uri_hyoo_shelter_shelter_manage_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_button_minor__click_hyoo_shelter_shelter_manage_2 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['logout'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_hyoo_shelter_shelter_manage_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $hyoo_shelter_shelter_manage_filter_group__title_hyoo_shelter_shelter_manage_4 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_shelter_shelter_manage_filter_group['title'] >
	>
	type $hyoo_shelter_shelter_manage_filter_group__items_hyoo_shelter_shelter_manage_5 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['filter_shelter_list'] >
		,
		ReturnType< $hyoo_shelter_shelter_manage_filter_group['items'] >
	>
	type $mol_list__rows_hyoo_shelter_shelter_manage_6 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['filter_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__sub_hyoo_shelter_shelter_manage_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__hint_hyoo_shelter_shelter_manage_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__file_name_hyoo_shelter_shelter_manage_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['file_name'] >
	>
	type $mol_link__target_hyoo_shelter_shelter_manage_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['target'] >
	>
	type $mol_link__uri_hyoo_shelter_shelter_manage_11 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['summary_1w'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_hyoo_shelter_shelter_manage_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__hint_hyoo_shelter_shelter_manage_13 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__file_name_hyoo_shelter_shelter_manage_14 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['file_name'] >
	>
	type $mol_link__target_hyoo_shelter_shelter_manage_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['target'] >
	>
	type $mol_link__uri_hyoo_shelter_shelter_manage_16 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['summary_1m'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_hyoo_shelter_shelter_manage_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__hint_hyoo_shelter_shelter_manage_18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__file_name_hyoo_shelter_shelter_manage_19 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['file_name'] >
	>
	type $mol_link__target_hyoo_shelter_shelter_manage_20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['target'] >
	>
	type $mol_link__uri_hyoo_shelter_shelter_manage_21 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['summary_3m'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_hyoo_shelter_shelter_manage_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__hint_hyoo_shelter_shelter_manage_23 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__file_name_hyoo_shelter_shelter_manage_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['file_name'] >
	>
	type $mol_link__target_hyoo_shelter_shelter_manage_25 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['target'] >
	>
	type $mol_link__uri_hyoo_shelter_shelter_manage_26 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['summary_1y'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_hyoo_shelter_shelter_manage_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub_hyoo_shelter_shelter_manage_28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_hyoo_shelter_shelter_manage_29 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page__tools_hyoo_shelter_shelter_manage_30 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__title_hyoo_shelter_shelter_manage_31 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['filter_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__body_hyoo_shelter_shelter_manage_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__foot_hyoo_shelter_shelter_manage_33 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['foot'] >
	>
	type $mol_search__query_hyoo_shelter_shelter_manage_34 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['search'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_button_major__click_hyoo_shelter_shelter_manage_35 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['add'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__hint_hyoo_shelter_shelter_manage_36 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['hint'] >
	>
	type $mol_button_major__sub_hyoo_shelter_shelter_manage_37 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_row__sub_hyoo_shelter_shelter_manage_38 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_list__rows_hyoo_shelter_shelter_manage_39 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['animal_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__Empty_hyoo_shelter_shelter_manage_40 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['Animal_list_empty'] >
		,
		ReturnType< $mol_list['Empty'] >
	>
	type $mol_page__tools_hyoo_shelter_shelter_manage_41 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['animals_page_tools'] >
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__title_hyoo_shelter_shelter_manage_42 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['animals_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__body_hyoo_shelter_shelter_manage_43 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type __hyoo_shelter_shelter_manage_44 = $mol_type_enforce<
		Parameters< $hyoo_shelter_shelter_manage['Animal_download'] >[0]
		,
		Parameters< $hyoo_shelter_shelter_manage['Animal_edit'] >[0]
	>
	type $mol_link__arg_hyoo_shelter_shelter_manage_45 = $mol_type_enforce<
		({ 
			'animal': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_hyoo_shelter_shelter_manage_46 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $hyoo_shelter_animal__hyoo_shelter_shelter_manage_47 = $mol_type_enforce<
		[ Record<string, any> ]
		,
		ConstructorParameters< typeof $hyoo_shelter_animal >
	>
	type $hyoo_shelter_shelter_list__hyoo_shelter_shelter_manage_48 = $mol_type_enforce<
		[ Record<string, any> ]
		,
		ConstructorParameters< typeof $hyoo_shelter_shelter_list >
	>
	type $hyoo_shelter_shelter_list__hyoo_shelter_shelter_manage_49 = $mol_type_enforce<
		[ Record<string, any> ]
		,
		ConstructorParameters< typeof $hyoo_shelter_shelter_list >
	>
	type $hyoo_shelter_shelter_animals__hyoo_shelter_shelter_manage_50 = $mol_type_enforce<
		[ Record<string, any> ]
		,
		ConstructorParameters< typeof $hyoo_shelter_shelter_animals >
	>
	type $mol_link__arg_hyoo_shelter_shelter_manage_51 = $mol_type_enforce<
		({ 
			'shelter': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_hyoo_shelter_shelter_manage_52 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg_hyoo_shelter_shelter_manage_53 = $mol_type_enforce<
		({ 
			'shelter': ReturnType< $hyoo_shelter_shelter_manage['shelter_id'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_hyoo_shelter_shelter_manage_54 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $hyoo_shelter_animal_edit__enabled_hyoo_shelter_shelter_manage_55 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['can_edit'] >
		,
		ReturnType< $hyoo_shelter_animal_edit['enabled'] >
	>
	type $hyoo_shelter_animal_edit__tools_hyoo_shelter_shelter_manage_56 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_shelter_animal_edit['tools'] >
	>
	type $hyoo_shelter_animal_edit__animal_hyoo_shelter_shelter_manage_57 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['animal'] >
		,
		ReturnType< $hyoo_shelter_animal_edit['animal'] >
	>
	type $hyoo_shelter_animal_card__animal_hyoo_shelter_shelter_manage_58 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['animal'] >
		,
		ReturnType< $hyoo_shelter_animal_card['animal'] >
	>
	type $hyoo_shelter_animal_card__highlight_hyoo_shelter_shelter_manage_59 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['search'] >
		,
		ReturnType< $hyoo_shelter_animal_card['highlight'] >
	>
	type $hyoo_shelter_animal_card__shelters_hyoo_shelter_shelter_manage_60 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['card_shelters'] >
		,
		ReturnType< $hyoo_shelter_animal_card['shelters'] >
	>
	type $mol_link__hint_hyoo_shelter_shelter_manage_61 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__file_name_hyoo_shelter_shelter_manage_62 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['download_name'] >
		,
		ReturnType< $mol_link['file_name'] >
	>
	type $mol_link__uri_hyoo_shelter_shelter_manage_63 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage['download_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_hyoo_shelter_shelter_manage_64 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $hyoo_shelter_shelter_manage extends $mol_book2 {
		Source_link( ): $mol_link_source
		Lights( ): $mol_lights_toggle
		logout( next?: any ): any
		Logout_icon( ): $mol_icon_logout
		Logout( ): $mol_button_minor
		filter_title( ): string
		filter_shelter_list( ): readonly(any)[]
		Filter_shelter_list( ): $hyoo_shelter_shelter_manage_filter_group
		filter_list( ): readonly(any)[]
		Filter_list( ): $mol_list
		Summary_title( ): $mol_view
		summary_1w( ): string
		Summary_1W( ): $mol_link
		summary_1m( ): string
		Summary_1M( ): $mol_link
		summary_3m( ): string
		Summary_3M( ): $mol_link
		summary_1y( ): string
		Summary_1Y( ): $mol_link
		Summary_options( ): $mol_view
		Summaries( ): $mol_view
		Filter_page( ): $mol_page
		search( next?: string ): string
		Search( ): $mol_search
		add( next?: any ): any
		Add_icon( ): $mol_icon_plus
		Add( ): $mol_button_major
		animals_page_tools( ): readonly(any)[]
		animals_title( ): string
		animal_list( ): readonly(any)[]
		Animal_list_empty( ): $mol_row
		Animal_list( ): $mol_list
		Animals_page( ): $mol_page
		shelter_id( id: any): string
		shelter_name( id: any): string
		can_edit( ): boolean
		Animal_download( id: any): ReturnType< ReturnType< $hyoo_shelter_shelter_manage['Animal_edit'] >['Download'] >
		Close_icon( id: any): $mol_icon_close
		Close( id: any): $mol_link
		animal( id: any): $hyoo_shelter_animal
		card_shelters( ): $hyoo_shelter_shelter_list
		download_name( ): string
		download_link( ): string
		Download_icon( ): $mol_icon_download
		shelters( ): $hyoo_shelter_shelter_list
		animals( ): $hyoo_shelter_shelter_animals
		pages( ): readonly(any)[]
		Shelter_link_all( ): $mol_link
		Shelter_link( id: any): $mol_link
		Animal_edit( id: any): $hyoo_shelter_animal_edit
		Animal_card( id: any): $hyoo_shelter_animal_card
		Download( ): $mol_link
	}
	
	type $mol_view__sub_hyoo_shelter_shelter_manage_filter_group_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_hyoo_shelter_shelter_manage_filter_group_2 = $mol_type_enforce<
		ReturnType< $hyoo_shelter_shelter_manage_filter_group['items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_shelter_shelter_manage_filter_group extends $mol_list {
		Title( ): $mol_view
		items( ): readonly(any)[]
		Items( ): $mol_list
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=manage.view.tree.d.ts.map
declare namespace $ {

	type $hyoo_shelter_shelter_manage__logout_hyoo_shelter_1 = $mol_type_enforce<
		ReturnType< $hyoo_shelter['logout'] >
		,
		ReturnType< $hyoo_shelter_shelter_manage['logout'] >
	>
	export class $hyoo_shelter extends $mol_book2 {
		Theme( ): $mol_theme_auto
		logout( next?: any ): any
		plugins( ): readonly(any)[]
		Auth( ): $hyoo_shelter_auth_form
		Manage( ): $hyoo_shelter_shelter_manage
	}
	
}

//# sourceMappingURL=shelter.view.tree.d.ts.map
export = $;
//# sourceMappingURL=web.d.ts.map
