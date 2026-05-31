//##########################################
// alle spezifischen Quellen wurden bei ihren 
// korrespondierenden Funktionen angegeben, für alles andere wurden
// w3schools.com, https://developer.mozilla.org/en-US/ und https://flaviocopes.com/ genutzt 
//##########################################
function zurueck()
{
    window.location.href="index.html";
}

function zur_namenseingabe()
{
    window.location.href="namenseingabe.html";
}

function zur_Karte()
{
    window.location.href="Karte.html";
}

function toEinleitung()
{
    window.location.href="Einleitung.html";
}

function Waggon_eins()
{
    window.location.href="Waggon_eins.html";
}

function Waggon_zwei()
{
    window.location.href="Waggon_zwei.html";
}

function Waggon_drei() {
    window.location.href="Waggon_drei.html";
}

function Waggon_vier() {
    window.location.href="Waggon_vier.html";
}

function Waggon_fuenf() {
    window.location.href="Waggon_fuenf.html";
}

function zum_Ende() {
    window.location.href="Endstation.html";
}

function kommendes_update()
{
    window.location.href="kommende_updates.html";
}

function zum_impressum() {
    window.location.href="Impressum.html";
}
//##########################################
// Funktionen für den Hauptspielverlauf
//##########################################
// Schalterverzweigung, um den Ort festzulegen
function Entscheide_Ort(id) {
    switch(id) {
        case "nyc":
            localStorage.setItem("loc", "New York");
            this.zur_namenseingabe();
            break;
    }
}
// Schalterverzweigung, um den Ortnamen festzulegen
function wohin()
{
    var loc = localStorage.loc;
    switch(loc) {
        case "New York":
            document.getElementById("wohin").innerHTML = "- New York -";
            break;
    }
}
// Schalterverzweigung, um die Ortbeschreibung festzulegen
function ort_beschreibung() {
    var loc = localStorage.loc;
    switch(loc) {
        case "New York":
            document.getElementById("Ortsbeschreibung_id").innerHTML = "Guten Tag. Wie ich hörte möchtest du eine Reise antreten, dürfte ich deinen Namen erfahren?";
            break;
    }
}
// Schalterverzweigung, um die Einleitunggeschichte festzulegen
function Was_bisher_geschah() {
    var loc = localStorage.loc;
    var nam = localStorage.name;
    switch(loc) {
        case "New York":
            document.getElementById("StoryBeschreibung").innerHTML = "Endlich… Endlich ist der mysteriöse Mordfall in New York gelöst und du kannst dich auf den Heimweg machen. Während du den Zug betrittst, denkst du sehnsüchtig an das kühle Bier in deinem Kühlschrank und das gute Buch auf deinem Nachttisch – ein Thriller, denn ein Detektiv kann auch in seiner Freizeit nicht aus seiner Haut. Doch was das wirklich bedeutet, sollst du während der Fahrt noch zu spüren bekommen...";
            localStorage.setItem("storyline", "1"); // evtl ändern
            break;
    }
}
// Schalteranweisungen zum weiteren Storyverlauf
function Story_fortsetzen() {
    var storyln = localStorage.storyline;
    var nam = localStorage.name;
    switch(storyln) {
        case "1":
            document.getElementById("Story_container").innerHTML = "Während du durch den Zug schlenderst, entdeckst du die offene Tür eines Schlafwaggons. Mit dem Willen diese zu schließen, gehst du auf das Abteil zu. Ein Mann liegt auf dem Bett, aber etwas ist merkwürdig: seine Augen sind geöffnet und gerötet; weißer Schaum tritt aus seinem Mund aus – ER IST TOT. Erschrocken trittst du einen großen Schritt zurück und stolperst über etwas. Du drehst dich um und erblickst eine aufgelöste Frau mit Tränen in den Augen in der Zimmerecke kauern.";
            break;
    }
}

