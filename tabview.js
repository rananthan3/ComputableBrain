var tabee = {
	view: "tabview",
	width: 1500,
	height: 5000,	
  	cells: [
    		{
      			header: "WSI Images",
      			body: {
						cols:[ {template:"Hello", width: 200}, {view: "template", content:"openseadragon1"}]
        			       			
      			}
    		},
			{
      			header: "Grid",
      			body: {
        			id: "formView",
        			view: "form",
					elements:[{view: "button", label: "button"}]
					}
      		},
    		{
      			header: "Slice",
      			body: {
        			template: "<p>Hello World</p>"
					}
      		},	
			{
      			header: "Slice",
      			body: {
        			template: "<p>Hello World</p>"
					}
      		},
			{
      			header: "Radiology",
      			body: {
        			id: "formView",
        			view: "form",
					elements:[{view: "button", label: "button"}]
					}
      		}
	]
};

$.getScript( "bower_components/openseadragon/built-openseadragon/openseadragon/openseadragon.min.js", function( data, textStatus, jqxhr ) {
  		console.log( data ); // Data returned
		//webix.ready();
		var viewer = OpenSeadragon({
        		id: "openseadragon1",
        		prefixUrl: "/openseadragon/images/",
        		tileSources: "logo.dzi"
			});
 }).fail(function( jqxhr, settings, exception ) {
    $( "div.log" ).text( "Triggered ajaxError handler." );
});


