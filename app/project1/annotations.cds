using MyService as service from '../../srv/service';
annotate service.Customer with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'CustomerID',
                Value : CustomerID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CustomerName',
                Value : CustomerName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CustomerAddress',
                Value : CustomerAddress,
            },
            {
                $Type : 'UI.DataField',
                Value : status,
                Label : 'status',
            },
            {
                $Type : 'UI.DataField',
                Value : imageType,
                Label : 'imageType',
            },
            {
                $Type : 'UI.DataField',
                Value : image,
                Label : 'image',
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Orders',
            ID : 'Orders',
            Target : 'CustomerToOrder/@UI.LineItem#Orders',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'CustomerID',
            Value : CustomerID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'CustomerName',
            Value : CustomerName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'CustomerAddress',
            Value : CustomerAddress,
        },
        {
            $Type : 'UI.DataField',
            Value : status,
            Label : 'status',
            Criticality : days,
            CriticalityRepresentation : #WithIcon,
        },
        {
            $Type : 'UI.DataField',
            Value : image,
            Label : 'image',
        },
        {
            $Type : 'UI.DataField',
            Value : imageType,
            Label : 'imageType',
        },
    ],
    UI.Identification : [
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'MyService.EntityContainer/approval',
            Label : 'approval',
            Determining : true,
        },
    ],
);

annotate service.Order with @(
    UI.LineItem #Orders : [
        {
            $Type : 'UI.DataField',
            Value : orderID,
            Label : 'orderID',
        },
        {
            $Type : 'UI.DataField',
            Value : OrderName,
            Label : 'OrderName',
        },
        {
            $Type : 'UI.DataField',
            Value : OrderTotal,
            Label : 'OrderTotal',
        },
        {
            $Type : 'UI.DataField',
            Value : OrderAddress,
            Label : 'OrderAddress',
        },
    ]
);