function Story_fortsetzenTwo() {
    var storyln = localStorage.storyline;
    var nam = localStorage.name;
    switch(storyln) {
        case "1":
            document.getElementById("Story_containerZwei").innerHTML = "Nachdem du dem Zugpersonal die Leiche gemeldet hast, brauchst du eine kurze Pause. Du setzt dich in den Aufenthaltswaggon und versuchst auf andere Gedanken zu kommen, als du ein Gespräch mitbekommst. Du kannst es nicht lassen und lauschst dem Gespräch. Zwei Männer unterhalten sich über den Leichenfund. Einer der beiden Männer erzählt, er habe das Opfer am vorigen Abend mit einer Frau an der Bar sitzen sehen. ";
            break;
    }
}

function storyDrei() {
    var storyln = localStorage.storyline;
    var nam = localStorage.name;
    localStorage.setItem("waggon3", "1");
    switch(storyln) {
        case "1":
            document.getElementById("Story_drei").innerHTML = "Du betrittst den Barwaggon und entdeckst die aufgelöste Frau aus dem Schlafabteil hinter dem Tresen. Es scheint ihr wieder besser zu gehen. Während du dir einen Drink bestellst, sprichst du sie erneut auf die Situation an. Sie reagiert auf deine Bestellung und ignoriert deine Fragen. Nervös bereitet sie dir deinen Drink zu. Nachdem sie dich bedient hat, wirft sie dir einen ängstlichen Blick zu und behauptet, das Opfer nicht gekannt zu haben und wendet dir den Rücken zu. Das Gespräch ist beendet. Nachdem du dein Glas geleert hast, gehst du zum Toilettenwaggon, um dich frisch zu machen.";
            break;
    }
}

function storyVier() {
    var storyln = localStorage.storyline;
    var nam = localStorage.name;
    localStorage.setItem("waggon4", "1");
    switch(storyln) {
        case "1":
            document.getElementById("Story_vier").innerHTML = "Während du deine Hände wäschst, schaust du in den Spiegel und siehst den wütenden Mann aus dem Aufenthaltswaggon hinter dir. Du möchtest dich erneut entschuldigen, aber er fällt dir ins Wort und erzählt, dass er die Barfrau und das Opfer streiten sah. Ohne auf eine Reaktion deinerseits zu warten, verschwindet er wieder und lässt dich verblüfft zurück. ";
            break;
    }
}

function storyFuenf() {
    var storyln = localStorage.storyline;
    var nam = localStorage.name;
    localStorage.setItem("waggon5", "1");
    switch(storyln) {
        case "1":
            document.getElementById("Story_fuenf").innerHTML = "Irritiert betrittst du erneut den Barwaggon. Du nimmst Platz und sammelst deine Gedanken. Während du die vorhandenen Informationen sortierst, schweift dein Blick in Richtung Bar, wo du eine merkwürdige Szene beobachten kannst: Die Barfrau schaut unsicher von links nach rechts, greift dann in ihre Hosentasche und zieht etwas heraus, was sie tief im Mülleimer entsorgt.";
            break;
    }
}
function endstation() {
    var storyln = localStorage.storyline;
    switch(storyln) {
        case "1":
            document.getElementById("endstation_story").innerHTML = "Eine Durchsage ertönt: „Sehr verehrte Fahrgäste, wir erreichen gleich die nächste Station. Aufgrund eines Zwischenfalls bleiben die Türen verschlossen bis die Polizei alle Spuren gesichert und Zeugen befragt hat. Wir bitten um Ihr Verständnis und noch eine gute Fahrt!“";
            break;
    }
}
//##########################################
// Funktionen um Eingaben auszulesen und if-conditions
//##########################################
function button_status() {
    var waggon1 = localStorage.waggon1;
    var waggon2 = localStorage.waggon2;
    var waggon3 = localStorage.waggon3;
    var waggon4 = localStorage.waggon4;
    var waggon5 = localStorage.waggon5;
    if (waggon1 == "0") {
        document.getElementById("notizWaggonEins").disabled = true;
    } else {    
        document.getElementById("notizWaggonEins").disabled = false;
    }
    if (waggon2 == "0") {
        document.getElementById("notizWaggonZwei").disabled = true;
    } else {    
        document.getElementById("notizWaggonZwei").disabled = false;
    } 
    if (waggon3 == "0") {
        document.getElementById("notizWaggonDrei").disabled = true;
    } else {    
        document.getElementById("notizWaggonDrei").disabled = false;
    }
    if (waggon4 == "0") {
        document.getElementById("notizWaggonVier").disabled = true;
    } else {    
        document.getElementById("notizWaggonVier").disabled = false;
    } 
    if (waggon5 == "0") {
        document.getElementById("notizWaggonFuenf").disabled = true;
    } else {    
        document.getElementById("notizWaggonFuenf").disabled = false;
    }
}

