// Consultas creadas para la colección de albumes

// 1.Mostrar los albumes del género Jazz

db.albums.find({"genre":"Jazz"})

// 2.Mostrar los albumes con precio mayor a 50000

db.albums.find({"price":{$gt:50000}})

// 3.Mostrar los albumes que no sean del genero Rock

db.albums.find({"genre":{$ne:"Rock"}})

// 4.Mostrar sku, title y tags de los albumes con calificacion mayor a 4.5

db.albums.find({"raiting":{$gt:4.5}},{_id:0,sku:1,title:1,tags:1})  

// 5.Mostrar sku, title y price de los albumes con stock menor a 5

db.albums.find({"stock":{$lt:5}},{_id:0,sku:1,title:1,price:1})  

