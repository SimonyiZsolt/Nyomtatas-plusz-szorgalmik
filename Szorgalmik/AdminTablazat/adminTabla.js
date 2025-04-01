//1 Aktiváló gomb
/*
aktivalo.addEventListener("click", MindenCheck);
deaktivalo.addEventListener("click", MindenUnCheck);
savozasbe.addEventListener("click", SavozasBe);
savozaski.addEventListener("click", SavozasKi);
lightmode.addEventListener("click", LightModeBe);
darkmode.addEventListener("click", DarkModeBe);

function MindenCheck(){
    
    let lista = document.querySelectorAll(".allapot");

    for(let i = 0; i<lista.length; i++){
        console.log(lista[i].checked);
        lista[i].checked = true;
    }
}

function MindenUnCheck(){
    
    let lista = document.querySelectorAll(".allapot");

    for(let i = 0; i<lista.length; i++){
        console.log(lista[i].checked);
        lista[i].checked = false;
    }
}

function SavozasBe(){
    let tablazat = document.querySelector("table");
    tablazat.classList.add("table-striped");
}

function SavozasKi(){
    let tablazat = document.querySelector("table");
    tablazat.classList.remove("table-striped");
}

function LightModeBe(){
    let tablazat = document.querySelector("table");
    tablazat.classList.remove("table-dark");
    tablazat.classList.add("table-light");
}

function DarkModeBe(){
    let tablazat = document.querySelector("table");
    tablazat.classList.remove("table-light");
    tablazat.classList.add("table-dark");
    
}
*/

//Szorgalmi
//1 - Egy gombra rakni az aktiváló-deaktiváló funkciókat

aktivalo.addEventListener("click", aktivalasValt);

function aktivalasValt(){
    if(aktivalo.innerHTML == "Mindenkit aktivál"){
        MindenCheck();
        aktivalo.classList.remove("btn-success");
        aktivalo.classList.add("btn-danger");
        aktivalo.innerHTML = "Mindenkit deaktivál"
    }else{
        MindenUnCheck();
        aktivalo.classList.remove("btn-danger");
        aktivalo.classList.add("btn-success");
        aktivalo.innerHTML = "Mindenkit aktivál"
    }
}

function MindenCheck(){
    
    let lista = document.querySelectorAll(".allapot");

    for(let i = 0; i<lista.length; i++){
        
        lista[i].checked = true;
    }
    gombBekapcsHaVanKijelolt();
}

function MindenUnCheck(){
    
    let lista = document.querySelectorAll(".allapot");

    for(let i = 0; i<lista.length; i++){
        
        lista[i].checked = false;
    }

    gombBekapcsHaVanKijelolt();
}

//1/b kijelölés megfordítása gomb

megfordit.addEventListener("click", kijelolesMegfordit);
addCBListeners();



function kijelolesMegfordit(){
    let lista = document.querySelectorAll(".allapot");

    for(let i = 0; i< lista.length; i++){
        lista[i].checked = !lista[i].checked;
    }
}

function gombBekapcsHaVanKijelolt(){
    let checkboxok = document.querySelectorAll(".allapot");
    let aktivak = 0;

    for(let i = 0; i<checkboxok.length; i++){
        if(checkboxok[i].checked){
            aktivak++;
        }
    }

    if(aktivak > 0 && aktivak < checkboxok.length){
        
        megfordit.classList.remove("d-none");
    }else{
        megfordit.classList.add("d-none");

        if(aktivak==0){
            aktivalo.classList.remove("btn-danger");
            aktivalo.classList.add("btn-success");
            aktivalo.innerHTML = "Mindenkit aktivál"
        }
        else if(aktivak==checkboxok.length){
            aktivalo.classList.remove("btn-success");
            aktivalo.classList.add("btn-danger");
            aktivalo.innerHTML = "Mindenkit deaktivál"
        }


    }


}

function addCBListeners(){
    let checkboxok = document.querySelectorAll(".allapot");
    for(let i = 0; i<checkboxok.length; i++){
        checkboxok[i].addEventListener("change", gombBekapcsHaVanKijelolt);
    }
}

//2 Sávozás ki-be egy gombon

savozasvalt.addEventListener("click", savozasFordit);

function savozasFordit(){
    let tablazat = document.querySelector("table");

    if(tablazat.classList.contains("table-striped")){
        tablazat.classList.remove("table-striped");
        savozasvalt.innerHTML = "Táblázat sávozás bekapcsolása";
        savozasvalt.classList.remove("btn-info");
        savozasvalt.classList.add("btn-primary");
    }else{
        tablazat.classList.add("table-striped");
        savozasvalt.innerHTML = "Táblázat sávozás kikapcsolása";
        savozasvalt.classList.remove("btn-primary");
        savozasvalt.classList.add("btn-info");
    }
}

//3 próbáld meg ki-be kapcsolhatóvá tenni a dark és light módokat.

lightmode.addEventListener("click", lightModeValt);
darkmode.addEventListener("click", darkModeValt);

function lightModeValt(){
    let tablazat = document.querySelector("table");
    if(tablazat.classList.contains("table-light")){
        tablazat.classList.remove("table-light");
        lightmode.innerHTML = "LightMode bekapcsolása";
    }else{
        tablazat.classList.remove("table-dark");
        tablazat.classList.add("table-light");
        lightmode.innerHTML="LightMode kikapcsolása";
        darkmode.innerHTML = "DarkMode bekapcsolása";
    }
}

function darkModeValt(){
    let tablazat = document.querySelector("table");
    if(tablazat.classList.contains("table-dark")){
        tablazat.classList.remove("table-dark");
        darkmode.innerHTML = "DarkMode bekapcsolása";
    }else{
        tablazat.classList.remove("table-light");
        tablazat.classList.add("table-dark");
        lightmode.innerHTML="LightMode bekapcsolása";
        darkmode.innerHTML = "DarkMode kikapcsolása";
    }
}