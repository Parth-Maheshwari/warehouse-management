export interface inventory{
    "id": string,
    "index" : number,
    "guid" : string,
    "productname" : string,
    "category" : string,
    "availableunits" : number,
    "unitprice" : number,
    "tags" : {
        "tag1" : string,
        "tag2" : string,
        "tag3" : string
    },
    "lastupdated" : "string",
    "lacation" : {
        "area" : string,
        "zone" : string,
        "shelf" : string
    },
    "description" : string
}