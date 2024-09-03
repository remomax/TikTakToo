function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('loadForm'));

    fetch('TikTakToLoad.php', {
        method: 'POST',
        body: formData
    })  .then(response => response.text())
        .then(data => {
            //document.getElementById('loadForm').innerText = data;
            LoadData();
        })
        .catch(error => {
            console.error('Fehler:', error);
        });


    console.log('Formular abgesendet.');


}

function LoadGame(){
    var CurrPlayer = getCookie('CurrPlayer');
    var col_1_1 = getCookie('col_1_1');
    var col_1_2 = getCookie('col_1_2');
    var col_1_3 = getCookie('col_1_3');
    var col_2_1 = getCookie('col_2_1');
    var col_2_2 = getCookie('col_2_2');
    var col_2_3 = getCookie('col_2_3');
    var col_3_1 = getCookie('col_3_1');
    var col_3_2 = getCookie('col_3_2');
    var col_3_3 = getCookie('col_3_3');
    var container11 = document.getElementById('1.1');
    var container11b = document.getElementById('1.1b');
    var container11c = 0;
    var container12 = document.getElementById('1.2');
    var container12b = document.getElementById('1.2b');
    var container12c = 0;
    var container13 = document.getElementById('1.3');
    var container13b = document.getElementById('1.3b');
    var container13c = 0;
    var container21 = document.getElementById('2.1');
    var container21b = document.getElementById('2.1b');
    var container21c = 0;
    var container22 = document.getElementById('2.2');
    var container22b = document.getElementById('2.2b');
    var container22c = 0;
    var container23 = document.getElementById('2.3');
    var container23b = document.getElementById('2.3b');
    var container23c = 0;
    var container31 = document.getElementById('3.1');
    var container31b = document.getElementById('3.1b');
    var container31c = 0;
    var container32 = document.getElementById('3.2');
    var container32b = document.getElementById('3.2b');
    var container32c = 0;
    var container33 = document.getElementById('3.3');
    var container33b = document.getElementById('3.3b');
    var container33c = 0;
    var loadForm = document.getElementById('loadForm');
    loadForm.style.display = 'none';
    if (col_1_1 === '1') {
        container11b.style.backgroundColor = 'red';
        container11.style.display = 'none';
        container11c = 1;
        console.log(111);
    } else if (col_1_1 === '2') {
        container11b.style.backgroundColor = 'green';
        container11.style.display = 'none';
        container11c = 2;
        console.log(112);
    }

    if (col_1_2 === '1') {
        container12b.style.backgroundColor = 'red';
        container12.style.display = 'none';
        container12c = 1;
        console.log(121);
    } else if (col_1_2 === '2') {
        container12b.style.backgroundColor = 'green';
        container12.style.display = 'none';
        container12c = 2;
        console.log(122);
    }

    if (col_1_3 === '1') {
        container13b.style.backgroundColor = 'red';
        container13.style.display = 'none';
        container13c = 1;
        console.log(131);
    } else if (col_1_3 === '2') {
        container13b.style.backgroundColor = 'green';
        container13.style.display = 'none';
        container13c = 2;
        console.log(132);
    }

    if (col_2_1 === '1') {
        container21b.style.backgroundColor = 'red';
        container21.style.display = 'none';
        container21c = 1;
        console.log(211);
    } else if (col_2_1 === '2') {
        container21b.style.backgroundColor = 'green';
        container21.style.display = 'none';
        container21c = 2;
        console.log(212);
    }

    if (col_2_2 === '1') {
        container22b.style.backgroundColor = 'red';
        container22.style.display = 'none';
        container22c = 1;
        console.log(221);
    } else if (col_2_2 === '2') {
        container22b.style.backgroundColor = 'green';
        container22.style.display = 'none';
        container22c = 2;
        console.log(222);
    }

    if (col_2_3 === '1') {
        container23b.style.backgroundColor = 'red';
        container23.style.display = 'none';
        container23c = 1;
        console.log(231);
    } else if (col_2_3 === '2') {
        container23b.style.backgroundColor = 'green';
        container23.style.display = 'none';
        container23c = 2;
        console.log(232);
    }

    if (col_3_1 === '1') {
        container31b.style.backgroundColor = 'red';
        container31.style.display = 'none';
        container31c = 1;
        console.log(311);
    } else if (col_3_1 === '2') {
        container31b.style.backgroundColor = 'green';
        container31.style.display = 'none';
        container31c = 2;
        console.log(312);
    }

    if (col_3_2 === '1') {
        container32b.style.backgroundColor = 'red';
        container32.style.display = 'none';
        container32c = 1;
        console.log(321);
    } else if (col_3_2 === '2') {
        container32b.style.backgroundColor = 'green';
        container32.style.display = 'none';
        container32c = 2;
        console.log(322);
    }

    if (col_3_3 === '1') {
        container33b.style.backgroundColor = 'red';
        container33.style.display = 'none';
        container33c = 1;
        console.log(331);
    } else if (col_3_3 === '2') {
        container33b.style.backgroundColor = 'green';
        container33.style.display = 'none';
        container33c = 2;
        console.log(332);
    }



}

