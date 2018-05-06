app.factory("loginFact",function($http,$q){
        var object = {
            callServer: function (uname,pwd) {
                var pr=$q.defer()
                var data={
                    username:uname,
                    password:pwd
                }
               // var imageurl = "http://api.giphy.com/v1/gifs/search?q="+searchImg+"&api_key=dc6zaTOxFJmzC";
                //console.log("Before HTTP CALL ");
                $http.post("http://localhost:1234/login",data).then(success,fail); // this is asynch call
                console.log("After HTTP Call");
                function success(data){
                    //console.log("SUCCESS",data);
                    pr.resolve(data);
                    //scope.result = data.data;
                }
                function fail(er){
                    console.log("FAIL");
                    pr.reject(er);
                    //scope.error = er;
                }
                console.log("Exit from Call Server....");
                return pr.promise;
            }
        };
            
        
        return object;
    
});