sap.ui.controller("sapui5demo.Master", {

  /**
   * Called when a controller is instantiated and its View
   * controls (if available) are already created. Can be used
   * to modify the View before it is displayed, to bind event
   * handlers and do other one-time initialization.
   * 
   * @memberOf sapui5demo.Master
   */
  onInit: function () {

    var oModel = new sap.ui.model.odata.ODataModel(
      "proxy/http/services.odata.org/V3/(S(1fytxbmgjlwtlyov404bmekd))/OData/OData.svc");

    oModel.oHeaders = {
      "DataServiceVersion": "3.0",
      "MaxDataServiceVersion": "3.0"
    }

    sap.ui.getCore().setModel(oModel, "products");

  },

  /**
   * Similar to onAfterRendering, but this hook is invoked
   * before the controller's View is re-rendered (NOT before
   * the first rendering! onInit() is used for that one!).
   * 
   * @memberOf sapui5demo.Master
   */
  // onBeforeRendering: function() {
  //
  // },
  /**
   * Called when the View has been rendered (so its HTML is
   * part of the document). Post-rendering manipulations of
   * the HTML could be done here. This hook is the same one
   * that SAPUI5 controls get after being rendered.
   * 
   * @memberOf sapui5demo.Master
   */
  // onAfterRendering: function() {
  //
  // },
  /**
   * Called when the Controller is destroyed. Use this one to
   * free resources and finalize activities.
   * 
   * @memberOf sapui5demo.Master
   */
  // onExit: function() {
  //
  // },
  itemSelected: function () {

    var app = sap.ui.getCore().byId("appId");
    var list = sap.ui.getCore().byId("listId");

    var sItem = list.getSelectedItem();
    var sPath = sItem.oBindingContexts.products.sPath;

    var item = sap.ui.getCore().getModel("products")
      .getProperty(sPath);

    var id = item.ID;
    var description = item.Description;
    var price = item.Price;
    var rating = item.Rating;
    var name = item.Name;

    var oModel = new sap.ui.model.json.JSONModel(item);

    sap.ui.getCore().setModel(oModel, "item");

    app.toDetail("detailsId", "slide")// show, fade,
    // slide*/
  }

});