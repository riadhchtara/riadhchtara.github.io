sap.ui.jsview("sapui5demo.Intro", {

  /** Specifies the Controller belonging to this View. 
  * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
  * @memberOf sapui5demo.Intro
  */
  getControllerName: function () {
    return "sapui5demo.Intro";
  },

  /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
  * Since the Controller is given to this method, its event handlers can be attached right away. 
  * @memberOf sapui5demo.Intro
  */
  createContent: function (oController) {
    return new sap.m.Page({
      title: "Welcome",
      content: [
        new sap.ui.commons.TextView({
              text: "Welcome to my Store",
              design: sap.ui.commons.TextViewDesign.H5
        })
      ]
    });
  }

});