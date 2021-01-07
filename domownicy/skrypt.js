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


let dodane_sceny = 2;

function sprawdz_ilosc_scen() {
    if (dodane_sceny === 0) {
        document.getElementById("brak_scen").style.display = "block";
    } else {
        document.getElementById("brak_scen").style.display = "none";
    }
}


function deleteDevice(id) {
    if (confirm("Czy chcesz usunąć scenę?")) {
        dodane_sceny--;
        document.getElementById(id).remove();
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

function sprawdz_ilosc_domownikow() {
    if (dodane_sceny === 0) {
        document.getElementById("brak_domowników").style.display = "block";
    } else {
        document.getElementById("brak_domowników").style.display = "none";
    }
}

let numer_domownika = 1;
let domownicy = [2, 3, 4];

function dodajDomownika() {
    var imie = prompt("Podaj nazwę domownika, którego chcesz dodać");
    if (imie == null || imie === "") {
        console.log("Nie podano nazwy domownika")
    } else {
        if (numer_domownika === 4) {
            alert("Nie można dodać więcej domowników")
        } else {
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
}

function usunDomownika(id) {
    if (confirm("Czy chcesz usunąć domownika?")) {
        document.getElementById(id).style.display = "none";
        numer_domownika--;
        id = id.slice(3, 4);
        console.log(id)
        domownicy.push(parseInt(id));
    }
}

window.onload = function () {
    sprawdz_ilosc_scen();
    sprawdz_ilosc_domownikow();
}