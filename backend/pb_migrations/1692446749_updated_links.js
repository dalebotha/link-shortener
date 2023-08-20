/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("otta6isjkfv3nqo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zuq3zdg0",
    "name": "shortSlug",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 6,
      "max": 16,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ckxv9ek",
    "name": "createdBy",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ux1hcdq6",
    "name": "clicks",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("otta6isjkfv3nqo")

  // remove
  collection.schema.removeField("zuq3zdg0")

  // remove
  collection.schema.removeField("5ckxv9ek")

  // remove
  collection.schema.removeField("ux1hcdq6")

  return dao.saveCollection(collection)
})
