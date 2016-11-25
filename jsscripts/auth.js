if (localStorage.getItem('firstPlayer') != undefined)
{
    document.forms['form'].elements['firstPlayer'].value = localStorage.getItem('firstPlayer');
    document.forms['form'].elements['secondPlayer'].value = localStorage.getItem('secondPlayer');
    document.forms['form'].elements['resNumber'].value = localStorage.getItem('fieldRes');
}

var setNamesAndRes = function ()
{
    if (typeof (Storage) !== 'undefined')
    {
        var res = document.forms['form'].elements['resNumber'].value;
        localStorage.setItem('fieldRes', res);
        console.log('resolution:' + res + 'x' + res);
        var player1 = document.forms['form'].elements['firstPlayer'].value;
        localStorage.setItem('firstPlayer', player1);
        console.log('first player:' + player1);
        var player2 = document.forms['form'].elements['secondPlayer'].value;
        localStorage.setItem('secondPlayer', player2)
        console.log('second player:' + player2);
    } else
    {
        document.getElementById("warning").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    window.location.href = 'game.html';
}