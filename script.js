function setPage(image){
    document.getElementById("display").src = image;
}


// Service Worker für Offline-Betrieb registrieren
if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("service-worker.js")
    .then(() => {
        console.log("Service Worker erfolgreich registriert");
    })
    .catch(error => {
        console.log("Service Worker Fehler:", error);
    });

}
