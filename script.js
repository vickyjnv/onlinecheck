function hasNetwork(online) {
    const element = document.querySelector(".status");
    // Update the DOM to reflect the current status
    if (online) {
        element.classList.remove("offline");
        element.classList.add("online");
        element.innerText = "Online";
    } else {
        element.classList.remove("online");
        element.classList.add("offline");
        element.innerText = "Offline";
    }
}

// Listen for the page to be finished loading
window.addEventListener("load", () => {
    hasNetwork(navigator.onLine);
});


window.addEventListener("load", () => {
    hasNetwork(navigator.onLine);

    window.addEventListener("online", () => {
        // Set hasNetwork to online when they change to online.
        hasNetwork(true);
    });

    window.addEventListener("offline", () => {
        // Set hasNetwork to offline when they change to offline.
        hasNetwork(false);
    });
});
