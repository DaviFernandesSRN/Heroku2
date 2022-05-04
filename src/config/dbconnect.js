//importando o mongoose para uso do mongo DB
import mongoose from "mongoose"
const MONGO_URI = process.env.MONGO_URI
//Chamando o meu banco de dados no mongo DB
mongoose.connect(MONGO_URI);

//Criando uma váriavel da conexão

let db = mongoose.connection;
//exportanto a variavel criada da conexão
export default db;


//---------------------------------------
//vendas