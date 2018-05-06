app.factory("tabFactory", function ($http, $q) {
    var getJSON=function () {
    var defered = $q.defer();
    console.log("Calling JSON");
    $http.get("http://localhost:1234/tablet").then(function (data) {
        console.log("Inside success"+data.data);
        defered.resolve(data);
    }, function (er) {
        console.log("error")
        defered.reject(er);
    });
    return defered.promise;
}

return {"getjson":getJSON
       };
});
