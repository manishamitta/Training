using { db } from '../db/schema';

service MyService {
    @odata.draft.enabled
    entity Customer as projection on db.Customer;
    entity Order as projection on db.Order;
    function total(CustomerID : String) returns String;
  
    
    
}
