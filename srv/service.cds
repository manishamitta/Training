using { db } from '../db/schema';

service MyService {
    @odata.draft.enabled
    entity Customer as projection on db.Customer;
    entity Order as projection on db.Order;
    entity Attachments as projection on db.Attachments;
    function total(CustomerID : String) returns String;
    action custom(CustomerID : String, CustomerName : String, CustomerAddress: String) returns String;
    function approval(issue : String) returns String;
    
    
}
