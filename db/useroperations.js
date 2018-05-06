const User = require("./userschema.js");
const Buyproduct=require("./buyschema.js")

var path=require("path");
const userOperations={

    add(userObject,response){
        console.log("calling add")

        User.create(userObject,function(error){
        if(error){
            console.log("Error Occur During Addition of New User");
               response.send("Can't Add a New User"); 
        }
        else{
            console.log("Record Added SuccessFully ");
            response.redirect('/#/login')
        }
        });
    },
    search(userObject,response,request){
        console.log("calling search1")
        User.find({'userid':userObject.userid,'password':userObject.password
    },function(error,docs)
    {
            if(error)
            {
                response.send('Some Problem in DB Connection');
            }
            else
            {
                if(docs.length==0)
                {
                    console.log("invalid")
                  response.send("invalid userid or password")
            }
            
                else
                {
                console.log("calling search docs is",docs[0])
                 
                    response.send(docs[0]);
                }
                   
            }
        })
    },
        buypro(userObject,response){
            console.log("calling add")
    
            Buyproduct.create(userObject,function(error){
            if(error){
                console.log("Error Occur During Addition of New User");
                   response.send("Can't Add a New User"); 
            }
            else{
                console.log("Record Added SuccessFully ");
    
            }
            });
        },
        showbuy(userid,request,response){
            console.log("userid is",userid)
            Buyproduct.find({'userid':userid},function(err,docs)
            {
                console.log("finding")
                if(err)
                {
                    console.log("error 1")
                    response.send('Some Problem in DB Connection');
                }
                else
                {
                  
                    
                    console.log("calling search")
                    console.log("docs is",docs[0])
                     
                        response.send(docs);
                    
                       
                }
            })
        }
    }
module.exports = userOperations;