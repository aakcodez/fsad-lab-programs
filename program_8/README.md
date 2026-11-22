# Program 8: MongoDB Aggregation Pipeline & Text Search

Creates a text index on `catalog` (`name`, `description`, `tags`) and runs an aggregation pipeline using `$match` (`$text`) and `$project` (`textScore`).

Run: `mongosh < queries.js`
