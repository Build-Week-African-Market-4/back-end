const db = require('../../data/db-config')

function find(){
    return console.log('find');
}

function findBy(filter){
    return console.log('findBy');
}

function findById(id){
    return console.log('findById');
}

function findBySeller(){
    return console.log('findBySeller');
}

function findByProduct(){
    return console.log('findByProduct');
}

function findByCategory(){
    return console.log('findByCategory');
}

function add(){
    return console.log('add');
}

function update(){
    return console.log('update');
}

function remove(){
    return console.log('remove');
}

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