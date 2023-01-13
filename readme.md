para correr ambos servidores que es el redux y mongodb el comando es:
-npm run dev
solo back end
-npm run server

Los endpoints del backend:
Auth & Users:
Register User: POST http://localhost:5000/api/users
Auth User: GET http://localhost:5000/api/auth
Login User: POST http://localhost:5000/api/auth

Wall o Post:
crear una publicacion o post : POST http://localhost:5000/api/posts
Obtener todas las publicaciones: GET http://localhost:5000/api/posts
Obtener publicacion por ID: GET http://localhost:5000/api/posts/62423c2656ebc3296ad2b741 se usa el ID del perfil, puede variar
Borrar publicacion por ID: DELETE http://localhost:5000/api/posts/626d9beab550e72da5d7ac69 se usa el ID del perfil, puede variar
Los likes: PUT http://localhost:5000/api/posts/like/626d93bf8d042ac0f5d69103 se usa el id del la publicacion, puede variar
los unlikes: PUT http://localhost:5000/api/posts/unlike/626d93bf8d042ac0f5d69103 se usa el id del la publicacion, puede variar
postear un comentario en la publicacion: POST http://localhost:5000/api/posts/comment/626d93bf8d042ac0f5d69103
borrar un comentario: DELETE http://localhost:5000/api/posts/comment/626d93bf8d042ac0f5d69103/626dae7f122df4f9ad1ae7b8