function changeImage() {
        var BackgroundImg = ["./img/adam-mescher-47Hw5d4AxKM-unsplash.jpg", "./img/eberhard-grossgasteiger-cs0sK0gzqCU-unsplash.jpg", "./img/elvis-bekmanis-g9qwoPiS0nY-unsplash.jpg", "./img/jonatan-pie-h8nxGssjQXs-unsplash.jpg", "./img/elvis-bekmanis-g9qwoPiS0nY-unsplash.jpg", "./img/joshua-earle-C6duwascOEA-unsplash.jpg"];
        var i = Math.floor((Math.random() * 5));
        document.getElementById("header").style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
}
window.setInterval(changeImage, 5000);