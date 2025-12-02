namespace db;

entity Customer {
    key CustomerID : String @readonly; 
    CustomerName : String;
    CustomerAddress : String;
    status : String @readonly;
    CustomerToOrder : Composition of many Order on CustomerToOrder.CustomerID = $self.CustomerID;

}

entity Order {
    key orderID : String;
    key CustomerID : String;
    OrderName : String;
    OrderAddress : String;
    OrderTotal : String;
    OrderToCustomer : Association to one Customer on OrderToCustomer.CustomerID = CustomerID;
}