// define a root UIComponent which exposes the main view
jQuery.sap.declare("com.sap.fullscreen.Component");
jQuery.sap.require("sap.ca.scfld.md.ComponentBase");

// extent of sap.ca.scfld.md.ComponentBase
sap.ca.scfld.md.ComponentBase.extend("com.sap.fullscreen.Component", {
	metadata : sap.ca.scfld.md.ComponentBase.createMetaData("FS", {
		"name": "Fullscreen Sample",
		"version" : "${project.version}",
		"library" : "com.sap.fullscreen",
		"includes" : [],
		"dependencies" : {
			"libs" : ["sap.m", "sap.me"],
			"components" : [],
		},
		viewPath : "com.sap.fullscreen.view",
		fullScreenPageRoutes : {
			// fill the routes to your full screen pages in here.
			"fullscreen" : {
				"pattern" : "",
				"view" : "S1"
			}
		//	"subscreen" : {
		//		"pattern" : "second",
		//		"view" : "S2"
		//	}
		},
	}),	

	/**
	 * Initialize the application
	 * 
	 * @returns {sap.ui.core.Control} the content
	 */
	createContent : function() {
		var oViewData = {component: this};
		return sap.ui.view({
			viewName : "com.sap.fullscreen.Main",
			type : sap.ui.core.mvc.ViewType.XML,
			viewData : oViewData
		});
	}
});