//$( document ).ready(function() {
	AmCharts.makeChart("mainchart", {
	  "type": "pie",
	  "theme": "light",
	  "allLabels": [{
	    "text": "$12,152",
	    "align": "center",
	    "bold": true,
	    "size": 16,
	    "color": "white",
	    "y": 240
	  }],
	  "dataProvider": [{
	    "title": "New",
	    "value": 4852
	  }, {
	    "title": "Returning",
	    "value": 9899
	  }],
	  "titleField": "title",
	  "valueField": "value",
	  "labelRadius": -130,
	  "radius": "42%",
	  "innerRadius": "60%",
	  "labelText": ""
	});
//});