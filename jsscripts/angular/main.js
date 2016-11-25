var app = angular.module('myApp', []);
app.controller('myController', function ($scope)
{
    $scope.test = true;
    //initiate game or set resolution of field
    $scope.initGame = function ()
    {
        $scope.src = "unknown.png";
        $scope.count = 0;
        $scope.winner = false;
        $scope.arr = [];
        //debugger;
        $scope.res = localStorage.getItem('fieldRes');
        console.log('resolution of field:' + localStorage.getItem('fieldRes'));
        console.log('game field init');
        document.getElementById('moveText').innerHTML = localStorage.getItem('firstPlayer') + ' moves';
        $scope.fieldWidth =
        {
            "width": $scope.res * 102 + "px",
            "height": $scope.res * 102 + "px",
            "margin": "auto"
        }
        //init array of cell objects
        for (var i = 0; i < $scope.res; i++)
        {
            for (var j = 0; j < $scope.res; j++)
            {
                $scope.arr.push({ num: (i * $scope.res + j), x: i, y: j, picSrc: "unknown.png", clicked: 0 });
            }
        }
        console.log('game field initiated:' + $scope.arr);
    };

    //set value of cell, change image, check winning
    $scope.setXorO = function (cell)
    {
        console.log('set XorO');
        if (cell.clicked == 0 && !$scope.winner)
        {
            var move = document.getElementById('moveText');
            if ($scope.src == "picX.png")
            {
                $scope.src = "picO.png"
                cell.clicked = 2;
                move.innerHTML = localStorage.getItem('firstPlayer') + ' moves';
            } else
            {
                $scope.src = "picX.png"
                cell.clicked = 1;
                move.innerHTML = localStorage.getItem('secondPlayer') + ' moves';
            }
            cell.picSrc = $scope.src;
            console.log('cell x:' + cell.x + ',y:' + cell.y + ' set:' + (cell.clicked == 1 ? 'X' : 'O'));
        } else
        {
            console.log('uncklickable ' + 'cell x:' + cell.x + ',y:' + cell.y);
        }
        //checkWin($scope.res, $scope.arr);
    };
    //checking equal of three cells
    $scope.checkThreeCells = function (a, b, c)
    {
        console.log('checking of cells by number:' + a.num + ',' + b.num + ',' + c.num);
        return a.clicked == b.clicked &&
        b.clicked == c.clicked &&
        a.clicked != 0 ? true : false;
    }
    //check the winning line
    $scope.checkWin = function (res, cells)
    {
        $scope.res = res;
        console.log('checking winner');
        var flagWin = false;
        var flagGameEnd = true;
        for (var i = 1; i < $scope.res - 1; i++)
        {
            for (var j = 1; j < $scope.res - 1; j++)
            {
                //debugger;
                flagWin =
                //checking lines
                $scope.checkThreeCells(cells[(i - 1) * $scope.res + j], cells[(i - 1) * $scope.res + j - 1], cells[(i - 1) * $scope.res + j + 1]) ||
                $scope.checkThreeCells(cells[i * $scope.res + j], cells[i * $scope.res + j + 1], cells[i * $scope.res + j - 1]) ||
                $scope.checkThreeCells(cells[(i + 1) * $scope.res + j], cells[(i + 1) * $scope.res + j - 1], cells[(i + 1) * $scope.res + j + 1]) ||
                //checking columns
                $scope.checkThreeCells(cells[i * $scope.res + j], cells[(i + 1) * $scope.res + j], cells[(i - 1) * $scope.res + j]) ||
                $scope.checkThreeCells(cells[i * $scope.res + j - 1], cells[(i - 1) * $scope.res + j - 1], cells[(i + 1) * $scope.res + j - 1]) ||
                $scope.checkThreeCells(cells[i * $scope.res + j + 1], cells[(i - 1) * $scope.res + j + 1], cells[(i + 1) * $scope.res + j + 1]) ||
                //checking diagonals
                $scope.checkThreeCells(cells[(i - 1) * $scope.res + j - 1], cells[i * $scope.res + j], cells[(i + 1) * $scope.res + j + 1]) ||
                $scope.checkThreeCells(cells[(i - 1) * $scope.res + j + 1], cells[i * $scope.res + j], cells[(i + 1) * $scope.res + j - 1]) ?
                true : false;
                if (flagWin)
                {
                    if (cells[0].num != undefined)
                    {
                        console.log('game ends:' + flagWin);
                        $scope.winner = flagWin;
                        if ($scope.src == "picX.png")
                        {
                            localStorage.setItem('winner', localStorage.getItem('firstPlayer'));
                        } else
                        {
                            localStorage.setItem('winner', localStorage.getItem('secondPlayer'));
                        }
                        window.location.href = 'winner.html';
                    }
                    return flagWin;
                }
            }
        }
        for (var i = 0; i < $scope.res; i++)
        {
            for (var j = 0; j < $scope.res; j++)
            {
                if (cells[i * $scope.res + j].clicked == 0)
                {
                    flagGameEnd = false;
                }
            }
        }
        if (flagGameEnd)
        {
            localStorage.setItem('winner', 'Nobody');
            window.location.href = 'winner.html';
        }
        return false;
    };
});