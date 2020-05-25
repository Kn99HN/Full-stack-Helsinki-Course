# MongoDB

MongoDB stores BSON documents, i.e data records, in collections.

## BSON documents

BSON is a binary representation of JSON documents. It contains more data types than JSON.

MongoDB documents are composed of field-and-value pairs and have the structure:
```
{
    field1: value1,
    field2: value2,
    ...
    fieldN: valueN
}
```

Example:

```
var mydoc = {
               _id: ObjectId("5099803df3f4948bd2f98391"),
               name: { first: "Alan", last: "Turing" },
               birth: new Date('Jun 23, 1912'),
               death: new Date('Jun 07, 1954'),
               contribs: [ "Turing machine", "Turing test", "Turingery" ],
               views : NumberLong(1250000)
            }
```

The application is developed in part3 folder