function LoadData() {
    const LoadCheck = getCookie('Load');
    const Game_ID_Load = getCookie('Game_ID');
    if (LoadCheck === '2') {
        console.error('ERROR: Game-ID existiert nicht, Error Code: Load_1, VarLoad:', LoadCheck, ' Game-ID:', Game_ID_Load)
        alert('ERROR: Game-ID existiert nicht, Error Code: Load_1');
    } else {
        LoadGame();
    }}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('load', function () {
    var container11 = document.getElementById('1.1');
    var container11b = document.getElementById('1.1b');
    var container11c = 0;
    var container12 = document.getElementById('1.2');
    var container12b = document.getElementById('1.2b');
    var container12c = 0;
    var container13 = document.getElementById('1.3');
    var container13b = document.getElementById('1.3b');
    var container13c = 0;
    var container21 = document.getElementById('2.1');
    var container21b = document.getElementById('2.1b');
    var container21c = 0;
    var container22 = document.getElementById('2.2');
    var container22b = document.getElementById('2.2b');
    var container22c = 0;
    var container23 = document.getElementById('2.3');
    var container23b = document.getElementById('2.3b');
    var container23c = 0;
    var container31 = document.getElementById('3.1');
    var container31b = document.getElementById('3.1b');
    var container31c = 0;
    var container32 = document.getElementById('3.2');
    var container32b = document.getElementById('3.2b');
    var container32c = 0;
    var container33 = document.getElementById('3.3');
    var container33b = document.getElementById('3.3b');
    var container33c = 0;
    var CurrPlayer = 0;
    var col_1_1 = 0;
    var col_1_2 = 0;
    var col_1_3 = 0;
    var col_2_1 = 0;
    var col_2_2 = 0;
    var col_2_3 = 0;
    var col_3_1 = 0;
    var col_3_2 = 0;
    var col_3_3 = 0;
    var LoadGame_var = 0;
    var container = document.getElementById('start');
    var reload = document.getElementById('reload');
    var table = document.getElementById('table');
    var redtext = document.getElementById('redtext');
    var redwin = document.getElementById('redwin');
    var greentext = document.getElementById('greentext');
    var greenwin = document.getElementById('greenwin');
    var green = document.getElementById('green');
    var red = document.getElementById('red');
    var begintext = document.getElementById('begintext');
    var nowin = document.getElementById('nowin');
    var greentogo = document.getElementById('greentogo');
    var redtogo = document.getElementById('redtogo');
    var begin = 0;
    var click = 0;
    var save = document.getElementById('save');
    var load = document.getElementById('load');
    var loadForm = document.getElementById('loadForm');
    var Saved = document.getElementById('Saved');
    var Saved_ID = document.getElementById('Saved_ID');
    let RainbowStop = 0;
    const text = "Wer_Beginnt?";
    var Win = 0;
    var LoadStart = document.getElementById('LoadStart');
    var Submit = document.getElementById('submit');
    var LoadCheck = 2;
    var reload2 = document.getElementById('reload2');
    RainBow();


    //container.style.backgroundColor = 'red';


    greentext.style.display = 'none';
    redtext.style.display = 'none';

    greenwin.style.display = 'none';
    redwin.style.display = 'none';
    nowin.style.display = 'none';
    redtogo.style.display = 'none';
    greentogo.style.display = 'none';
    save.style.display = 'none';
    loadForm.style.display = 'none';
    Saved.style.display = 'none';
    Saved_ID.style.display = 'none';
    reload2.style.display = 'none';




    document.getElementById('start').addEventListener('click',  function () {
        if (begin !== 0) {

            RainbowStop = 1;
            table.style.display = "block";
            console.log('begin:', begin);
            container.style.display = "none";
            greentext.style.display = 'none';
            redtext.style.display = 'none';
            green.style.display = "none";
            red.style.display = "none";
            save.style.display = 'block';
            load.style.display = 'none';
            loadForm.style.display = 'none';
            CheckWin();
        }
        else {
            alert('Du musst erst ein Spieler Auswehlen');
        }
    })
    document.getElementById('reload').addEventListener('click',  function () {
        location.reload();
    })
    document.getElementById('reload2').addEventListener('click',  function () {
        location.reload();
    })
    document.getElementById('submit').addEventListener('click',  function () {
        LoadCheck = getCookie('Load');
        LoadStart.style.display = 'block';
    })
    document.getElementById('LoadStart').addEventListener('click',  function () {
        LoadCheck = getCookie('Load');
        if (LoadCheck !== '1') {
            alert('ERROR1'); }
        else {
            LoadStart.style.display = 'none';
            RainbowStop = 1;
            begintext.style.display = 'none';
            table.style.display = "block";
            begin = getCookie('CurrPlayer');
            console.log('begin:', begin);
            container.style.display = "none";
            greentext.style.display = 'none';
            redtext.style.display = 'none';
            green.style.display = "none";
            red.style.display = "none";
            save.style.display = 'block';
            load.style.display = 'none';
            loadForm.style.display = 'none';
            Submit.style.display = 'none';
            reload2.style.display = 'none';
            LoadGame();
            CheckWin();
        }})
    document.getElementById('load').addEventListener('click',  function () {
        loadForm.style.display = 'block';
        reload2.style.display = 'block';
        red.style.display = 'none';
        green.style.display = 'none';
        load.style.display = 'none';
        container.style.display = 'none';
        redtext.style.display = 'none';
        greentext.style.display = 'none';
    })
    document.getElementById('save').addEventListener('click',  function () {
        SaveGame_New();
    })

    document.getElementById('green').addEventListener('click',  function () {
        begin = '2';
        console.log('begin:', begin);
        begintext.style.display = "none";
        redtext.style.display = "none";
        greentext.style.display = "block";
        container.style.display = 'block';
        Secret();
    })
    document.getElementById('red').addEventListener('click', function () {
        begin = '1';
        console.log('begin:', begin);
        begintext.style.display = "none";
        greentext.style.display = 'none';
        redtext.style.display = "block";
        container.style.display = 'block';
        Secret();
    })

// begin == 1 RED; begin == 2 GREEN


    document.getElementById('1.1').addEventListener('click',  function () {
        if (begin === '1') {
            container11b.style.backgroundColor = 'red';
            container11c = 1;
            container11.style.display = "none";
            begin = '2';
            CheckWin();
            console.log('begin:', begin);
        }

        else if (begin === '2') {
            container11b.style.backgroundColor = 'green';
            container11c = 2;
            container11.style.display = "none";
            begin = '1';
            CheckWin();
            console.log('begin:', begin);
        }
    } )
    document.getElementById('1.2').addEventListener('click',  function () {
        if (begin === '1') {
            container12b.style.backgroundColor = 'red';
            container12c = 1;
            container12.style.display = "none";
            begin = '2';
            CheckWin();
            console.log('begin:', begin);
        }
        else if (begin === '2') {
            container12b.style.backgroundColor = 'green';
            container12c = 2;
            container12.style.display = "none";
            begin = '1';
            CheckWin();
            console.log('begin:', begin);
        }
    })
    document.getElementById('1.3').addEventListener('click',  function () {
        if (begin === '1') {
            container13b.style.backgroundColor = 'red';
            container13c = 1;
            container13.style.display = "none";
            begin = '2';
            CheckWin();
            console.log('begin:', begin);
        }
        else if (begin === '2') {
            container13b.style.backgroundColor = 'green';
            container13c = 2;
            container13.style.display = "none";
            begin = '1';
            CheckWin();
            console.log('begin:', begin);
        }
    })
    document.getElementById('2.1').addEventListener('click',  function () {
        if (begin === '1') {
            container21b.style.backgroundColor = 'red';
            container21c = 1;
            container21.style.display = "none";
            begin = '2';
            CheckWin();
            console.log('begin:', begin);
        }
        else if (begin === '2') {
            container21b.style.backgroundColor = 'green';
            container21c = 2;
            container21.style.display = "none";
            begin = '1';
            CheckWin();
            console.log('begin:', begin);
        }
    })
    document.getElementById('2.2').addEventListener('click',  function () {
        if (begin === '1') {
            container22b.style.backgroundColor = 'red';
            container22c = 1;
            container22.style.display = "none";
            begin = '2';
            CheckWin();
            console.log('begin:', begin);
        }
        else if (begin === '2') {
            container22b.style.backgroundColor = 'green';
            container22c = 2;
            container22.style.display = "none";
            begin = '1';
            CheckWin();
            console.log('begin:', begin);
        }
    })
    document.getElementById('2.3').addEventListener('click',  function () {
        if (begin === '1') {
            container23b.style.backgroundColor = 'red';
            container23c = 1;
            container23.style.display = "none";
            begin = '2';
            CheckWin();
            console.log('begin:', begin);
        }
        else if (begin === '2') {
            container23b.style.backgroundColor = 'green';
            container23c = 2;
            container23.style.display = "none";
            begin = '1';
            CheckWin();
            console.log('begin:', begin);
        }
    })
    document.getElementById('3.1').addEventListener('click',  function () {
        if (begin === '1') {
            container31b.style.backgroundColor = 'red';
            container31c = 1;
            container31.style.display = "none";
            begin = '2';
            CheckWin();
            console.log('begin:', begin);
        }
        else if (begin === '2') {
            container31b.style.backgroundColor = 'green';
            container31c = 2;
            container31.style.display = "none";
            CheckWin();
            begin = '1';
            console.log('begin:', begin);
        }
    })
    document.getElementById('3.2').addEventListener('click',  function () {
        if (begin === '1') {
            container32b.style.backgroundColor = 'red';
            container32c = 1;
            container32.style.display = "none";
            begin = '2';
            CheckWin();
            console.log('begin:', begin);
        }
        else if (begin === '2') {
            container32b.style.backgroundColor = 'green';
            container32c = 2;
            container32.style.display = "none";
            begin = '1';
            CheckWin();
            console.log('begin:', begin);
        }
    })
    document.getElementById('3.3').addEventListener('click',  function () {
        if (begin === '1') {
            container33b.style.backgroundColor = 'red';
            container33c = 1;
            container33.style.display = "none";
            begin = '2';
            CheckWin();
            console.log('begin:', begin);
        }
        else if (begin === '2') {
            container33b.style.backgroundColor = 'green';
            container33c = 2;
            container33.style.display = "none";
            console.log('begin:', begin);
            CheckWin();
            begin = '1';
        }


    })

    function hideall() {
        container11.style.display = "none";
        container12.style.display = "none";
        container13.style.display = "none";
        container21.style.display = "none";
        container22.style.display = "none";
        container23.style.display = "none";
        container31.style.display = "none";
        container32.style.display = "none";
        container33.style.display = "none";
        greentogo.style.display = 'none';
        redtogo.style.display = 'none';
        Win = 1;
    }


// begin == 1 RED; begin == 2 GREEN


    function CheckWin() {
        if (begin === '1') {
            greentogo.style.display = 'none';
            redtogo.style.display = "block";
        }
        if (begin === '2') {
            redtogo.style.display = 'none';
            greentogo.style.display = "block";
        }

        //Check if Red Won
        if (container11c === 1) {
            if (container12c === 1) {
                if (container13c === 1) {
                    
                    hideall();
                    redwin.style.display = 'block';

                }
            }
            if (container21c === 1) {
                if (container31c === 1) {
                    
                    redwin.style.display = 'block';
                    hideall();

                }
            }
            if (container22c === 1) {
                if (container33c === 1) {
                    
                    redwin.style.display = 'block';
                    hideall();

                }
            }
        }
        if (container12c === 1) {
            if (container22c === 1) {
                if (container32c === 1) {
                    
                    redwin.style.display = 'block';
                    hideall();

                }
            }
        }
        if (container13c === 1) {
            if (container23c === 1) {
                if (container33c === 1) {
                    
                    redwin.style.display = 'block';
                    hideall();

                }
            }
            if (container22c === 1) {
                if (container31c === 1) {
                    
                    redwin.style.display = 'block';
                    hideall();

                }
            }
        }
        if (container11c === 1) {
            if (container12c === 1) {
                if (container13c === 1) {
                    
                    redwin.style.display = 'block';
                    hideall();

                }
            }
        }
        if (container21c === 1) {
            if (container22c === 1) {
                if (container23c === 1) {
                    
                    redwin.style.display = 'block';
                    hideall();

                }
            }
        }
        if (container31c === 1) {
            if (container32c === 1) {
                if (container33c === 1) {
                    
                    redwin.style.display = 'block';
                    hideall();

                }
            }
        }


        //Check if Green Won



        if (container11c === 2) {
            if (container12c === 2) {
                if (container13c === 2) {
                    
                    hideall();
                    greenwin.style.display = 'block';

                }
            }
            if (container21c === 2) {
                if (container31c === 2) {
                    
                    hideall();
                    greenwin.style.display = 'block';

                }
            }
            if (container22c === 2) {
                if (container33c === 2) {
                    
                    hideall();
                    greenwin.style.display = 'block';

                }
            }
        }
        if (container12c === 2) {
            if (container22c === 2) {
                if (container32c === 2) {
                    
                    hideall();
                    greenwin.style.display = 'block';

                }
            }
        }
        if (container13c === 2) {
            if (container23c === 2) {
                if (container33c === 2) {
                    
                    hideall();
                    greenwin.style.display = 'block';

                }
            }
            if (container22c === 2) {
                if (container31c === 2) {
                    
                    hideall();
                    greenwin.style.display = 'block';

                }
            }
        }
        if (container11c === 2) {
            if (container12c === 2) {
                if (container13c === 2) {
                    
                    hideall();
                    greenwin.style.display = 'block';

                }
            }
        }
        if (container21c === 2) {
            if (container22c === 2) {
                if (container23c === 2) {
                    
                    hideall();
                    greenwin.style.display = 'block';

                }
            }
        }
        if (container31c === 2) {
            if (container32c === 2) {
                if (container33c === 2) {
                    
                    hideall();
                    greenwin.style.display = 'block';

                }
            }
        }
//Checken für unentschieden
        if (container11c > 0) {
            if (container12c > 0) {
                if (container13c > 0) {
                    if (container21c > 0) {
                        if (container22c > 0) {
                            if (container23c > 0) {
                                if (container31c > 0) {
                                    if (container32c > 0) {
                                        if (container33c > 0) {
                                            if (Win === 0) {
                                                //alert('No one Won!');
                                                hideall();
                                                nowin.style.display = 'block';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }





    }
    $(document).ready(function () {
        $('#saveButton').on('click', function () {
            SaveGame_New();
        });
    });
    function SaveGame_New() {
        const Game_ID = generateRandomString();
        var dataToSend = {
            currPlayer: begin,
            container11c: container11c,
            container12c: container12c,
            container13c: container13c,
            container21c: container21c,
            container22c: container22c,
            container23c: container23c,
            container31c: container31c,
            container32c: container32c,
            container33c: container33c,
            Game_ID: Game_ID
        };


        $.ajax({
            url: 'TikTakToSave.php', // URL zur PHP-Datei
            type: 'POST',
            data: dataToSend,
            // success: function (response) {
            //fetch('TikTakToSave.php')
            //   .then(response => {console.log(response)})
            //  .then(data => {
            ////       const gameId = data.Game_ID;
            //       Saved_ID.textContent = String(gameId);

            //})
            // .catch(error => console.error('Fehler:', error));
            //},
            error: function (xhr, status, error) {
                console.error('AJAX-Fehler: ' + status + ', ' + error);
            }
        });


        console.log('Game-ID: ', Game_ID);
        Saved_ID.textContent = String(Game_ID);
        Saved_ID.style.display = 'block';
        Saved.style.display = 'block';
        greentogo.style.display = 'none';
        redtogo.style.display = 'none';
    }





    function Secret() {
        if (click >= 10) {
            window.location.href = "http://localhost:63342/blog/public/Viergewinnt/Viergewinnt.html?_ijt=o2mojkqhfijsshvnqokj2bqjh3&_ij_reload=RELOAD_ON_SAVE";
        } else {
            click += 1;
            if (click > 1) {
                console.log(click);
                console.log("click"); }
        }
    }




    function RainBow() {

        for (let i = 0; i < text.length; i++) {
            const span = document.createElement("span");
            span.textContent = text[i];
            span.textContent = text[i];
            begintext.appendChild(span);
        }

        function updateAnimation() {
            const spans = begintext.getElementsByTagName("span");
            console.log(spans);
            if (RainbowStop === 1) {
                // Entferne die Animation
                for (let i = 0; i < spans.length; i++) {
                    spans[i].classList.remove("animate");
                }
            } else {
                // Füge die Animation hinzu
                for (let i = 0; i < spans.length; i++ ) {
                    spans[i].classList.add("animate");
                }
            }
        }

        updateAnimation();

        setTimeout(() => {
            RainbowStop = 1;
            updateAnimation();
        }, 1000000);
    }

    function generateRandomString(length = 5) {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charactersLength = characters.length;
        let randomString = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charactersLength);
            randomString += characters[randomIndex];
        }

        return randomString;
    }







})

