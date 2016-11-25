/*describe("pow", function () {

    it("возводит в n-ю степень", function () {
        assert.equal(pow(2, 3), 8);
    });

    it("возводит в ", function () {
        assert.equal(pow(3, 4), 81);
    });
});
*/
/* Test Code */
describe('testing of game', function ()
{
    beforeEach(module('myApp'));
    var $controller;
    var $scope = {};
    beforeEach(inject(function (_$controller_)
    {
        $controller = _$controller_;
        var controller = $controller('myController', { $scope: $scope });
    }));
    describe('test function', function ()
    {
        it('test default value', function ()
        {
            expect($scope.test).toBe(true);
        });
    });
    describe('check of three cells for win', function ()
    {
        it('default field', function ()
        {
            expect($scope.checkThreeCells({ clicked: 0 }, { clicked: 0 }, { clicked: 0 })).toBe(false);
        });
        it('have X winner', function ()
        {
            expect($scope.checkThreeCells({ clicked: 1 }, { clicked: 1 }, { clicked: 1 })).toBe(true);
        });
        it('have O winner', function ()
        {
            expect($scope.checkThreeCells({ clicked: 2 }, { clicked: 2 }, { clicked: 2 })).toBe(true);
        });
        it('don\'t have winner', function ()
        {
            expect($scope.checkThreeCells({ clicked: 0 }, { clicked: 1 }, { clicked: 2 })).toBe(false);
        });
        it('wrong ', function ()
        {
            expect($scope.checkThreeCells({ clicked: 0 }, { clicked: 1 }, { clicked: 3 })).toBe(false);
        });
    });

    describe('check of game by 3 * 3', function ()
    {
        it('default field', function ()
        {
            $scope.res = 3;
            expect($scope.checkWin(3, [{ clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0}])).toBe(false);
        });
        it('have X winner 1st line', function ()
        {
            expect($scope.checkWin(3, [{ clicked: 1 }, { clicked: 1 }, { clicked: 1 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0}])).toBe(true);
        });
        it('have X winner 2nd line', function ()
        {
            expect($scope.checkWin(3, [{ clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 1 }, { clicked: 1 }, { clicked: 1 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0}])).toBe(true);
        });
        it('have X winner 3rd line', function ()
        {
            expect($scope.checkWin(3, [{ clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 1 }, { clicked: 1 }, { clicked: 1}])).toBe(true);
        });
        it('have X winner 1st column', function ()
        {
            expect($scope.checkWin(3, [{ clicked: 1 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 1 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 1 }, { clicked: 0 }, { clicked: 0}])).toBe(true);
        });
        it('have X winner 2nd column', function ()
        {
            expect($scope.checkWin(3, [{ clicked: 0 }, { clicked: 1 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 1 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 1 }, { clicked: 0}])).toBe(true);
        });
        it('have X winner 3rd column', function ()
        {
            expect($scope.checkWin(3, [{ clicked: 0 }, { clicked: 0 }, { clicked: 1 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 1 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 1}])).toBe(true);
        });
        it('have X winner 1st diagonal', function ()
        {
            expect($scope.checkWin(3, [{ clicked: 1 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 1 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 1}])).toBe(true);
        });
        it('have X winner 2nd diagonal', function ()
        {
            expect($scope.checkWin(3, [{ clicked: 0 }, { clicked: 0 }, { clicked: 1 },
                                    { clicked: 0 }, { clicked: 1 }, { clicked: 0 },
                                    { clicked: 1 }, { clicked: 0 }, { clicked: 0}])).toBe(true);
        });
        it('don\'t have winner', function ()
        {
            expect($scope.checkWin(3, [{ clicked: 2 }, { clicked: 1 }, { clicked: 1 },
                                    { clicked: 1 }, { clicked: 2 }, { clicked: 2 },
                                    { clicked: 2 }, { clicked: 1 }, { clicked: 1 }])).toBe(false);
        });
        it('wrong cell', function ()
        {
            expect($scope.checkWin(3, [{ clicked: 2 }, { clicked: 1 }, { clicked: 2 },
                                    { clicked: 1 }, { clicked: 3 }, { clicked: -1 },
                                    { clicked: 2 }, { clicked: 1 }, { clicked: 1 }])).toBe(false);
        });
    });

    describe('test field 4 * 4', function ()
    {   
        //$scope.res = 4;
        it('default field', function ()
        {
            expect($scope.checkWin(4, [{ clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 }])).toBe(false);
        });
        it('have X winner by high line', function ()
        {
            expect($scope.checkWin(4, [{ clicked: 1 }, { clicked: 1 }, { clicked: 1 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 }])).toBe(true);
        });
        it('have X winner by middle line', function ()
        {
            expect($scope.checkWin(4, [{ clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 1 }, { clicked: 1 }, { clicked: 1 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 }])).toBe(true);
        });
         it('have X winner by low line', function ()
        {
            expect($scope.checkWin(4, [{ clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 0 }, { clicked: 0 }, { clicked: 0 }, { clicked: 0 },
                                    { clicked: 1 }, { clicked: 1 }, { clicked: 1 }, { clicked: 0 }])).toBe(true);
        });

    });
});