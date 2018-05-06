app.factory("buyFact",function($http,$q){
    var getJSON=function(uid,iname,iimage){
       var pr=$q.defer();
       var data={
        userid:uid,
        proname:iname,
        proimage:iimage
    }
       $http.post("http://localhost:1234/buy",data).then(function(data){
           console.log("Success");
           pr.resolve(data);
       },function(er){
           console.log("error");
           pr.reject(er);
       });
       return pr.promise;
   }
   var findjson=function(){
    var pr=$q.defer();
    var data={
        userid:localStorage.userid
    }
    console.log("calling showbuy")
    $http.post("http://localhost:1234/showbuy",data).then(function(data){
        console.log("Success");
        pr.resolve(data);
    },function(er){
        console.log("error");
        pr.reject(er);
    });
    return pr.promise;
}
   return{"callServer":getJSON,"getServer":findjson};
});