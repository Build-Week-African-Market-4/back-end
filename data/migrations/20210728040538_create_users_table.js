
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments()
    tbl.text("user_name")
        .notNullable()
    tbl.text("password")
        .notNullable()
    tbl.text("location")
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users")
};
