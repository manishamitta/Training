sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';
	function waitForControl(sId) {
		return new Promise(resolve => {
			const check = () => {
				const ctrl = sap.ui.getCore().byId(sId);
				if (ctrl) {
					resolve(ctrl);
				} else {
					setTimeout(check, 50);
				}
			};
			check();
		});
	}
	return ControllerExtension.extend('project1.ext.controller.Obj2', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf project1.ext.controller.Obj2
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				// var oModel = this.base.getExtensionAPI().getModel();
				debugger;
				// var status = sap.ui.core.Element.getElementById("project1::CustomerObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::status::Field-display").getText();
				// if (status !== "Verified") {
				// sap.ui.core.Element.getElementById("project1::CustomerObjectPage--fe::table::CustomerToOrder::LineItem::Orders-innerTable").setVisible(false);
				// }
				// else {
				// 	sap.ui.core.Element.getElementById("project1::CustomerObjectPage--fe::table::CustomerToOrder::LineItem::Orders-innerTable").setVisible(true);
				// }
			},
			editFlow: {
				onBeforeEdit: function () {
					debugger;
					var status = sap.ui.core.Element.getElementById("project1::CustomerObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::status::Field-display").getText();
					if (status === "Verified") {
						sap.ui.core.Element.getElementById("project1::CustomerObjectPage--fe::table::CustomerToOrder::LineItem::Orders-innerTable").setVisible(true);
					}


				},
				onAfterSave: function () {
					debugger;
				}
			},
			routing: {
				// onBeforeBinding: async function (oContext) {
				// 	debugger;
				// 	const data = await oContext.requestObject();
				// 	console.log("Final data: ", data);
				// 	console.log(data.status);
				// 	var status = data.status;
				// 	// var status = sap.ui.core.Element.getElementById("project1::CustomerObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::status::Field-display").getText();
				// 	// if (status !== "Verified") {
				// 	// 	sap.ui.core.Element.getElementById("project1::CustomerObjectPage--fe::table::CustomerToOrder::LineItem::Orders-innerTable").setVisible(false);
				// 	// }
				// 	// else {
				// 	// 	sap.ui.core.Element.getElementById("project1::CustomerObjectPage--fe::table::CustomerToOrder::LineItem::Orders-innerTable").setVisible(true);
				// 	// }
				// },
				onAfterBinding: async function (oContext) {
					debugger;

					// Main entity data
					// const data = await oContext.requestObject();
					// console.log("Main entity:", data);

					// Find the table
					const tableId = "project1::CustomerObjectPage--fe::table::CustomerToOrder::LineItem::Orders-innerTable";
					// const oTable = sap.ui.getCore().byId(
					// 	"project1::CustomerObjectPage--fe::table::CustomerToOrder::LineItem::Orders-innerTable"
					// );

					const oTable = await waitForControl(tableId);

					debugger;

					if (!oTable) {
						console.log("Child table not found");
						return;
					}

					const binding = oTable.getBinding("items");

					// WAIT FOR CHILD TABLE TO FINISH LOADING!
					binding.attachEventOnce("dataReceived", async () => {
						debugger
						const contexts = binding.getContexts(); // NOW it has values

						const childData = await Promise.all(
							contexts.map(c => c.requestObject())
						);

						debugger;
						console.log("Child table rows:", childData);




						// const childDataEasy = [];

						// for (const ctx of contexts) {
						// 	const data = await ctx.requestObject();
						// 	childDataEasy.push(data);
						// }

						// 	debugger;
						// console.log("Child table rows:", childDataEasy);

					});
				}


			}
		}
	});
});
