sap.ui.define([
    // "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        total: async function (oContext, aSelectedContexts) {
            // MessageToast.show("Custom handler invoked.");
            debugger;
            var url = window.location.href;
            console.log(url);
            const id = url.match(/CustomerID='([^']+)'/)[1];

            console.log(id);
            let oModel = sap.ui.core.Element.getElementById("project1::CustomerObjectPage--fe::ObjectPageDynamicHeaderTitle-_actionsToolbar").getModel();
            let oFunc = oModel.bindContext(`/total(...)`);
            oFunc.setParameter("CustomerID", id)
            await oFunc.execute();
            let context = oFunc.getBoundContext();
            let getdata = context.getValue();
            let data = getdata.value;
            console.log(data);
        }
    };
});
