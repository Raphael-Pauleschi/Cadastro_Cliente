console.log('SELECT * FROM usuario');
const usuarios = await db.selectUsuario();
console.log(usuarios);