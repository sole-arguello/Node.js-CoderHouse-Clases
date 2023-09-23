//https://www.mycompiler.io/es -> compilador en linea


// show dbs;
// use tiendaLenceria;
// db;
// db.createCollection('productos');
// db.createCollection('usuarios');
// show collections;
// db.productos.insertOne({nombre: 'bombis', precio: 2500});
// db.productos.insertMany([{nombre: 'bombis', precio: 2500},{nombre: 'Conjunto', precio: 3500}])
// db.productos.find();

/*---------- Salida del programa  -------*/

// mycompiler_mongodb> admin       59 B
// config       0 B
// local   2.45 KiB
// mycompiler_mongodb> switched to db tiendaLenceria
// tiendaLenceria> tiendaLenceria
// tiendaLenceria> { ok: 1 }
// tiendaLenceria> { ok: 1 }
// tiendaLenceria> productos
// usuarios
// tiendaLenceria> {
//   acknowledged: true,
//   insertedId: ObjectId("650cb126dc56060878988c03")
// }
// tiendaLenceria> {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId("650cb126dc56060878988c04"),
//     '1': ObjectId("650cb126dc56060878988c05")
//   }
// }
// tiendaLenceria> [
//   {
//     _id: ObjectId("650cb126dc56060878988c03"),
//     nombre: 'bombis',
//     precio: 2500
//   },
//   {
//     _id: ObjectId("650cb126dc56060878988c04"),
//     nombre: 'bombis',
//     precio: 2500
//   },
//   {
//     _id: ObjectId("650cb126dc56060878988c05"),
//     nombre: 'Conjunto',
//     precio: 3500
//   }
// ]
// tiendaLenceria> 

// [Execution complete with exit code 0]