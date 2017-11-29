

var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.records = [{
        id: 1,
        name: "mia"
    }, {
        id: 2,
        name: "juan"
    },{
        id: 2,
        name: "juan"
    },{
        id: 2,
        name: "juan"
    }]
});




var avance = 0;
$(document).ready(function() {

    $("#boton").click(function(event) {
        if (avance > 0) {
            avance = avance - 30;
        }

        $("div.m_wrap > .dx").scrollLeft(avance);
    });
    $("#botonstop").click(function(event) {
        avance = avance + 30;

        $("div.m_wrap > .dx").scrollLeft(avance);
    });
});