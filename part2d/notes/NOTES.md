# REST

Individual data objects, such as notes, are referred to as resources. Every resource has a unique address associated with it - its URL.

## HTTP GET 

Used for fetching data from the servers

## HTTP POST 

Creating a new resource for storing a note

## HTTP PUT

Updating a resource in the database

## Good Practice

When we want to change in the data, we would like to use spread operator to copy the objects we want to change and adding key-value pairs to change. 

### Example
const note = Some note
const newNote = {...note, key: value}

We would like to do this as we want to avoid referencing values inside the current state.