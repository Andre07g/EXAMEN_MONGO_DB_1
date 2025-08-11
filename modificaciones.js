// Modificaciones para la colección albums y sus datos

// 1.Agregar a todos los álbumes las propiedad available y origin

db.albums.updateMany({},{$set:{"available":true}}) 
db.albums.updateMany({},{$set:{"origin":"Importado"}}) 

// Actualizaciones

// 1. Album con SKU: M034 actualizar stock a 15

db.albums.updateOne({"sku":"M034"},{$set:{"stock":15}})

// 2.Album con SKU: M018 actualizar country de label a Colombia

db.albums.updateOne({"sku":"M018"},{$set:{"label.country":"Colombia"}})

// 3.Album con SKU: M059 agregar un nuevo tag: "oferta"

db.albums.updateOne({"sku":"M059"},{$push:{"tags":"oferta"}})

// 4.Album con SKU: M012 agregar dos nuevos tags: "nuevo" y "popular"

db.albums.updateOne({"sku":"M012"},{$push:{"tags":"nuevo"}})   // En esta funcion no use $each porque Mariño dijo que no usaramos nada que no hubiese enseñado
db.albums.updateOne({"sku":"M012"},{$push:{"tags":"popular"}}) // asi que ahora hay una linea mas de codigo

// 5.Album con SKU: M025 agregar dos nuevos tags: "descuento" y outlet

db.albums.updateOne({"sku":"M025"},{$push:{"tags":"descuento"}})   // Mismo caso que el punto 4
db.albums.updateOne({"sku":"M025"},{$push:{"tags":"outlet"}})

// 6.Album titulado Thriller cambiar el price a 80000

db.albums.updateOne({"title":"Thriller"},{$set:{"price":80000}})

// 7.Renombrar la propiedad origin a import_type

db.albums.updateMany({},{$rename:{"origin":"import_type"}})

// 8.Cambiar el import_type a Nacional para los albumes cuyo sello discografico sea "Colombia"

db.albums.updateMany({"label.country":"Colombia"},{$set:{"import_type":"Nacional"}})

// 9.Eliminar la propiedad available de todos los documentos

db.albums.updateMany({},{$unset:{"available":""}})

// 10.Eliminar el tag descuento del album con SKU: M025

db.albums.updateOne({"sku":"M025"},{$pull:{"tags":"descuento"}}) 

// 11.Eliminar los tags "nuevo" y "popular" del album con SKU: M012

db.albums.updateOne({"sku":"M012"},{$pull:{"tags":"nuevo"}})  
db.albums.updateOne({"sku":"M012"},{$pull:{"tags":"popular"}})

// 12.Eliminar el album con SKU: M043

db.albums.deleteOne({"sku":"M043"})

// 13.Eliminar todos los albumes con stock igual a 0

db.albums.deleteMany({"stock":{$eq:0}})