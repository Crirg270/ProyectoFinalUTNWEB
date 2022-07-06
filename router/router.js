const {Router}= require ("express");
const router= new Router();

const mysql=require('mysql');



const conn= mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto'
    
    })
    
    conn.connect((err) =>{
    
    if(err)throw err;
    console.log("CONEXION ESTABLECIDA");
    })


//select 

router.get('/comprar',(req,res)=>{
    let sql="SELECT * FROM computadoras";
    let query= conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.render('../views/comprar',{ 
        results:results
    });
});

});




    module.exports = router;