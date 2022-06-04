import express from "express"; 
////conexão com o banco de dados feita pelo mongoose
import db from "./config/dbconnect.js"
//importando o arquivo de rotas 
import routes from "./routes/index.js";
import cors from "cors";

db.on("error", console.log.bind(console, 'Erro de conexão com banco de dados'))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

//instancia do express
const app = express();
//body-parser usando o express
app.use(express.json())
app.use(cors())

routes(app);


export default app;