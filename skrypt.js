function openTab(tabName) {
    document.getElementById(tabName).style.display = "block";
    var p_width = document.getElementById("devices").offsetWidth;
    document.getElementById(tabName).style.width += p_width / 2 + "px";
    var p_height = document.getElementById("devices").offsetHeight;
    document.getElementById(tabName).style.height += p_height / 2 + "px";
    document.getElementById('more_button').style.display = "none";
    document.getElementById('more_button').style.maxWidth = 'none';
}

function closeTab(tabName) {
    document.getElementById(tabName).style.display = "none";
    document.getElementById('more_button').style.display = "block";
}
//-------------------------

var scena1 = {
    type: "recznie",
    name: "Jestem w pracy",
    timeStart: "08:00",
    timeEnd: "16:00",
    days: ["P", "W", "Ś", "C", "Pt"],
    devices: [
        {
            id: "lampka_nocna",
            mode: "off"
        },
        {
            id: "glosnik",
            mode: "off"
        }
    ],
    device: ['oswietlenie', 'glosnik']
};
var scena2 = {
    type: "day_and_hour",
    name: "Impreza",
    timeStart: "20:00",
    timeEnd: "23:00",
    days: ["Pt"],
    devices: [
        {
            id: "oswietlenie",
            mode: "on"
        },
        {
            id: "glosnik",
            mode: "on"
        }
    ],
    device: ['oswietlenie', 'glosnik', 'lampka_nocna']
};

function wzorScenaManually(id, title){
   return `<div class="scena" id="${id}">
        <div id="inside">
            <h2>${title}</h2>
            <div class="icon">
                <i class="far fa-edit" onclick="editScena('${title}')"></i>
                <i class="far fa-trash-alt" onClick="deleteDevice('${id}', '${title}')"></i>
            </div>
            <div class="toggle">
                <label class="switch">
                    <input type="checkbox">
                        <span class="slider round"></span>
                </label>
            </div>
            <div style="clear:both;"></div>
        </div>
    </div>`
}

function wzorScenaAuto(id, title, daysandhours){
   return `<div class="scena" id="${id}">
        <h2>${title}</h2>
        <div class="icon">
            <i class="far fa-edit" onclick="editScena('${title}')"></i>
            <i class="far fa-trash-alt" onClick="deleteDevice('${id}', '${title}')"></i>
        </div>
        <div class="days">
            <h3>${daysandhours}</h3>
        </div>`
}


var sceny = [scena1, scena2];

let dodane_sceny = 2;

function readSessionStorage() {
    if (sessionStorage.getItem('Sceny') === null) {
        console.log("Pusty plik w bazie");
    } else {
        var data = JSON.parse(sessionStorage.getItem('Sceny'));
        console.log("Odczytano dane z bazy");
        sceny = data;
        dodane_sceny = sceny.length;
    }
}

function addToSessionStorage() {
    sessionStorage.setItem('Sceny', JSON.stringify(sceny));
    document.location= 'sceny.html';
}

function updateSceny(){
    let id_number = dodane_sceny;
    console.log("update");
   // console.log(sceny);
    for(let i = 0; i < dodane_sceny; i++){
        //console.log(sceny[i].type);
        if(sceny[i].type === "recznie"){
            let id = "scena" + id_number;
            let title = sceny[i].name;
            document.getElementById("sceny_in").insertAdjacentHTML('afterbegin' ,wzorScenaManually(id, title));
            id_number--;
        }
        if(sceny[i].type === "day_and_hour"){
            let id = "scena" + id_number;
            let title = sceny[i].name;
            let day = sceny[i].days.join(" ");
            let hours = " " + sceny[i].timeStart + " - " + sceny[i].timeEnd;
            document.getElementById("sceny_in").insertAdjacentHTML('afterbegin' ,  wzorScenaAuto(id, title, day + hours));
            id_number--;
        }
    }
}


function sprawdz_ilosc_scen() {
    if (dodane_sceny === 0) {
        document.getElementById("brak_scen").style.display = "block";
    } else {
        document.getElementById("brak_scen").style.display = "none";
    }
}


