app.controller("buyCont",function($scope,buyFact)
{
    
 

    $scope.checkLocal = function () 
    {
        console.log("status is",localStorage.status)
        if (localStorage.status=="1") 
        {
            return false;
            
        } else 
        {
            return true;
        }
    }

    var promise = buyFact.getServer();
    promise.then(function(data){
        console.log("data is ",data.data)
      
        $scope.purchasedData=data.data;
        
    },function(){
        $scope.error = er;
    });
  
    
});
