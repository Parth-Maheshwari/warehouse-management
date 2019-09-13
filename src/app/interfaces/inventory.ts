export interface inventory{
    "_id"; string,
    "index" : number,
    "guid" : string,
    "productname" : string,
    "category" : string,
    "availableunits" : number,
    "unitprice" : number,
    "tags" : [
        string, string, string
    ],
    "lastupdated" : "string",
    "lacation" : {
        "area" : string,
        "zone" : string,
        "shelf" : string
    },
    "description" : string
}