var app = angular.module("myapp",['ngRoute']);


app.directive("headTag", function () {
    return {
        template: `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">`,
        restrict: 'E'
    }
});



app.controller("myCntrl", function ($scope, fact) {
    $scope.menudata = fact;
});


app.directive("navMenu", function () {
    return {
        controller: "myCntrl",
        template: `<nav class='navbar navbar-inverse'>
        <div class="page-header">
  <h1>Gizmos</h1>
</div>
<div class='container-fluid'><div class='navbar-header'><button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'><span class='sr-only'>Toggle navigation</span>
        <span class='icon-bar'></span>
        <span class='icon-bar'></span>
        <span class='icon-bar'></span>
      </button>
  
    </div>
    
    <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
      <ul class='nav navbar-nav' ng-repeat='obj in menudata.menu' >
        
        <li><a href='{{obj.url}}'>{{obj.value}}</a></li>
       
      </ul> 
         <ul class="nav navbar-nav navbar-right">
        <li><a href="#/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
  </div>
</nav>`,
        restrict: "E"
    }
});

app.directive("dodoSer", function () {
    return {
        controller: "speechController as spc",
        template: `<div class="results">
      <input class="final" ng-model="ser"  placeholder="search" id="inputS"><span style="border:1px;border-style:ridge;height:50px"><i class="glyphicon glyphicon-search"></i></span>
      <button ng-click="spc.start()">
      speech
      </button>
      </div>`,
        restrict: "E"
    }
});


app.controller('speechController', function ($scope) {
    this.rec = new webkitSpeechRecognition();
    this.interim = [];
    this.final = '';
    var self = this;

    this.rec.continuous = false;
    this.rec.lang = 'en-US';
    this.rec.interimResults = true;
    this.rec.onerror = function (event) {
        console.log('error!');
    };

    this.start = function () {
        self.rec.start();
    };

    this.rec.onresult = function (event) {
        for (var i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                self.final = self.final.concat(event.results[i][0].transcript);
                console.log(event.results[i][0].transcript);
                $scope.ser = event.results[i][0].transcript;
                $scope.$apply();

            }
        }
    };

});













app.controller("loginCont", function ($scope,loginFact,$window) {
    

var Disable;



    $scope.login=function(){
        var promise = loginFact.callServer($scope.userL,$scope.passL);
        promise.then(function(data){
            if(data.data=="invalid userid or password"){
                alert("Invalid userid or password")
            console.log("Data is ",data);
        }
        else
        {
        
            localStorage.status=data.data.status;
            localStorage.savedname=data.data.name;
            localStorage.userid=data.data.userid;
            // console.log("status is",status)
            $scope.result=data.data.name;
            
		}},function(){
			$scope.error = er;
		});

    }
    $scope.checklogin=function(){
        // console.log("status is",localStorage.status)
        // console.log("savedname is",localStorage.savedname)
        if(localStorage.status=="1"){
            $scope.result=localStorage.savedname;
            $scope.Disable=true;
            return true;
           
        }
        else{
            return false;
            $scope.Disable=false;
        }
    }
    $scope.signup=function(){
        $window.location.hash='/signup'
    }
    $scope.logout=function(){
        $scope.userL="";
        $scope.passL="";
        localStorage.status="0";
        localStorage.removeItem("savedname");
        $scope.Disable=false;
    }
})