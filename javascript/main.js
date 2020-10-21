function changeImage() {
        var BackgroundImg = ["./img/daniel-leone-v7daTKlZzaw-unsplash.jpg", "./img/photo-1526344966-89049886b28d.jpeg", "./img/moraine_lake_landscape_at_banff_national_park_5k-1920x1080.jpg"];
        var i = Math.floor((Math.random() * 3));
        document.getElementById("header").style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
}
window.setInterval(changeImage, 5000);