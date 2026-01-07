namespace db;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Customer {
    key CustomerID            : String;
        CustomerName          : String;
        CustomerAddress       : String;
        status                : String @readonly;
        days                  : Integer;
        image                 : LargeBinary
                                       @Core.MediaType: imageType;
        imageType             : String
                                       @Core.IsMediaType;
        CustomerToOrder       : Composition of many Order
                                    on CustomerToOrder.CustomerID = $self.CustomerID;
        CustomerToAttachments : Composition of many Attachments
                                    on CustomerToAttachments.AttachmentsToCustomer = $self;

}

entity Order {
    key orderID         : String;
    key CustomerID      : String;
        OrderName       : String;
        OrderAddress    : String;
        OrderTotal      : String;
        OrderToCustomer : Association to one Customer
                              on OrderToCustomer.CustomerID = CustomerID;
}

entity Attachments : cuid, managed {
    key CustomerID            : String;

        @Core.MediaType  : MediaType
        Content               : LargeBinary;

        @Core.IsMediaType: true
        MediaType             : String;
        FileName              : String;
        Size                  : Integer;
        Url                   : String;

        AttachmentsToCustomer : Association to one Customer
                                    on AttachmentsToCustomer.CustomerID = CustomerID;
}
