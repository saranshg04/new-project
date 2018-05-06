app.controller("tabCont", function ($scope, tabFactory,coutFact,buyFact,$window,cartFactory)
{
    console.log("controller calling")
     var promise = tabFactory.getjson();
     promise.then(pass, fail);

    
    function pass(data) {
        $scope.tablets = data.data;
        console.log("tablet data is",data.data);
    }

    function fail(er) {
        $scope.error = er;
    
    }

    var prom = coutFact.getjson();
    
        function succ(data) {
            console.log(data);
            $scope.countries = data.data;
    
        }
    
        function failure(er) {
            $scope.error = er;
        }
        prom.then(succ, failure);






    $scope.addCart = function (i) {
        console.log("Status is", localStorage.status)
        var z = 1;
        if (localStorage.status == '0'||localStorage.status=="undefined") {
            console.log("not login")
            $window.location.hash = "/login";
            alert("First Login");
            z = 0;
        } else {
            z = 1;
            var obj = new cartFactory.Cart(i.name, i.image, i.price);
            var arr = cartFactory.Cartdet;
            arr.push(obj);
            var json = JSON.stringify(arr);
            console.log("arr is"+json);
            localStorage.det = json;

            alert("Added to CARt")
        

        }
       

    }


    $scope.Buy=function(regForm,i){
        console.log("status",localStorage.status)
        if(localStorage.status=="0"||localStorage.status=="undefined"){
            $window.location.hash="/login";
            alert("First Login");
        }
        else{
            console.log("savedname",localStorage.savedname)
            console.log("userid",localStorage.userid)
            var uid=localStorage.userid;
            console.log("city",$scope.city)
            

            var promise = buyFact.callServer(uid,i.name,i.image);
            promise.then(function(data){
                //console.log("Data is ",data.data);
                localStorage.status=data.data.status;
                localStorage.savedname=data.data.name;
                // console.log("status is",status)
                $scope.result=data.data.name;
                
            },function(){
                $scope.error = er;
            });

        }
    }
    
});
                                    