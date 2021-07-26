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

function add(user){
    return console.log('add');
}

module.exports = {
    find,
    findBy,
    findById,
    add
};