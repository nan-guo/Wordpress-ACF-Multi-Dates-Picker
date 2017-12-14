(function($){
		
	if( typeof acf.add_action !== 'undefined' ) {
	
		/*
		*  ready & append (ACF5)
		*
		*  These two events are called when a field element is ready for initizliation.
		*  - ready: on page load similar to $(document).ready()
		*  - append: on new DOM elements appended via repeater field or other AJAX calls
		*
		*  @param	n/a
		*  @return	n/a
		*/
		
		acf.add_action('ready_field/type=multi_dates_picker', function( $el ){

		});
		acf.add_action('load_field/type=multi_dates_picker', function( $el ){
			init($el)
		});
		acf.add_action('append_field/type=multi_dates_picker', function( $el ){
			init($el)
		});

		
	} else {
		
		/*
		*  acf/setup_fields (ACF4)
		*
		*  These single event is called when a field element is ready for initizliation.
		*
		*  @param	event		an event object. This can be ignored
		*  @param	element		An element which contains the new HTML
		*  @return	n/a
		*/
		
		$(document).on('acf/setup_fields', function(e, postbox){
			
			// find all relevant fields
			$(postbox).find('.field[data-field_type="multi_dates_picker"]').each(function(){
				
				// initialize
				init($(this));
			});
		
		});
	
	}

	function init($el){

		var $mdp = $el.find('.pdg-mdp-container');
		var $dates = [];
		var $defaultDate = new Date();

		$field = $el.find('.pdg-acf-multi-dates-picker-input');
		
		if($field.text() != '') {
			$dates = jQuery.map($field.text().split(","), jQuery.trim);
			$defaultDate = $dates[0];
		}

		var $datapicker = $mdp.multiDatesPicker({
			dateFormat: "yy-mm-dd",
			altField: '#'+$field.attr('id'),
			defaultDate: $defaultDate,
		});

		if($dates.length > 0) {
			$datapicker.multiDatesPicker('addDates', $dates);
		}

	}

})(jQuery);
