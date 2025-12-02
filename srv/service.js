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

    this.before('CREATE', 'Customer.drafts', (req, next) => {
       debugger
        var random =  Math.floor(1000 + Math.random() * 9000);
        req.data.CustomerID =JSON.stringify(random);
        req.data.status = "pending";
        return req;
    })
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
    
}
