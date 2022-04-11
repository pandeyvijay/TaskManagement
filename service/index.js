const express = require('express');

const app = express();

app.get("", (req, res)=>{
    res.send("FIrst serevre");
});

app.listen(3333, ()=>{
    console.log("server stared");
})