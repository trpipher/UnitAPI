var express = require('express')

var length = express.Router();

length.get('/', (req, res) => {
    res.send('Hello from length API');
})

/************Metric to Metric*************/

//Millimeter to X
length.post('/mm-cm',(req,res)=>{
    unit = req.query.unit
    res.json({"cm":unit/10});
    
})
length.post('/mm-m',(req,res)=>{
    unit = req.query.unit
    res.json({"m":unit/1000});
    
})
length.post('/mm-km',(req,res)=>{
    unit = req.query.unit
    res.json({"km":unit/1000000});
})

//Centimeter to X
length.post('/cm-mm',(req,res)=>{
    unit = req.query.unit
    res.json({"mm":unit*10});
})

length.post('/cm-m',(req,res)=>{
    unit = req.query.unit
    res.json({"m":unit/100});
})

length.post('/cm-km',(req,res)=>{
    unit = req.query.unit
    res.json({"km":unit/100000});
})

//Meter to X
length.post('/m-mm',(req,res)=>{
    unit = req.query.unit
    res.json({"mm":unit*1000});
})

length.post('/m-cm',(req,res)=>{
    unit = req.query.unit
    res.json({"cm":unit*100});
})

length.post('/m-km',(req,res)=>{
    unit = req.query.unit
    res.json({"km":unit/1000});
})

//Kilometers to X
length.post('/km-mm',(req,res)=>{
    unit = req.query.unit
    res.json({"mm":unit*1000000});
})

length.post('/km-cm',(req,res)=>{
    unit = req.query.unit
    res.json({"cm":unit*100000});
})

length.post('/km-m',(req,res)=>{
    unit = req.query.unit
    res.json({"m":unit*1000});  
})


/**********Imperial to Imperial***********/

// Inches to X
length.post('/in-ft',(req,res)=>{
    unit = req.query.unit
    res.json({"ft":unit/12});   
})

length.post('/in-yd',(req,res)=>{
    unit = req.query.unit
    res.json({"yd":unit/36});   
})

length.post('/in-mi',(req,res)=>{
    unit = req.query.unit
    res.json({"mi":unit/63360});   
})


// Feet to X
length.post('/ft-in',(req,res)=>{
    unit = req.query.unit
    res.json({"in":unit*12});   
})

length.post('/ft-yd',(req,res)=>{
    unit = req.query.unit
    res.json({"yd":unit/3});   
})

length.post('/ft-mi',(req,res)=>{
    unit = req.query.unit
    res.json({"mi":unit/5280});   
})

// Yards to X
length.post('/yd-in',(req,res)=>{
    unit = req.query.unit
    res.json({"in":unit*36});   
})

length.post('/yd-ft',(req,res)=>{
    unit = req.query.unit
    res.json({"ft":unit*3});   
})

length.post('/yd-mi',(req,res)=>{
    unit = req.query.unit
    res.json({"mi":unit/1760});   
})

// Yards to X
length.post('/mi-in',(req,res)=>{
    unit = req.query.unit
    res.json({"in":unit*63360});   
})

length.post('/mi-ft',(req,res)=>{
    unit = req.query.unit
    res.json({"ft":unit*5280});   
})

length.post('/mi-yd',(req,res)=>{
    unit = req.query.unit
    res.json({"yd":unit*1760});   
})


/***********Metric to Imperial************/

//Millimeter to X
length.post('/mm-in',(req,res)=>{
    unit = req.query.unit
    res.json({"in":unit/25.4});
    
})
length.post('/mm-ft',(req,res)=>{
    unit = req.query.unit
    res.json({"ft":unit/304.8});
    
})
length.post('/mm-yd',(req,res)=>{
    unit = req.query.unit
    res.json({"yd":unit/914.4});
})
length.post('/mm-mi',(req,res)=>{
    unit = req.query.unit
    res.json({"mi":unit/1609340});
})

//Centimeter to X
length.post('/cm-in',(req,res)=>{
    unit = req.query.unit
    res.json({"in":unit/2.54});
    
})
length.post('/cm-ft',(req,res)=>{
    unit = req.query.unit
    res.json({"ft":unit/30.48});
    
})
length.post('/cm-yd',(req,res)=>{
    unit = req.query.unit
    res.json({"yd":unit/91.44});
})
length.post('/cm-mi',(req,res)=>{
    unit = req.query.unit
    res.json({"mi":unit/160934});
})

//Meter to X
length.post('/m-in',(req,res)=>{
    unit = req.query.unit
    res.json({"in":unit*39.37});
    
})
length.post('/m-ft',(req,res)=>{
    unit = req.query.unit
    res.json({"ft":unit*3.281});
    
})
length.post('/m-yd',(req,res)=>{
    unit = req.query.unit
    res.json({"yd":unit*1.094});
})
length.post('/m-mi',(req,res)=>{
    unit = req.query.unit
    res.json({"mi":unit/1609.34});
})

//Kilometers to X
length.post('/km-in',(req,res)=>{
    unit = req.query.unit
    res.json({"in":unit*39370});
    
})
length.post('/km-ft',(req,res)=>{
    unit = req.query.unit
    res.json({"ft":unit*3280.84});
    
})
length.post('/km-yd',(req,res)=>{
    unit = req.query.unit
    res.json({"yd":unit*1094});
})
length.post('/km-mi',(req,res)=>{
    unit = req.query.unit
    res.json({"mi":unit/1.60934});
})

/***********Imperial to Metric************/

//Inches to X
length.post('/in-mm',(req,res)=>{
    unit = req.query.unit
    res.json({"mm":unit*25.4});
    
})
length.post('/in-cm',(req,res)=>{
    unit = req.query.unit
    res.json({"cm":unit*2.54});
    
})
length.post('/in-m',(req,res)=>{
    unit = req.query.unit
    res.json({"m":unit/39.37});
})
length.post('/in-km',(req,res)=>{
    unit = req.query.unit
    res.json({"km":unit/39370});
})

//Feet to X
length.post('/ft-mm',(req,res)=>{
    unit = req.query.unit
    res.json({"mm":unit*304.8});
    
})
length.post('/ft-cm',(req,res)=>{
    unit = req.query.unit
    res.json({"cm":unit*30.48});
    
})
length.post('/ft-m',(req,res)=>{
    unit = req.query.unit
    res.json({"m":unit/3.281});
})
length.post('/ft-km',(req,res)=>{
    unit = req.query.unit
    res.json({"km":unit/3280.84});
})

//Yards to X
length.post('/yd-mm',(req,res)=>{
    unit = req.query.unit
    res.json({"mm":unit*914.4});
    
})
length.post('/yd-cm',(req,res)=>{
    unit = req.query.unit
    res.json({"cm":unit*91.44});
    
})
length.post('/yd-m',(req,res)=>{
    unit = req.query.unit
    res.json({"m":unit/1.094});
})
length.post('/yd-km',(req,res)=>{
    unit = req.query.unit
    res.json({"km":unit/1094});
})

//Miles to X
length.post('/mi-mm',(req,res)=>{
    unit = req.query.unit
    res.json({"mm":unit*1609340});
    
})
length.post('/mi-cm',(req,res)=>{
    unit = req.query.unit
    res.json({"cm":unit*160934});
    
})
length.post('/mi-m',(req,res)=>{
    unit = req.query.unit
    res.json({"m":unit*1609.34});
})
length.post('/mi-km',(req,res)=>{
    unit = req.query.unit
    res.json({"km":unit*1.60934});
})






module.exports = length;