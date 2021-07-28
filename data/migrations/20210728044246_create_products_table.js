
exports.up = function(knex) {
    return knex.schema
    .createTable("products", tbl => {
        tbl.increments("id")
        tbl.text("product_name")
        tbl.integer("category_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("category")
    })
    .createTable("product_info", tbl => {
        tbl.increments("id")
        tbl.integer("product_id")
          .unsigned()
          .references("id")
          .inTable("products")
        tbl.integer("seller_id")
          .unsigned()
          .references("id")
          .inTable("sellers")
        tbl.float("seller_price")
          .notNullable()
        tbl.integer("qty")
          .unsigned()
          .notNullable()
        tbl.text("description")
          .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("product_info")
    .dropTableIfExists("products")
};
