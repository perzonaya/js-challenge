const images = [ "01.gif", "02.gif","03.gif","04.gif","05.gif"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(img/${chosenImage})`;
