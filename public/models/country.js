app.factory("coutFact",function($http,$q){
    var getJSON=function(){
       var pr=$q.defer();
       $http.get("https://raw.githubusercontent.com/saranshg04/ecommerce/master/public/models/city.json").then(function(data){
           console.log("Success");
           pr.resolve(data);
       },function(er){
           console.log("error");
           pr.reject(er);
       });
       return pr.promise;
   }
   return{"getjson":getJSON};
});