const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const { request } = require("http");
app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: "3307",
        password: "xd",
        database:"teliolimpia",
    }

)
app.get("/", (req, res) => {
    res.send("szerver működik!")
}

)
app.get("/v", (req, res) => {

    const sql ="SELECT * FROM versenyzok "
    db.query(sql, (err, result) => 
        {
            if (err) return res.json(err);
            return res.json(result);
        }
)
}
)
app.get("/v6", (req, res) =>{
    const sql ="SELECT * FROM teliolimpia.versenyzok where ID = 6;" 
        {
            if (err) return res.json(err);
            return res.json(result);
        }
})

//a szerver futásának ellenörzése


app.listen(3000, () => {
    console.log('A szerver a 3000 porton fut!')
});