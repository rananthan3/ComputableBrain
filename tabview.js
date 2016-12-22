var tabee = {
	view: "tabview",
	width: 1500,	
  	cells: [
    		{
      			header: "WSI Images",
      			body: {
        			template: "Data Goes Here"        			
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
