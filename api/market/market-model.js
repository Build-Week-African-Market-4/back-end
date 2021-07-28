const db = require('../../data/db-config')

function find(){
    return db("product_info as pi")
		.join("products as p", "p.id", "pi.product_id")
		.join("sellers as s", "s.id", "pi.seller_id")
		.select("p.product_name", "pi.seller_price", "pi.qty", "pi.description", "s.seller_name", "s.location")
};

function findBy(filter){
    return db("product_info as pi")
    .join("products as p", "p.id", "pi.product_id")
    .join("sellers as s", "s.id", "pi.seller_id")
    .where(filter)
    .select("p.product_name", "pi.seller_price", "pi.qty", "pi.description", "s.seller_name", "s.location")
};

function findById(id){
    return db("product_info as pi")
    .join("products as p", "p.id", "pi.product_id")
    .join("sellers as s", "s.id", "pi.seller_id")
    .where("pi.id", id)
    .select("p.product_name", "pi.seller_price", "pi.qty", "pi.description", "s.seller_name", "s.location")
    .first()
};

function findBySeller(seller_name){
    return db("sellers")
    .where({seller_name})
    .first()
};

function findByProduct(product_name){
    return db("products")
    .where({product_name})
};

function findByCategory(category_name){
    return db("category")
    .where({category_name})
};

function add(item){
    const seller = await findSellerByName(item.seller_name)
	const categoryArr = await findCategoryByName(item.category_name)
	const productArr = await findProductByName(item.product_name)
	let categoryId
	if (categoryArr.length < 1){
		[categoryId] = await db("category").insert(category_name)
	} else {
		categoryId = categoryArr[0].id
	}
	let productId
	if (productArr.length < 1){
		console.log("product name", item.product_name)
		console.log(categoryId)
		[productId] = await db("products").insert({product_name: item.product_name, category_id: categoryId})
	} else {
		productId = productArr[0].id
	}
	const itemToAdd = {
		product_id: productId,
		seller_id: seller.id,
		seller_price: item.seller_price,
		qty: item.qty,
		description: item.description
	}
	console.log(itemToAdd)
	const [addedItem] = await db("product_info").insert(itemToAdd).returning("id")
	return findById(addedItem)
};

function update(id, changes){
    return db("product_info")
    .where({ id })
    .update(changes)
};

function remove(id){
    return db("product_info")
    .where({ id })
    .del()
};

module.exports = {
    find,
    findBy,
    findById,
    findBySeller,
    findByProduct,
    findByCategory,
    add,
    update,
    remove
};