function Namen_abfangen() {
    localStorage.setItem("name", document.getElementById("namenseingabe").value);
    this.toEinleitung();
}
/*fragefenster Waggon 1*/
function gespraechPersonEins(param_div_id) {
    var person = localStorage.pers1;
    if (person == "0") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById(param_div_id).innerHTML;
        document.getElementById("Story_container").innerHTML = " Verwirrt sprichst du die Frau an und fragst, was passiert ist. Stotternd versucht sie, die Situation zu erklären, bringt aber nur wenige Worte hervor, deren Zusammenhang du nicht verstehst. ";
    } else if (person == "1") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById("askWagOne").innerHTML;
        document.getElementById("Story_container").innerHTML = "Du hilfst der Frau auf und bemerkst anhand ihrer Kleidung, dass sie an der Bar in diesem Zug arbeitet. Um Hilfe zu holen, begleitest du die Frau aus dem Abteil und triffst auf einen Schaffner, der sich um sie kümmert. Du gehst zurück ins Abteil. Hier steht ein Safe im Zimmer mit einem vierstelligen Code. Vielleicht findest du in den Wagons Hinweise, um ihn zu öffnen und den Fall zu lösen. Die gefundenen Hinweise sind in deinem Notizblock gesichert.";
    }
}

function askPersOne(param_div_id) {
    var person = localStorage.pers1;
    if (person == "0") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById(param_div_id).innerHTML;
        document.getElementById("Story_container").innerHTML = "Du hilfst der Frau auf und bemerkst anhand ihrer Kleidung, dass sie an der Bar in diesem Zug arbeitet. Um Hilfe zu holen, begleitest du die Frau aus dem Abteil und triffst auf einen Schaffner, der sich um sie kümmert. Du gehst zurück ins Abteil. Hier steht ein Safe im Zimmer mit einem vierstelligen Code. Vielleicht findest du in den Wagons Hinweise, um ihn zu öffnen und den Fall zu lösen. Die gefundenen Hinweise sind in deinem Notizblock gesichert.";
        localStorage.setItem("pers1", "1");
    }
}

function lade_initialContainer() {
    var person = localStorage.pers1;
    localStorage.setItem("waggon1", "1");
    if (person == "1") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById("askWagOne").innerHTML;
        document.getElementById("Story_container").innerHTML = "Du hilfst der Frau auf und bemerkst anhand ihrer Kleidung, dass sie an der Bar in diesem Zug arbeitet. Um Hilfe zu holen, begleitest du die Frau aus dem Abteil und triffst auf einen Schaffner, der sich um sie kümmert. Du gehst zurück ins Abteil.";
    }
}

/*items Waggon 1*/
function lade_glas() {
    var glas = localStorage.glassplitter;
    if (glas == "0") {
        document.getElementById("glas").style.display = "block";
    } else if (glas == "1") {
        document.getElementById("glas").style.display = "none";
    }
}

