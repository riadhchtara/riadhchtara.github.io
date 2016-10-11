sap.ui.jsview("sapui5demo.Master", {

  /** Specifies the Controller belonging to this View. 
  * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
  * @memberOf sapui5demo.Master
  */
  getControllerName: function () {
    return "sapui5demo.Master";
  },

  /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
  * Since the Controller is given to this method, its event handlers can be attached right away. 
  * @memberOf sapui5demo.Master
  */
  createContent: function (oController) {

    var oList = new sap.m.List({
      id: "listId",
      mode: sap.m.ListMode.SingleSelect,
      select: function () {
        oController.itemSelected();
      }
    });

    var oItemTemplate = new sap.m.StandardListItem({
      id: "sList",
      title: "{products>Name}",
      description: "{products>Description}"
    })

    oList.bindAggregation("items", "products>/Products", oItemTemplate);


    return new sap.m.Page({
      title: "Products",
      content: [oList]
    });
  }

});