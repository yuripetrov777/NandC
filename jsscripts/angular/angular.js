 var app = angular.module('myApp', []);
            app.controller('myController', function ($scope) {
                $scope.resOfMatrix = 3;

                $scope.initGame = function () {//initiate field bordered clicked: -1 objects for checking winner 
                    $scope.src = "unknown.png";
                    $scope.count = 0;
                    $scope.cells = [$scope.resOfMatrix + 2][$scope.resOfMatrix + 2];
                    for (var i = 0; i < $scope.resOfMatrix + 2; i++) {
                        for (var j = 0; j < $scope.resOfMatrix + 2; j++) {
                            if ((i > 0 && i < $scope.resOfMatrix + 2) &&
                            (j > 0 && j < $scope.resOfMatrix + 2)) {
                                $scope.cells[i][j] = { num: i * $scope.resOfMatrix + j, picSrc: "unknown.png", clicked: 0 };
                            } else {
                                $scope.cells[i][j] = { num: i * $scope.resOfMatrix + j, picSrc: "unknown.png", clicked: -1 };
                            }
                        }
                    }
                };

                $scope.test = true;

                $scope.setXorO = function (fieldNum) {//set field with pictures of X or O
                    if ($scope.cells[fieldNum].clicked == 0) {
                        if ($scope.src == "picX.png") {
                            $scope.src = "picO.png"
                            $scope.cells[fieldNum].clicked = 2;
                        } else {
                            $scope.src = "picX.png"
                            $scope.cells[fieldNum].clicked = 1;
                        }
                        $scope.cells[fieldNum].picSrc = $scope.src;
                    }
                    $scope.checkWinner = function (matrix) {
                        var z = true;
                        /*var borderedMatrix = [n + 2, n + 2];
                        for (var j = 0; j < n + 2; j++) {
                        for (var i = 0; i < n + 2; i++) {
                        if ((i > 0 && i < n + 1) && (j > 0 && j < n + 1)) {
                        borderedMatrix[i, j] = matrix[j * n + i];
                        } else {
                        borderedMatrix[i, j] = { num: i, picSrc: "unknown.png", clicked: 0 };
                        }
                        }
                        }*/
                        for (var i = 1; i < $scope.resOfMatrix + 1; i++) {

                        }
                        return z;
                    };


                };
            });