/*https://www.w3schools.com/jsref/prop_win_localstorage.asp*/
/*https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage*/
function initialisiere_speicher() {
    localStorage.setItem("pers1", "0");
    localStorage.setItem("pers2", "0");
    localStorage.setItem("pers3", "0");
    localStorage.setItem("pers4", "0");
    localStorage.setItem("pers5", "0");
    localStorage.setItem("pers5_2", "0");
    localStorage.setItem("glassplitter", "0");
    localStorage.setItem("serviette", "0");
    localStorage.setItem("siegelwachsreste", "0");
    localStorage.setItem("leder_handschuh", "0");
    localStorage.setItem("gift", "0");
    localStorage.setItem("waggon1", "0");
    localStorage.setItem("waggon2", "0");
    localStorage.setItem("waggon3", "0");
    localStorage.setItem("waggon4", "0");
    localStorage.setItem("waggon5", "0");
    localStorage.setItem("item1check", "0");
    localStorage.setItem("item2check", "0");
    localStorage.setItem("item3check", "0");
    localStorage.setItem("item4check", "0");
    localStorage.setItem("item5check", "0");
    localStorage.setItem("tresorcheck", "0");
    localStorage.setItem("tresorcode", "9460");
    localStorage.setItem("itemCount", "0");
    var d = new Date();
    var mls = d.getTime();
    localStorage.setItem("spielbeginn", mls.toString());
    var array = new Array();
    localStorage.setItem("inventar", JSON.stringify(array));
}