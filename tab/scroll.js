var app = angular.module("myApp", []);
app.directive("scrollFunction", function () {
    return {
        restrict: 'A',
        link: function link($scope, $element, $attr) {
            console.log('HELLO!!!');
            var avance = 0;
            $scope.records = [{
                id: 1,
                name: "figure1"
            }, {
                id: 2,
                name: "figure2"
            }, {
                id: 2,
                name: "figure3"
            }, {
                id: 2,
                name: "figure4"
            }, {
                id: 2,
                name: "figure5"
            }, {
                id: 2,
                name: "figure6"
            }, {
                id: 2,
                name: "figure7"
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
app.component("helloWorld", {
    template: '<div id="figure">{{$ctrl.name}}!</div>',
    bindings: {name: '@'}
});




