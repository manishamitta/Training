sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Label",
    "sap/m/Input",
    "sap/m/VBox"
], function (MessageToast, Dialog, Button, Label, Input, VBox) {
    'use strict';

    return {
        /**
         * Generated event handler.
         */
        Custom_Action: function (oContext, aSelectedContexts) {
            var url1 = this._view.getModel().sServiceUrl
            // Create fields
            const generatedId = "peol" + Math.floor(100000 + Math.random() * 900000);

            // Create fields
            const oCustomerId = new Input({
                value: generatedId,
                editable: false,         // read-only
                enabled: false           // prevents user clicking inside
            });

            const oName = new Input({ placeholder: "Enter Name" });
            const oAddress = new Input({ placeholder: "Enter Address" });
            const oPhone = new Input({ placeholder: "Enter Phone Number" });

            // Dialog content layout
            const oContent = new VBox({
                items: [
                    new Label({ text: "Customer ID" }),
                    oCustomerId,
                    new Label({ text: "Name" }),
                    oName,
                    new Label({ text: "Address" }),
                    oAddress,
                    new Label({ text: "Phone Number" }),
                    oPhone
                ],
                width: "100%",
                renderType: "Bare"
            });

            // Create Dialog
            const oDialog = new Dialog({
                title: "Enter Details",
                contentWidth: "400px",
                content: oContent,
                buttons: [
                    new Button({
                        text: "Create",
                        type: "Emphasized",
                        press: async function () {
                            debugger;
                            let testdata = JSON.stringify({
                                CustomerID: oCustomerId.getValue(),
                                CustomerName: oName.getValue(),
                                CustomerAddress: oAddress.getValue(),
                                IsActiveEntity: true
                            });
                            var url = '/odata/v4/my/Customer';
                            await $.ajax({
                                url: url,
                                type: 'POST',
                                contentType: 'application/json',
                                data: testdata,
                                succejss: function (data) {
                                    debugger
                                    // Handle success
                                    console.log(data);

                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    // Handle error
                                    debugger
                                    console.error(textStatus, errorThrown);
                                }
                            });
                            MessageToast.show("Create clicked: " +
                                oName.getValue() + ", " +
                                oAddress.getValue() + ", " +
                                oPhone.getValue()

                            );

                            oDialog.close();
                        }
                    }),
                    new Button({
                        text: "Save as Draft",
                        press: async function () {
                            debugger;
                            let testdata = JSON.stringify({
                                CustomerID: oCustomerId.getValue(),
                                CustomerName: oName.getValue(),
                                CustomerAddress: oAddress.getValue()
                            });
                            var url = '/odata/v4/my/Customer';
                            // await $.ajax({
                            //     url: url,
                            //     type: 'POST',
                            //     contentType: 'application/json',
                            //     data: testdata,
                            //     success: function (data) {
                            //         debugger
                            //         // Handle success
                            //         console.log(data);

                            //     },
                            //     error: function (jqXHR, textStatus, errorThrown) {
                            //         // Handle error
                            //         debugger
                            //         console.error(textStatus, errorThrown);
                            //     }
                            // });
                            let oModel = sap.ui.core.Element.getElementById("project1::CustomerList--fe::table::Customer::LineItem-toolbar").getModel();
                            let oFunc = oModel.bindContext(`/custom(...)`);
                            oFunc.setParameter("CustomerID", oCustomerId.getValue());
                            oFunc.setParameter("CustomerName", oName.getValue());
                            oFunc.setParameter("CustomerAddress", oAddress.getValue());
                           await oFunc.execute();
                            MessageToast.show("Draft saved: " +
                                oName.getValue() + ", " +
                                oAddress.getValue() + ", " +
                                oPhone.getValue()
                            );
                            oDialog.close();
                        }
                    }),
                    new Button({
                        text: "Cancel",
                        press: function () {
                            oDialog.close();
                        }
                    })
                ],
                afterClose: function () {
                    oDialog.destroy();
                }
            });

            oDialog.open();
        }
    };
});
