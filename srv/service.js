// const { INSERT } = require("@sap/cds/lib/ql/cqn");
const SELECT = require("@sap/cds/lib/ql/SELECT");

module.exports = async function () {
    let { Customer } = this.entities;
    this.on('total', async function (req) {
        debugger;
        console.log("req", req)
        var custid = req.data.CustomerID;
        console.log("custid", custid);
        let orders = await SELECT('Order').where({ CustomerID: custid });
        console.log('orders', orders)
        return "a22";
    })
    // // READ HOOKS
    //   this.before('READ', 'Customer', req =>{
    //     debugger;
    // })
    //  this.after('READ', 'Customer', (data,req) =>{
    //     debugger;
    // })
    //  this.on('READ', 'Customer', (req,next) =>{
    //     debugger;
    //     return next();
    // })

    //    //CREATE HOOKS
    //     this.before('CREATE', 'Order', req => {
    //         debugger;

    //         if (!req.data.CustomerName) {
    //             req.error(400, "Name is required");
    //         }

    //     })
    //     this.on('CREATE', 'Customer', async (req, next) => {
    //         debugger;
    //         req.data.CustomerID ="108"
    //         return next()
    //         // await INSERT.into('Customer').entries(req.data)

    //     })

    // this.before('CREATE', 'Customer.drafts', (req, next) => {
    //    debugger
    //     var random =  Math.floor(1000 + Math.random() * 9000);
    //     req.data.CustomerID =JSON.stringify(random);
    //     req.data.status = "pending";
    //     return req;
    // })
    //     this.on('CREATE', 'Customer', (req,next) => {
    //         debugger;
    //         req.data.CustomerName = "prem"
    //         return next();
    //     })

    //   this.before('UPDATE', 'Customer', req => {
    //         debugger;
    //     })

    // this.before('DELETE', 'Customer', req =>{
    //     debugger;
    // })
    // this.after('DELETE', 'Customer', (data,req) =>{
    //     debugger;
    // })
    // this.on('DELETE', 'Customer', (req,next) =>{
    //     debugger;
    //     return next();
    // })
    this.on('custom', async function (req) {
        debugger;
        var id = cds.utils.uuid();
        // await INSERT.into('DRAFT_DRAFTADMINISTRATIVEDATA').entries({
        //     DRAFTUUID : id
        // })
        let { CustomerID, CustomerName, CustomerAddress } = req.data
        let res = await INSERT.into('MYSERVICE_CUSTOMER_DRAFTS').entries({
            CustomerID: CustomerID,
            CustomerName: CustomerName,
            CustomerAddress: CustomerAddress,
            DRAFTADMINISTRATIVEDATA_DRAFTUUID: id
        })

        console.log('res', res)
    })
    // this.after('READ', 'Attachments.drafts', async (attachments, req) => {
    //     debugger
    //     attachments.forEach(element => {
    //         element.Url = `${this.path}/Attachments(ID=${element.ID},IsActiveEntity=false,CustomerID='${element.CustomerID}')/Content`;
    //     });
    // });
    // this.after('READ', 'Attachments', async function (req, req1) {
    //     debugger
    //     console.log("reqqqq", req)
    //     req.forEach(element => {
    //         element.Url = `${this.path}/Attachments(ID=${element.ID},IsActiveEntity=true,CustomerID='${element.CustomerID}')/Content`;
    //         console.log("urlllllllllllll", element.Url);
    //     });

    // });
    // this.on('UPDATE', 'Customer', async (req, next) => {
    //     debugger
    //     if (req.data?.CustomerToAttachments) {
    //         req.data.CustomerToAttachments.forEach(file => {
    //             var filePosition = file.Url.indexOf('false');
    //             if (filePosition > 0) {
    //                 var firstPart = file.Url.substring(0, filePosition);
    //                 var secondPart = file.Url.substring(filePosition);
    //                 var newurl = firstPart + 'true' + secondPart.substring(5);
    //                 file.Url = newurl;
    //             }
    //         })
    //     }

    // })

}
