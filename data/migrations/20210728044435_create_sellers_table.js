
exports.up = function(knex) {
    return knex.schema
    .createTable("sellers", tbl => {
        tbl.increments()
        tbl.text("seller_name")
           .notNullable()
       tbl.text("password")
           .notNullable() 
       tbl.text("location")
           .notNullable()
       tbl.text("photo")
     })
     .createTable("category", tbl => {
         tbl.increments()
         tbl.text("category_name")
     })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("category")
    .dropTableIfExists("sellers")
};
