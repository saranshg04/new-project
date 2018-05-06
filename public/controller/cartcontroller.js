app.controller("cartCont",function($scope,$route,cartFactory,$window){
    $scope.checkLocal = function () {
        // var arr = cartFactory.Cartdet;
        // var json = JSON.stringify(arr);
        // var obj = JSON.parse(json);
        // console.log("cartdata",obj)
        // console.log("cardatalength",obj.length)
        console.log("checking cart status",localStorage.status)
        if (localStorage.det.length=="2" || localStorage.status=="0" || localStorage.status=="undefined" ) {
            console.log("returning true")
            return true;
           
        } else {
            console.log("returning false")
            return false;
           
        }
    }
    var arr = cartFactory.Cartdet;
    console.log("arr is",arr)
    var json = localStorage.det;
    var obj = JSON.parse(json);
    console.log("cartdata",obj)
    $scope.cartData=obj;



    $scope.remCart = function (i) {
        
    
        var arr = cartFactory.Cartdet;
        var json = JSON.stringify(arr);
        var obj = JSON.parse(json);
                        obj.forEach(function (k) {
                            console.log("k.name",k.name)
                            console.log("i.name",i.name)
                            if (k.name == i.name) {
                                k.rem = true;
                            }
                        });
                     
                    
                        arr = obj.filter(function (emp) {
                            return !emp.rem;
                        });
                   console.log("new obj is",obj)
                  console.log("filtered array",arr)
        
                var newjson = JSON.stringify(arr);
                // json = newjson;
                localStorage.det=newjson;
                var Obj2 = JSON.parse(localStorage.det);
                arr.push(Obj2)
                $scope.cartDET = Obj2;
                $window.location.reload();

                
            }

})