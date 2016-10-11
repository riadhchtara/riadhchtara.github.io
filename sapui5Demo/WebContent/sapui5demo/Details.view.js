sap.ui.jsview("sapui5demo.Details", {

  /** Specifies the Controller belonging to this View. 
  * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
  * @memberOf sapui5demo.Details
  */
  getControllerName: function () {
    return "sapui5demo.Details";
  },

  /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
  * Since the Controller is given to this method, its event handlers can be attached right away. 
  * @memberOf sapui5demo.Details
  */
  createContent: function (oController) {

    var oLayout = new sap.ui.commons.layout.MatrixLayout({
      id: "matrixId",
      layoutFixed: true,
      columns: 2,
      width: "90%",
      widths: ["20%", "80%"]
    });


    oLayout.createRow(new sap.ui.commons.TextView({ text: "ID", design: sap.ui.commons.TextViewDesign.Bold }),
      new sap.ui.commons.TextView("id", { text: "{item>/ID}", editable: false })
    );


    oLayout.createRow(new sap.ui.commons.TextView({ text: "Name", design: sap.ui.commons.TextViewDesign.Bold }),
      new sap.ui.commons.TextField("name", { value: "{item>/Name}" })
    );

    oLayout.createRow(new sap.ui.commons.TextView({ text: "Description", design: sap.ui.commons.TextViewDesign.Bold }),
      new sap.ui.commons.TextField("description", { value: "{item>/Description}" })
    );

    oLayout.createRow(new sap.ui.commons.TextView({ text: "Date", design: sap.ui.commons.TextViewDesign.Bold }),
      new sap.ui.commons.TextField("date", { value: "2014-12-28T22:22:22" })
    );

    oLayout.createRow(new sap.ui.commons.TextView({ text: "Price", design: sap.ui.commons.TextViewDesign.Bold }),
      new sap.ui.commons.TextField("price", { value: "{item>/Price}" })
    );

    oLayout.createRow(new sap.ui.commons.TextView({ text: "Rating", design: sap.ui.commons.TextViewDesign.Bold }),
      new sap.ui.commons.TextField("rating", { value: "{item>/Rating}" })
    );
 
    oLayout.createRow(
      new sap.ui.commons.Button({
        text: "Create",
        width: "100px",
        press: function () {
          oController.create();
        }
      }));
    oLayout.createRow(new sap.ui.commons.Button({
      text: "Edit",
      width: "100px",
      press: function () {
        oController.edit();
      }
    }));
    oLayout.createRow(new sap.ui.commons.Button({
      text: "Delete",
      width: "100px",
      press: function () {
        oController.remove();
      }
    }));

    return new sap.m.Page({
      title: "Details",
      content: [oLayout]
    });
  }

});