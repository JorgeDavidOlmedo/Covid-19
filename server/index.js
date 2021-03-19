const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"covid_2019"
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const edad = req.body.edad;
    const ciudad = req.body.ciudad;
    const temperatura = req.body.temperatura;
    const direccion = 'CDE';
    
    db.query('INSERT INTO personas (id, fecha, descripcion, edad, direccion, temperatura, ciudad, estado) VALUES (?,?,?,?,?,?,?,?)',
    [null,now(),name,edad,direccion,temperatura,ciudad,1], (err, result)=>{
        if(err){
            console.log(err);
        }else{  
            res.send("valores insertados!!");
        }
    });
});

app.get('/personas',(req, res) =>{
   db.query("SELECT * FROM personas ORDER BY id desc",(err, result)=>{
        if(err){
            console.log("error");
        }else{
            res.send(result);
        }
   }); 
});

app.listen(3001,()=>{
    console.log('bien ahiii..');
})