function Glas_aufheben() {
    var glas = localStorage.glassplitter;
    var counter = parseInt(localStorage.itemCount);
    if (glas == "0") {
        counter += 1;
        counter.toString();
        localStorage.setItem("itemCount", counter);
        localStorage.setItem("glassplitter", "1");
        document.getElementById("glas").style.display = "none";
    }
}
/*fragefenster Waggon 2*/
function gespraechPersonIdTwo(param_div_id) {
    var person = localStorage.pers2;
    if (person == "0") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById(param_div_id).innerHTML;
        document.getElementById("Story_containerZwei").innerHTML = "Du stehst auf und gesellst dich zu den beiden Männern. Das Gespräch stockt, sie schauen dich fragend an. Vorsichtig versuchst du zu erklären, dass du ihr Gespräch mitbekommen hast und fragst, mit welcher Frau das Opfer gestern gesehen wurde. Der Mann, der die Situation am gestrigen Abend beobachten konnte springt auf und empört sich lauthals darüber, dass du gelauscht hast. Wütend verlässt er den Aufenthaltswaggon. Eingeschüchtert entschuldigst du dich bei dem Hinterbliebenen – der offensichtlich ebenfalls verwundert über dieses Verhalten scheint – und setzt dich wieder an deinen Tisch. Etwas Zeit vergeht. Als nun auch der zweite Mann den Waggon verlässt, ergreifst du die Chance und begibst dich wieder an den Tisch, an dem zuvor noch das Gespräch zwischen den beiden Männern stattgefunden hat. Vielleicht findest du etwas nützliches.";
        localStorage.setItem("pers2", "1");
    } else if (person == "1") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById("askWagTwo").innerHTML;
        document.getElementById("Story_containerZwei").innerHTML = "Du stehst auf und gesellst dich zu den beiden Männern. Das Gespräch stockt, sie schauen dich fragend an. Vorsichtig versuchst du zu erklären, dass du ihr Gespräch mitbekommen hast und fragst, mit welcher Frau das Opfer gestern gesehen wurde. Der Mann, der die Situation am gestrigen Abend beobachten konnte springt auf und empört sich lauthals darüber, dass du gelauscht hast. Wütend verlässt er den Aufenthaltswaggon. Eingeschüchtert entschuldigst du dich bei dem Hinterbliebenen – der offensichtlich ebenfalls verwundert über dieses Verhalten scheint – und setzt dich wieder an deinen Tisch. Etwas Zeit vergeht. Als nun auch der zweite Mann den Waggon verlässt, ergreifst du die Chance und begibst dich wieder an den Tisch, an dem zuvor noch das Gespräch zwischen den beiden Männern stattgefunden hat. Vielleicht findest du etwas nützliches.";
    }
}

function lade_story_zwei() {
    var person = localStorage.pers2;
    localStorage.setItem("waggon2", "1");
    if (person == "1") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById("askWagTwo").innerHTML;
        document.getElementById("Story_containerZwei").innerHTML = "Du stehst auf und gesellst dich zu den beiden Männern. Das Gespräch stockt, sie schauen dich fragend an. Vorsichtig versuchst du zu erklären, dass du ihr Gespräch mitbekommen hast und fragst, mit welcher Frau das Opfer gestern gesehen wurde. Der Mann, der die Situation am gestrigen Abend beobachten konnte springt auf und empört sich lauthals darüber, dass du gelauscht hast. Wütend verlässt er den Aufenthaltswaggon. Eingeschüchtert entschuldigst du dich bei dem Hinterbliebenen – der offensichtlich ebenfalls verwundert über dieses Verhalten scheint – und setzt dich wieder an deinen Tisch. Etwas Zeit vergeht. Als nun auch der zweite Mann den Waggon verlässt, ergreifst du die Chance und begibst dich wieder an den Tisch, an dem zuvor noch das Gespräch zwischen den beiden Männern stattgefunden hat. Vielleicht findest du etwas nützliches.";
    }
}
/*items waggon 2*/
function lade_serviette() {
    var gegenstand_serviette = localStorage.serviette;
    if (gegenstand_serviette == "0") {
        document.getElementById("serviette").style.display = "block";
    } else if (gegenstand_serviette == "1") {
        document.getElementById("serviette").style.display = "none";
    }
}

function serviette_aufheben() {
    var gegenstand_serviette = localStorage.serviette;
    var counter = parseInt(localStorage.itemCount);
    if (gegenstand_serviette == "0") {
        counter += 1;
        counter.toString();
        localStorage.setItem("itemCount", counter);
        localStorage.setItem("serviette", "1");
        document.getElementById("serviette").style.display = "none";
    }
}
/*items Waggon 4*/
function lade_siegel() {
    var siegelwachs = localStorage.siegelwachsreste;
    if (siegelwachs == "0") {
        document.getElementById("siegel").style.display = "block";
    } else if (siegelwachs == "1") {
        document.getElementById("siegel").style.display = "none";
    }
}

