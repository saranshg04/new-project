const express= require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(express.static("public"));



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/mobiles',function(req,res){
    res.setHeader('Content-Type', 'application/json');
console.log("calling mobile");
const mobile=require("./db/mobilesschema.js")
mobile.find(function(error,docs){
    if(error){
        console.log("some problem")
        response.send('Some Problem in my Connection');   
    }
    else{
        console.log("calling mobile")

res.send(JSON.stringify(docs));
        
                 }
})
})

app.get('/laptop',function(req,res){
    res.setHeader('Content-Type', 'application/json');
console.log("calling laptop");
const laptop=require("./db/laptopsschema.js")
laptop.find(function(error,docs){
    if(error){
        console.log("some problem")
        response.send('Some Problem in my Connection');   
    }
    else{
        console.log("calling laptop")

res.send(JSON.stringify(docs));
        
                 }
})
})

app.get('/tablet',function(req,res){
    res.setHeader('Content-Type', 'application/json');
console.log("calling tablet");
const tablet=require("./db/tabletsschema.js")
tablet.find(function(error,docs){
    if(error){
        console.log("some problem")
        response.send('Some Problem in my Connection');   
    }
    else{
        console.log("calling tablet")

res.send(JSON.stringify(docs));
        
                 }
})
})

app.post('/signup',function(request,response){
   // console.log("Request is ",request);
 //response.send('I am in Signup');
 var name=request.body.name;
 var userid = request.body.usernameS;
 var password = request.body.passwordS;
 var status= "1";
     const userOperations =  require("./db/useroperations.js");
     const User = require("./helpers/User.js");
     const userObject = new User(name,userid,password,status);
     console.log("userobject is",userObject);
     userOperations.add(userObject,response); 
})

app.post('/login',function(req,res){
    var userid = req.body.username;
      var password = req.body.password; 
       const userOperations =  require("./db/useroperations.js");
      const User2 = require("./helpers/loginuser.js");
      const userObject = new User2(userid,password);
      console.log("usrobj",userObject)
      userOperations.search(userObject,res,req);
      
     
    });

app.post('/buy',function(req,res){
    var userid=req.body.userid;
    var proname=req.body.proname;
    var proimage=req.body.proimage;
    const userOperations =  require("./db/useroperations.js");
    const Buyuser = require("./helpers/buyproduct.js");
    const userObject = new Buyuser(userid,proname,proimage);
    console.log("usrobj",userObject)
    userOperations.buypro(userObject,res,req);
})


app.post('/showbuy',function(req,res){
    var userid=req.body.userid;
    console.log("calling showbuy")
    const userOperations =  require("./db/useroperations.js");
    userOperations.showbuy(userid,req,res);
    
})


app.listen(1234,function(){
    console.log("Server started on port 1234");
})