function deleteDevice(id, title) {
    if (confirm("Czy chcesz usunąć scenę?")) {
        dodane_sceny--;
        let scena = document.getElementById(id);
        for(let i = 0; i < sceny.length; i++){
            if(sceny[i].name === title){
                sceny.splice(i, 1);
            }
        }
        scena.remove();
        sprawdz_ilosc_scen();
    } else {

    }
}

function deleteGroup() {
    var group = prompt("Podaj nazwę grupy do usunięcia");
    if (group == null || group === "") {
        console.log("Nie podano nazwy grupy")
    } else {
        if (confirm("Czy chcesz usunąć grupe?")) {
            console.log("usunięto grupe")
        }
    }
}

let numer_domownika = 1;

function sprawdz_ilosc_domownikow() {
    if (numer_domownika <= 0) {
        document.getElementById("brak_domownikow").style.display = "block";
    } else {
        document.getElementById("brak_domownikow").style.display = "none";
    }
}

let domownicy = [2, 3, 4];

function dodajDomownika() {

    if (numer_domownika === 4) {
        alert("Nie można dodać więcej domowników")
    } else {

    var imie = prompt("Podaj nazwę domownika, którego chcesz dodać");
    if (imie == null || imie === "") {
        console.log("Nie podano nazwy domownika")
    } else {
        // if (numer_domownika === 4) {
        //     alert("Nie można dodać więcej domowników")
        // } else {
            if (imie.length > 11) {
                alert("Nazwa domownika za długa")
            } else {
                console.log("dodano domownika")
                numer_domownika++;
                let n_id = domownicy.shift();
                let id = "dom" + n_id;
                document.getElementById(id).querySelector("figcaption").innerText = imie;
                document.getElementById(id).style.display = "block";
            }
        }

    }
    sprawdz_ilosc_domownikow();
}

function usunDomownika(id) {
    if (confirm("Czy chcesz usunąć domownika?")) {
        document.getElementById(id).style.display = "none";
        numer_domownika--;
        id = id.slice(3, 4);
        domownicy.push(parseInt(id));
    }
    sprawdz_ilosc_domownikow();
}

function editScena(title){
    for(let i = 0; i < sceny.length; i++){
        if(sceny[i].name === title){
            sessionStorage.setItem('Edycja', JSON.stringify(sceny[i]));
        }
    }
    document.location= 'edycjaSceny.html';
}

function updateSelectWithDevicesInSceny(){
    let data;

    if(sessionStorage.getItem('Sceny') == null){
        data = sceny;
        console.log("select pusty");
        //console.log(data);
    }else{
        data = JSON.parse(sessionStorage.getItem('Sceny'));
        console.log("select pełny");
        //console.log(data);
    }
    console.log(data)

    for (let scena in data) {
       console.log(data[scena])
        for(let device of data[scena].device) {

            //id select to id_rzadzenia-select
            let id_select = `${device}-select`
            let x = document.getElementById(id_select);
            let option = document.createElement("option");
            option.text = data[scena].name;
            x.add(option);
        }
    }
}

function animateWorkingScena(){
    let data;
    if(sessionStorage.getItem('Sceny') == null){
        data = sceny;
        console.log("select pusty");
        //console.log(data);
    }else{
        data = JSON.parse(sessionStorage.getItem('Sceny'));
        console.log("select pełny");
        //console.log(data);
    }

    let array = [];

    for (let scena in data) {
        if(data[scena].type === "day_and_hour"){
            array.push(data[scena]);
        }
    }

    let id = "";

    let h2 = document.getElementsByTagName("h2");
    for(let i = 0; i < h2.length; i++) {
        if(h2[i].innerText === array[length].name){
            id = h2[i].parentNode.id;
        }
    }
    id = `#${id}`
    console.log(id)
    setInterval(function(){$(id).toggleClass('scena-dziala')}, 30000);
}

window.onload = function () {
    console.log("Refreshing data....");
    readSessionStorage();
    updateSceny();
    sprawdz_ilosc_scen();
    updateSelectWithDevicesInSceny();
    animateWorkingScena();
}