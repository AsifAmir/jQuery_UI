$(document).ready(function(){
	// autocomplete
	var availableTags = [
      "Html", "CSS", "Bootstrap", "JavaScript", "jQuery",
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
	// draggable
	$( "#draggable" ).draggable();
	// default accordian
	$( "#accordion1" ).accordion();
	// collapse accordian
	$( "#accordion2" ).accordion({
      collapsible: true
    });
});