function siegel_aufheben() {
    var siegelwachs = localStorage.siegelwachsreste;
    var counter = parseInt(localStorage.itemCount);
    if (siegelwachs == "0") {
        counter += 1;
        counter.toString();
        localStorage.setItem("itemCount", counter);
        localStorage.setItem("siegelwachsreste", "1");
        document.getElementById("siegel").style.display = "none";
    }
}

function lade_handschuh() {
    var lederhandschuh = localStorage.leder_handschuh;
    if (lederhandschuh == "0") {
        document.getElementById("handschuh").style.display = "block";
    } else if (lederhandschuh == "1") {
        document.getElementById("handschuh").style.display = "none";
    }
}

function handschuh_aufheben() {
    var lederhandschuh = localStorage.leder_handschuh;
    var counter = parseInt(localStorage.itemCount);
    if (lederhandschuh == "0") {
        counter += 1;
        counter.toString();
        localStorage.setItem("itemCount", counter);
        localStorage.setItem("leder_handschuh", "1");
        document.getElementById("handschuh").style.display = "none";
    }
}
/*Fragefenster Waggon 5*/
function auswahl1_waggon_fuenf(param_div_id) {
    var person = localStorage.pers5_2;
    var counter = parseInt(localStorage.itemCount);
    if (person == "0") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById(param_div_id).innerHTML;
        document.getElementById("Story_fuenf").innerHTML = "Als die Barfrau nach einiger Zeit hinter einer Tür verschwindet, ergreifst du deine Chance, gehst schnell zum Mülleimer, greifst hinein und findest zwischen Servietten und Strohhalmen einen harten Gegenstand am Boden des Mülleimers. Du steckst ihn schnell in deine Tasche und setzt dich in letzter Sekunde wieder an deinen Platz bevor die Barfrau zurückkommt. Du holst den Gegenstand aus deiner Tasche und erkennst ein kleines Gefäß aus Glas mit einem Totenkopfbild und der Aufschrift „KCN“, Zyankali – die Barfrau ist die Mörderin.";
        localStorage.setItem("pers5_2", "1");      
        localStorage.setItem("gift", "1");
        counter += 1;
        counter.toString();
        localStorage.setItem("itemCount", counter);
    } else if (person == "1") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById("fuenfauswahl1").innerHTML;
        document.getElementById("Story_fuenf").innerHTML = "Als die Barfrau nach einiger Zeit hinter einer Tür verschwindet, ergreifst du deine Chance, gehst schnell zum Mülleimer, greifst hinein und findest zwischen Servietten und Strohhalmen einen harten Gegenstand am Boden des Mülleimers. Du steckst ihn schnell in deine Tasche und setzt dich in letzter Sekunde wieder an deinen Platz bevor die Barfrau zurückkommt. Du holst den Gegenstand aus deiner Tasche und erkennst ein kleines Gefäß aus Glas mit einem Totenkopfbild und der Aufschrift „KCN“, Zyankali – die Barfrau ist die Mörderin.";
        localStorage.setItem("gift", "1");  
    }
}

function auswahl2_waggon_fuenf(param_div_id) {
    var person = localStorage.pers5;
    if (person == "0") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById(param_div_id).innerHTML;
        document.getElementById("Story_fuenf").innerHTML = "Du gehst geradewegs auf den Mülleimer hinter der Bar zu und möchtest gerade hineingreifen als sich vor dir der Manager aufbaut und dir deutlich zu verstehen gibt, dass du hinter der Bar nichts verloren hast. Aus dem Augenwinkel kannst du erkennen, wie die Frau in den Mülleimer greift, den Gegenstand herausholt und hinter einer Tür verschwindet.";
        localStorage.setItem("pers5", "1");
        localStorage.setItem("gift", "-1");
    } else if (person == "1") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById("fuenfauswahl2").innerHTML;
        document.getElementById("Story_fuenf").innerHTML = "Du gehst geradewegs auf den Mülleimer hinter der Bar zu und möchtest gerade hineingreifen als sich vor dir der Manager aufbaut und dir deutlich zu verstehen gibt, dass du hinter der Bar nichts verloren hast. Aus dem Augenwinkel kannst du erkennen, wie die Frau in den Mülleimer greift, den Gegenstand herausholt und hinter einer Tür verschwindet.";
        localStorage.setItem("gift", "-1");
    }
}

