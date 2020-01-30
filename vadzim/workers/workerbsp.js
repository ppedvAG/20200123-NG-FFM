var i = 0;

function Counter() {
    i = i + 1;

    //Sendet eine Nachricht zurück an die HTML-Seite

    postMessage(i);
    setTimeout("Counter()", 1000);
}

Counter();