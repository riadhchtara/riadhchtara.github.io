sap.ui.controller("sapui5demo.Details", {

  /**
   * Called when a controller is instantiated and its View
   * controls (if available) are already created. Can be used
   * to modify the View before it is displayed, to bind event
   * handlers and do other one-time initialization.
   * 
   * @memberOf sapui5demo.Details
   */
  // onInit: function() {
  //
  // },
  /**
   * Similar to onAfterRendering, but this hook is invoked
   * before the controller's View is re-rendered (NOT before
   * the first rendering! onInit() is used for that one!).
   * 
   * @memberOf sapui5demo.Details
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
   * @memberOf sapui5demo.Details
   */
  // onAfterRendering: function() {
  //
  // },
  /**
   * Called when the Controller is destroyed. Use this one to
   * free resources and finalize activities.
   * 
   * @memberOf sapui5demo.Details
   */
  // onExit: function() {
  //
  // }
  create: function () {

    var id = sap.ui.getCore().byId("listId").getItems().length;

    var requestObj = {
      requestUri: "",
      method: "",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json;odata=minimalmetadata",
        "DataServiceVersion": "3.0",
        "MaxDataServiceVersion": "3.0",
        "Accept": "application/json;odata=minimalmetadata"
      }
    };

    var newData = {
      "odata.type": "ODataDemo.Product",
      "ID": id,
      "Name": $("#name").val(),
      "Description": $("#description").val(),
      "ReleaseDate": $("#date").val(),
      "Rating": $("#rating").val(),
      "Price": $("#price").val()
    }

    var url = "proxy/http/services.odata.org/V3/(S(1fytxbmgjlwtlyov404bmekd))/OData/OData.svc/Products";
    var method = "POST";

    requestObj.requestUri = url;
    requestObj.method = method;
    requestObj.data = newData;
    OData.request(requestObj, function () {
      sap.ui.getCore().getModel("products").refresh();
    });

  },

  edit: function () {

    var id = $("#id").text();

    var requestObj = {
      requestUri: "",
      method: "",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json;odata=minimalmetadata",
        "DataServiceVersion": "3.0",
        "MaxDataServiceVersion": "3.0",
        "Accept": "application/json;odata=minimalmetadata"
      }
    };

    var newData = {
      "odata.type": "ODataDemo.Product",
      "ID": $("#id").text(),
      "Name": $("#name").val(),
      "Description": $("#description").val(),
      "ReleaseDate": $("#date").val(),
      "Rating": $("#rating").val(),
      "Price": $("#price").val()
    }

    var url = "proxy/http/services.odata.org/V3/(S(1fytxbmgjlwtlyov404bmekd))/OData/OData.svc/Products("
      + id + ")";
    var method = "PUT";

    requestObj.data = newData;

    requestObj.requestUri = url;
    requestObj.method = method;

    OData.request(requestObj, function () {
      sap.ui.getCore().getModel("products").refresh();
    });

  },

  remove: function () {
    var requestObj = {

      requestUri: "",
      method: "",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json;odata=minimalmetadata",
        "DataServiceVersion": "3.0",
        "MaxDataServiceVersion": "3.0",
        "Accept": "application/json;odata=minimalmetadata"
      }
    };

    var id = $("#id").text();

    var url = "proxy/http/services.odata.org/V3//OData/OData.svc/Products("
      + id + ")";
    var method = "DELETE";

    requestObj.requestUri = url;
    requestObj.method = method;
    OData.request(requestObj, function () {
      sap.ui.getCore().getModel("products").refresh();
    });

  },

});