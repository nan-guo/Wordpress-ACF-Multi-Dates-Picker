/**
 * File calendar.js.
 *
 */

jQuery(document).ready(function($) {

	acf.add_action('load_field/type=textarea', function( $el ){
		init($el);
		var $clone = jQuery('.acf-clone');
		var $container = $clone.find('.mdp-container');
		$container.remove();
	});

	acf.add_action('append', function( $el ){
		init($el);
	});

	function init($el){

		var $field = $el.find('textarea');

		var $mdp = jQuery( '<div class="mdp-container"></div>');
		$field.before($mdp);
		$field.css('opacity', '0').hide();
		
		var $dates = [];
		var $defaultDate = new Date();
	
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

});