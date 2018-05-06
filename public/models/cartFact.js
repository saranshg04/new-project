app.factory("cartFactory", function ($http, $q) {
//     var getJSON=function () {
//     var defered = $q.defer();
//     console.log("Calling JSON");
//     $http.get("http://localhost:7777/mobiles").then(function (data) {
//         console.log("Inside success"+data.data);
//         defered.resolve(data);
//     }, function (er) {
//         defered.reject(er);
//     });
//     return defered.promise;
// }
var cart=[];
    var addToCart=function(name,image,price){
        this.name=name;
        this.image=image;
        this.price=price;
        this.rem=false;
    }
   
return {"Cartdet":cart,"Cart":addToCart};
});
