jQuery.sap.require("sap.ca.scfld.md.controller.BaseFullscreenController");
sap.ca.scfld.md.controller.BaseFullscreenController.extend("com.sap.fullscreen.view.S1", {
	onInit : function() {
		that = this;
		var oOptions = {
				oPositiveAction : {
					sI18nBtnTxt : "S3_POSITIVE",
					onBtnPressed : function() {
						jQuery.sap.log.info("detail: accept pressed");
					},
				},
				oNegativeAction : {
					sI18nBtnTxt : "S3_NEGATIVE",
					// sBtnTxt : "",
					onBtnPressed : function(evt) {
						jQuery.sap.log.info("detail: reject pressed");
					},
				},
				oEditBtn : {
					sI18nBtnTxt : "S3_EDIT",
					onBtnPressed : function(evt) {
						jQuery.sap.log.info("s3: edit pressed");
					},
					bEnabled : false, // default true
				},
				buttonList : [{
					sI18nBtnTxt : "ADDITIONAL_BTN1",
					onBtnPressed : function(evt) {
						that.setBtnEnabled("mySpecialBtn", false);
						jQuery.sap.log.info("additional button 1 pressed + additional button 2 disabled");
					}
				}, {
					// do NOT use ID, it breaks everything with duplicate IDs
					// sId : "mySpecialBtn", // optional
					sI18nBtnTxt : "ADDITIONAL_BTN2",
					onBtnPressed : function(evt) {
						jQuery.sap.log.info("additional button 1 pressed");
					}
				}],
				oJamOptions : {
					oShareSettings : {
						id : "http://www.google.de",
						display : new sap.m.Text({
							text : "This is a test"
						}),
						share : "blabla"
					}
				},
				oAddBookmarkSettings : {
					title : "Another test"
				},
				additionalShareButtonList : [{
					sI18nBtnTxt : "SHARE_BTN1",
					sIcon : "sap-icon://competitor",
					onBtnPressed : function(evt) {
						jQuery.sap.log.info("share button 1 pressed");
					}
				}, {
					sI18nBtnTxt : "SHARE_BTN2",
					sIcon : "sap-icon://future",
					onBtnPressed : function(evt) {
						jQuery.sap.log.info("share button 2 pressed");
					}
				}],
				oEmailSettings : {
					sSubject : this.oApplicationFacade.getResourceBundle().getText("EMAIL_SUBJECT"),
					sRecepient : "do.not.reply@sap.com"
				},
				oFilterOptions : {
					aFilterItems : [{
						text : "fItem 1",
						key : "key 1"
					}, {
						text : "fItem 2",
						key : "key 2"
					}],
					sSelectedItemKey : "key 2",
					onFilterSelected : function(sKey) {
						jQuery.sap.log.info(sKey + " has been selected");
					}
				},
				oSortOptions : {
					onSortPressed : function(sKey) {
						jQuery.sap.log.info("Sort pressed");
					} 
				/*aSortItems : [{
                        text : "sItem 1",
                        key : "Skey 1"
                    }, {
                        text : "sItem 2",
                        key : "Skey 2"
                    }],
                    onSortSelected : function(sKey) {
                        jQuery.sap.log.info(sKey + " has been selected");
                    } */
				},
				oGroupOptions : {
					aGroupItems : [{
						text : "gItem 1",
						key : "gkey 1"
					}, {
						text : "gItem 2",
						key : "gkey 2"
					}],
					onGroupSelected : function(sKey) {
						jQuery.sap.log.info(sKey + " has been selected");
					}
				}
		};
		this.setHeaderFooterOptions(oOptions);
		//debugger
		var  Products=[ {
			"ProductID": 1,
			"ProductName": "Chai",
			"SupplierID": 1,
			"CategoryID": 1,
			"QuantityPerUnit": "10 boxes x 20 bags",
			"UnitPrice": "18.0000",
			"UnitsInStock": 39,
			"UnitsOnOrder": 0,
			"ReorderLevel": 10,
			"Discontinued": false
		}, {
			"ProductID": 2,
			"ProductName": "Chang",
			"SupplierID": 1,
			"CategoryID": 1,
			"QuantityPerUnit": "24 - 12 oz bottles",
			"UnitPrice": "19.0000",
			"UnitsInStock": 0,
			"UnitsOnOrder": 40,
			"ReorderLevel": 25,
			"Discontinued": true
		}, {
			"ProductID": 1,
			"ProductName": "Aniseed Syrup",
			"SupplierID": 1,
			"CategoryID": 2,
			"QuantityPerUnit": "12 - 550 ml bottles",
			"UnitPrice": "10.0000",
			"UnitsInStock": 0,
			"UnitsOnOrder": 70,
			"ReorderLevel": 25,
			"Discontinued": false
		}, {
			"ProductID": 2,
			"ProductName": "Chef Anton's Cajun Seasoning",
			"SupplierID": 2,
			"CategoryID": 2,
			"QuantityPerUnit": "48 - 6 oz jars",
			"UnitPrice": "22.0000",
			"UnitsInStock": 53,
			"UnitsOnOrder": 0,
			"ReorderLevel": 0,
			"Discontinued": false
		}, {
			"ProductID": 1,
			"ProductName": "Chef Anton's Gumbo Mix",
			"SupplierID": 2,
			"CategoryID": 2,
			"QuantityPerUnit": "36 boxes",
			"UnitPrice": "21.3500",
			"UnitsInStock": 0,
			"UnitsOnOrder": 0,
			"ReorderLevel": 0,
			"Discontinued": true
		}];

		var json2=[{
			"test":"Mr.Arun Parvath",
				"option":""
		},
		{
			"test":24,
			"option":""
		},
		{
			"test":false,
			"option":"Test check"
		},
		{
			"test":false,
			"option":"Test check"
		}];

		var listId = that.byId("ProductList");
		that.oBusinessJson = new sap.ui.model.json.JSONModel({"jsonSet":Products});
		listId.setModel( that.oBusinessJson);

		/*var simform = that.byId("page");*/
		that.json22 = new sap.ui.model.json.JSONModel({"jsonset2":json2});
		this.getView().setModel(that.json22,"panel2alias");
		
	},


	createContent: function (sId, oContext) {
		debugger
		var oRevenue = oContext.getProperty("test");
		switch(typeof oRevenue) {
		case "string":
			return new sap.m.Text(sId, {
				text: {
					path: "panel2alias>test",
					//type: new StringType()
				}
			});
        
		case "number":
			return new sap.m.Input(sId, {
				value: {
					path: "panel2alias>test",
					//type: new Float()
				}
			});
		case "boolean":
			return new sap.m.CheckBox(sId,{
				selected:{
					path:"panel2alias>test"
				},
				text:{
				path:"panel2alias>option"
				}
			});
		}
	},

	productListFactory : function(sId,oContext) {
		//debugger;
		var oUIControl = null;
		var listId = that.byId("ProductList");

		// Define the item description
		var sDescription = oContext.getProperty("ProductName") + " (" + oContext.getProperty("QuantityPerUnit") + ")";

		if (oContext.getProperty("ProductID") == 1){
			oUIControl = new sap.m.StandardListItem(sId, {
				icon : "sap-icon://warning",
				title : sDescription,
				info : "Discontinued",
				infoState : "Error"
			});
		} else {

			oUIControl = new sap.m.ObjectListItem(sId, {
				title : oContext.getProperty("ProductName"),
				number :oContext.getProperty("UnitPrice"),
				numberUnit :"INR"
			});
			//listId.addItem(oUIControl);
			// Is this item out of stock?
			if (oContext.getProperty("UnitsInStock") < 1) {
				// Nope, so this item is just temporarily out of stock
				oUIControl.addAttribute(new sap.m.ObjectAttribute({
					text : "text1"
				}));
			}
		}

		// Set item active (so it is clickable) and attach the press event
		return oUIControl;
	}
});