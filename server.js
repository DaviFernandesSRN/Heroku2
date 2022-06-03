import app from './src/Controllers/app.js'
import cors from 'cors';
import express from "express"; 


app.use(express.json());

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods", "PATCH, POST, GET, PUT, DELETE, OPTIONS");
    app.use(cors());
    next();

});


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`servidor escutando em http://localhost:${port}`)
});

