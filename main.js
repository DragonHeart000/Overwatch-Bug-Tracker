////////////////Picking maps to show options for////////////////

$(function(){
	"use strict";
    $('#assaultMapsSelectionButton').click(function() {
		if($("#assaultmaps").is(":visible")){
			$("#assaultmaps").slideUp();
			//$("#escortMaps").slideUp();
			//$("#hybridMaps").slideUp();
			//$("#controlMaps").slideUp();
			//$("#arcadeMaps").slideUp();
			//$("#otherMaps").slideUp();
			
			$("#assaultMapsSelectionButton").css("background-color", "#FFB600");
		} else {
			$("#assaultmaps").slideDown();
			$("#escortMaps").slideUp();
			$("#hybridMaps").slideUp();
			$("#controlMaps").slideUp();
			$("#arcadeMaps").slideUp();
			$("#otherMaps").slideUp();
			
			$("#assaultMapsSelectionButton").css("background-color", "#006d2a");
			$("#escortMapsSelectionButton").css("background-color", "#FFB600");
			$("#hybridMapsSelectionButton").css("background-color", "#FFB600");
			$("#controlMapsSelectionButton").css("background-color", "#FFB600");
			$("#arcadeMapsSelectionButton").css("background-color", "#FFB600");
			$("#otherMapsSelectionButton").css("background-color", "#FFB600");
		}
    });
});

$(function(){  //Same as above for different text box and button
	"use strict";
    $('#escortMapsSelectionButton').click(function() {
		if($("#escortMaps").is(":visible")){
			//$("#assaultmaps").slideUp();
			$("#escortMaps").slideUp();
			//$("#hybridMaps").slideUp();
			//$("#controlMaps").slideUp();
			//$("#arcadeMaps").slideUp();
			//$("#otherMaps").slideUp();
			
			$("#escortMapsSelectionButton").css("background-color", "#FFB600");
		} else {
			$("#assaultmaps").slideUp();
			$("#escortMaps").slideDown();
			$("#hybridMaps").slideUp();
			$("#controlMaps").slideUp();
			$("#arcadeMaps").slideUp();
			$("#otherMaps").slideUp();
			
			$("#assaultMapsSelectionButton").css("background-color", "#FFB600");
			$("#escortMapsSelectionButton").css("background-color", "#006d2a");
			$("#hybridMapsSelectionButton").css("background-color", "#FFB600");
			$("#controlMapsSelectionButton").css("background-color", "#FFB600");
			$("#arcadeMapsSelectionButton").css("background-color", "#FFB600");
			$("#otherMapsSelectionButton").css("background-color", "#FFB600");
		}
    });
});

$(function(){  //Same as above for different text box and button
	"use strict";
    $('#hybridMapsSelectionButton').click(function() {
		if($("#hybridMaps").is(":visible")){
			//$("#assaultmaps").slideUp();
			//$("#escortMaps").slideUp();
			$("#hybridMaps").slideUp();
			//$("#controlMaps").slideUp();
			//$("#arcadeMaps").slideUp();
			//$("#otherMaps").slideUp();
			
			$("#hybridMapsSelectionButton").css("background-color", "#FFB600");
		} else {
			$("#assaultmaps").slideUp();
			$("#escortMaps").slideUp();
			$("#hybridMaps").slideDown();
			$("#controlMaps").slideUp();
			$("#arcadeMaps").slideUp();
			$("#otherMaps").slideUp();
			
			$("#assaultMapsSelectionButton").css("background-color", "#FFB600");
			$("#escortMapsSelectionButton").css("background-color", "#FFB600");
			$("#hybridMapsSelectionButton").css("background-color", "#006d2a");
			$("#controlMapsSelectionButton").css("background-color", "#FFB600");
			$("#arcadeMapsSelectionButton").css("background-color", "#FFB600");
			$("#otherMapsSelectionButton").css("background-color", "#FFB600");
		}
    });
});

$(function(){  //Same as above for different text box and button
	"use strict";
    $('#controlMapsSelectionButton').click(function() {
		if($("#controlMaps").is(":visible")){
			//$("#assaultmaps").slideUp();
			//$("#escortMaps").slideUp();
			//$("#hybridMaps").slideUp();
			$("#controlMaps").slideUp();
			//$("#arcadeMaps").slideUp();
			//$("#otherMaps").slideUp();
			
			$("#controlMapsSelectionButton").css("background-color", "#FFB600");
		} else {
			$("#assaultmaps").slideUp();
			$("#escortMaps").slideUp();
			$("#hybridMaps").slideUp();
			$("#controlMaps").slideDown();
			$("#arcadeMaps").slideUp();
			$("#otherMaps").slideUp();
			
			$("#assaultMapsSelectionButton").css("background-color", "#FFB600");
			$("#escortMapsSelectionButton").css("background-color", "#FFB600");
			$("#hybridMapsSelectionButton").css("background-color", "#FFB600");
			$("#controlMapsSelectionButton").css("background-color", "#006d2a");
			$("#arcadeMapsSelectionButton").css("background-color", "#FFB600");
			$("#otherMapsSelectionButton").css("background-color", "#FFB600");
		}
    });
});

$(function(){  //Same as above for different text box and button
	"use strict";
    $('#arcadeMapsSelectionButton').click(function() {
		if($("#arcadeMaps").is(":visible")){
			//$("#assaultmaps").slideUp();
			//$("#escortMaps").slideUp();
			//$("#hybridMaps").slideUp();
			//$("#controlMaps").slideUp();
			$("#arcadeMaps").slideUp();
			//$("#otherMaps").slideUp();
			
			$("#arcadeMapsSelectionButton").css("background-color", "#FFB600");
		} else {
			$("#assaultmaps").slideUp();
			$("#escortMaps").slideUp();
			$("#hybridMaps").slideUp();
			$("#controlMaps").slideUp();
			$("#arcadeMaps").slideDown();
			$("#otherMaps").slideUp();
			
			$("#assaultMapsSelectionButton").css("background-color", "#FFB600");
			$("#escortMapsSelectionButton").css("background-color", "#FFB600");
			$("#hybridMapsSelectionButton").css("background-color", "#FFB600");
			$("#controlMapsSelectionButton").css("background-color", "#FFB600");
			$("#arcadeMapsSelectionButton").css("background-color", "#006d2a");
			$("#otherMapsSelectionButton").css("background-color", "#FFB600");
		}
    });
});

$(function(){  //Same as above for different text box and button
	"use strict";
    $('#otherMapsSelectionButton').click(function() {
		if($("#otherMaps").is(":visible")){
			//$("#assaultmaps").slideUp();
			//$("#escortMaps").slideUp();
			//$("#hybridMaps").slideUp();
			//$("#controlMaps").slideUp();
			//$("#arcadeMaps").slideUp();
			$("#otherMaps").slideUp();
			
			$("#otherMapsSelectionButton").css("background-color", "#FFB600");
		} else {
			$("#assaultmaps").slideUp();
			$("#escortMaps").slideUp();
			$("#hybridMaps").slideUp();
			$("#controlMaps").slideUp();
			$("#arcadeMaps").slideUp();
			$("#otherMaps").slideDown();
			
			$("#assaultMapsSelectionButton").css("background-color", "#FFB600");
			$("#escortMapsSelectionButton").css("background-color", "#FFB600");
			$("#hybridMapsSelectionButton").css("background-color", "#FFB600");
			$("#controlMapsSelectionButton").css("background-color", "#FFB600");
			$("#arcadeMapsSelectionButton").css("background-color", "#FFB600");
			$("#otherMapsSelectionButton").css("background-color", "#006d2a");
		}
    });
});