function lade_story_fuenf() {
    var person = localStorage.pers5;
    var person2 = localStorage.pers5_2;
    if (person == "1" && person2 == "0") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById("fuenfauswahl1").innerHTML;
        document.getElementById("Story_fuenf").innerHTML = "Du gehst geradewegs auf den Mülleimer hinter der Bar zu und möchtest gerade hineingreifen als sich vor dir der Manager aufbaut und dir deutlich zu verstehen gibt, dass du hinter der Bar nichts verloren hast. Aus dem Augenwinkel kannst du erkennen, wie die Frau in den Mülleimer greift, den Gegenstand herausholt und hinter einer Tür verschwindet.";
    } else if (person2 == "1" && person == "0") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById("fuenfauswahl1").innerHTML;
        document.getElementById("Story_fuenf").innerHTML = "Als die Barfrau nach einiger Zeit hinter einer Tür verschwindet, ergreifst du deine Chance, gehst schnell zum Mülleimer, greifst hinein und findest zwischen Servietten und Strohhalmen einen harten Gegenstand am Boden des Mülleimers. Du steckst ihn schnell in deine Tasche und setzt dich in letzter Sekunde wieder an deinen Platz bevor die Barfrau zurückkommt. Du holst den Gegenstand aus deiner Tasche und erkennst ein kleines Gefäß aus Glas mit einem Totenkopfbild und der Aufschrift „KCN“, Zyankali – die Barfrau ist die Mörderin.";
    }
}
/*endstation funktionen*/
function check_ende(param_div_id) {
    var d = new Date();
    var mls = d.getTime();
    localStorage.setItem("spielende", mls.toString());
    var gift = localStorage.gift;
    if (gift == "-1") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById(param_div_id).innerHTML;
        document.getElementById("endstation_story").innerHTML = "Als die Polizei den Zug betritt erzählst du von deinen Entdeckungen. Die Polizisten fragen nach Beweisen für deine Behauptungen. Du zeigst deine gefundenen Gegenstände, leider ist keine davon ein Beweismittel, um den Täter zu überführen. Du hast den Fall nicht gelöst.";
    } else if (gift == "1") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById(param_div_id).innerHTML;
        document.getElementById("endstation_story").innerHTML = "Nachdem die Polizei den Zug betreten hat, erzählst du von deinen Entdeckungen. Die Polizisten fragen nach Beweisen für deine Behauptungen. Du zeigst deine gefundenen Gegenstände. Als du die Ampulle mit dem Totenkopf herausholst und die Situation erklärst, werden sie hellhörig. Kurze Zeit später wird die Barfrau festgenommen. Unter Tränen gesteht sie, den Mann vergiftet zu haben. Lange Zeit hätten beide ein Verhältnis gehabt, doch als sie ihn zufällig im Zug traf und feststellte, dass er einen Ehering trug, sei ihr bewusst geworden, dass er sie die ganze Zeit nur ausnutzte. Du hast den Fall gelöst";
    }
}
/*Statistik_auswerten*/
/*https://stackoverflow.com/questions/19700283/how-to-convert-time-in-milliseconds-to-hours-min-sec-format-in-javascript*/
function Statistik(param_div_id) {
    var beginn = parseInt(localStorage.spielbeginn); /*aus den Zeichenketten Zahlen extrahieren*/
    var ende = parseInt(localStorage.spielende);
    var seconds = Math.floor(((ende - beginn) / 1000) % 60); /*berechnungen sec,min,stunden*/
    var minutes = Math.floor(((ende - beginn) / (1000 * 60)) % 60);
    var hours = Math.floor(((ende - beginn) / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes; /* <10 ? 0 : ergebnis*/
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    var spielzeit = hours + ":" + minutes + ":" + seconds;
    var itemanzahl = localStorage.itemCount;
    var tresorcheck = localStorage.tresorcheck;
    var gift = localStorage.gift;
    if (gift == "-1") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById(param_div_id).innerHTML;
        document.getElementById("endstation_story").innerHTML = "vergangene Spielzeit:" + spielzeit + ".<br/>gefundene Gegenstände: " + itemanzahl + " / 5 .<br/>geöffnete Tresore: " + tresorcheck + " / 1 .<br/>Schade, dieses mal hat es nicht geklappt, aber dafür beim nächsten Fall bestimmt.";
    } else if (gift == "1") {
        document.getElementById("fragecontainer").innerHTML = document.getElementById(param_div_id).innerHTML;
        document.getElementById("endstation_story").innerHTML = "vergangene Spielzeit:" + spielzeit + ".<br/>gefundene Gegenstände: " + itemanzahl + " / 5.<br/>geöffnete Tresore: " + tresorcheck + " / 1 .<br/>Herzlichen Glückwunsch zur Aufklärung des Falls.";
    }
}
/*funktionen um Schaltflächen zu de-/aktivieren*/
function notizbuch_auf_zu() {
    var notiz = document.getElementById("notizbuch");
    var fragezeichen = document.getElementById("fragecontainer");
    if (notiz.style.display === "none") {
        notiz.style.display = "block";
        fragezeichen.style.display = "none"
    } else {
        notiz.style.display = "none";
        fragezeichen.style.display = "flex"
    }
}

function schliesse_notizbuch() {
    var notiz = document.getElementById("notizbuch");
    var fragezeichen = document.getElementById("fragecontainer");
    notiz.style.display = "none";
    fragezeichen.style.display = "flex"
}

function fragefenster_schliessen() {
    var fragefenster = document.getElementById("fragecontainer");
    fragefenster.style.display = "none";
    document.getElementById("fragefenster_oeffner").style.display = "block";
}

function oeffne_fragefenster() {
    var fragefenster = document.getElementById("fragecontainer");
    fragefenster.style.display = "flex";
    document.getElementById("fragefenster_oeffner").style.display = "none";
}

/*https://stackoverflow.com/questions/64452469/how-to-remove-duplicate-childnode-elements-within-a-parent-in-javascript*/
function duplikate_entfernen() {
    var childs = document.querySelectorAll(".Eintrag")
    var tmpTexts = [];
    for (const c of childs) {
        if (tmpTexts.includes(c.innerText)) continue
        tmpTexts.push(c.innerText)
        c.parentNode.removeChild(c)
    }
}
/*https://www.w3schools.com/jsref/met_document_createelement.asp*/
function zeige_inventar() {
    var notizinventar =  localStorage.getItem('inventar');
    var parsed = JSON.parse(notizinventar);
    for (var x = 0; x < 5; x++) {
        var div = document.createElement("div");
        div.className = "Eintrag";
        var p = document.createElement("p");
        p.innerHTML = parsed[x].name;
        var table = document.createElement('table');
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var img = document.createElement("img");
        var td2 = document.createElement("td");
        var p2 = document.createElement("p");
        td1.appendChild(img);
        tr.appendChild(td1);
        td2.appendChild(p2);
        tr.appendChild(td2);
        img.src = parsed[x].image;
        p2.innerHTML = parsed[x].desc;
        table.appendChild(tr);
        div.appendChild(p);
        div.appendChild(table);
        document.getElementById("inventarliste").appendChild(div);
    }
}

function gefundene_items() {
    var gefunden = localStorage.itemCount;
    var items = document.getElementById("gefundene_items");
    items.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + gefunden + " / 5";
}

function geoeffnete_tresore() {
    var tresor = localStorage.tresorcheck;
    var items = document.getElementById("geoeffnet");
    items.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + tresor + " / 1";
}

/*check_inventar*/
/*parse: https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage*/
/*https://www.geeksforgeeks.org/how-to-push-an-array-into-the-object-in-javascript/#:~:text=In%20order%20to%20push%20an%20array%20into%20the,This%20method%20changes%20the%20length%20of%20the%20array.*/
function check_inventar() {
    var notizinventar =  localStorage.getItem('inventar');
    var parsed = JSON.parse(notizinventar);
    var glassplitter = localStorage.glassplitter;
    var serviette = localStorage.serviette;
    var siegelwachsreste = localStorage.siegelwachsreste;
    var leder_handschuh = localStorage.leder_handschuh;
    var gift = localStorage.gift;
    if (glassplitter == "1" && localStorage.item1check == "0") {
        var InventarObject = {
            "name":"Glassplitter",
            "desc":"ein Glassplitter aus Waggon 1 mit einer 9 drauf.",
            "image": 'assets/glas.png'
        }
        parsed.push(InventarObject);
        localStorage.setItem("item1check", "1");
        localStorage.setItem("inventar", JSON.stringify(parsed));
    }
    if (serviette == "1" && localStorage.item2check == "0") {
        var InventarObject = {
            "name":"Serviette",
            "desc":"Eine Serviette aus Waggon 2 auf der eine 4 steht.",
            "image": 'assets/serviette.png'
        }
        parsed.push(InventarObject);
        localStorage.setItem("item2check", "1");
        localStorage.setItem("inventar", JSON.stringify(parsed));
    }
    if (siegelwachsreste == "1" && localStorage.item3check == "0") {
        var InventarObject = {
            "name":"Siegelwachsreste",
            "desc":"Siegelwachs aus Waggon 4 zum versiegeln von Briefen und fläschchen, mit einer 6 gekennzeichnet.",
            "image": 'assets/siegelwachs.png'
        }
        parsed.push(InventarObject);
        localStorage.setItem("item3check", "1");
        localStorage.setItem("inventar", JSON.stringify(parsed));
    }
    if (leder_handschuh == "1" && localStorage.item4check == "0") {
        var InventarObject = {
            "name":"Lederhandschuh",
            "desc":"ein Lederhandschuh aus dem Tresor im Schlafwaggon.",
            "image": 'assets/leder_handschuh_small.png' 
        }
        parsed.push(InventarObject);
        localStorage.setItem("item4check", "1");
        localStorage.setItem("inventar", JSON.stringify(parsed));
    }
    if (gift == "1" && localStorage.item5check == "0") {
        var InventarObject = {
            "name":"Zyankali",
            "desc":"Das fläschchen Zyankali, aus dem Waggon 5, vorne steht eine 0 drauf",
            "image": 'assets/ZKN.png' 
        }
        parsed.push(InventarObject);
        localStorage.setItem("item5check", "1");
        localStorage.setItem("inventar", JSON.stringify(parsed));
    }
}

function oeffne_tresor() {
    var state_tresor = localStorage.tresorcheck;
    if (state_tresor == "0") {
        var tresor = document.getElementById("tresor_container");
        tresor.style.display = "flex";
    } else {
        document.getElementById("offener_tresor").style.display = "block";
        document.getElementById("tresor_container").style.display = "none";
    }
}

function tresor_container_schliessen() {
    var tresor = document.getElementById("tresor_container");
    tresor.style.display = "none";
}

function tresor_offen() {
    var kombination = localStorage.tresorcode;
    var eingabe = document.getElementById("tresorfeld").value;
    console.log(kombination);
    console.log(eingabe);
    if (kombination == eingabe) {
        localStorage.setItem("tresorcheck", "1");
        document.getElementById("offener_tresor").style.display = "block";
        document.getElementById("tresor_container").style.display = "none";
    } else {
        document.getElementById("tresor_falsch").innerHTML = "Die Kombination scheint nicht zu stimmen, suche weitere Hinweise oder versuche eine andere Kombination."
    }
}

function tresor_offen_zu() {
    var tresor = document.getElementById("offener_tresor");
    tresor.style.display = "none";
}

function Hauptmenue() {
    localStorage.clear();
    window.location.href="Index.html"
}