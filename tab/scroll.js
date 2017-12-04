var app = angular.module("myApp", []);
app.directive("scrollFunction", function () {
    return {
        restrict: 'A',
        link: function link($scope, $element, $attr) {
            console.log('HELLO!!!');
            var avance = 0;
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
            }];
                $("#boton").click(function (event) {
                    if (avance > 0) {
                        avance = avance - 30;
                    }

                    $("div.m_wrap > .dx").scrollLeft(avance);
                });
                $("#botonstop").click(function (event) {
                    avance = avance + 30;

                    $("div.m_wrap > .dx").scrollLeft(avance);
                });
        }
    }

});
app.component("helloWorld",{
    template: 'Hello {{$ctrl.name}}!',
    bindings: { name: '@' }
    });




