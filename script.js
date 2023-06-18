
let imageSrc = document.getElementById('quote');
let button = document.getElementById('btn')
imageSrc.style.backgroundImage = 'url("IMAGES/Mee.JPEG")'

const imageChanger = () =>{
    let randomImg = Math.floor(Math.random() * 20);
    btn.style.color = '#000';

    switch (randomImg) {
        //Love Quote
        case 0:
        imageSrc.style.backgroundImage = 'url("IMAGES/Beebarh.JPEG")';
        break;
        case 1:
        imageSrc.style.backgroundImage = 'url("IMAGES/Tech Sis.jpeg")';
        break;
        case 2:
        imageSrc.style.backgroundImage = 'url("IMAGES/No face.JPG")';
        break;
        case 3:
        imageSrc.style.backgroundImage = 'url("IMAGES/Dev Atom.jpeg")';
        break;
        case 4:
        imageSrc.style.backgroundImage = 'url("IMAGES/Dev-Atom Heemah And Beebarh.jpeg")';
        break;
        case 5:
        imageSrc.style.backgroundImage = 'url("IMAGES/Hand.JPG")';
        break;
        case 6:
        imageSrc.style.backgroundImage = 'url("IMAGES/Muah.JPG")';
        break;
        case 7:
        imageSrc.style.backgroundImage = 'url("IMAGES/Heemah And Beebarh.jpg")';
        break;
        case 8:
        imageSrc.style.backgroundImage = 'url("IMAGES/Hand And Bag.JPG")';
        break;
        case 9:
        imageSrc.style.backgroundImage = 'url("IMAGES/Naheemah And Rahma.jpeg")';
        break;
        case 10:
        imageSrc.style.backgroundImage = 'url("IMAGES/Heemah And Beebarh 2.JPEG")';
        break;
        case 11:
        imageSrc.style.backgroundImage = 'url("IMAGES/Jackie.JPG")';
        break;
        case 12:
        imageSrc.style.backgroundImage = 'url("IMAGES/Smile.JPG")';
        break;
        case 13:
        imageSrc.style.backgroundImage = 'url("IMAGES/Riri.jpg")';
        break;
        case 14:
        imageSrc.style.backgroundImage = 'url("IMAGES/Nahee.jpg")';
        break;
        case 15:
        imageSrc.style.backgroundImage = 'url("IMAGES/Naheemah.jpeg")';
        break;
        case 16:
        imageSrc.style.backgroundImage = 'url("IMAGES/Heemah Bby.jpg")';
        break;
        case 17:
        imageSrc.style.backgroundImage = 'url("IMAGES/Ancestor.jpg")';
        break;
        case 18:
        imageSrc.style.backgroundImage = 'url("IMAGES/Jummah.PNG")';
        break;
        case 19:
        imageSrc.style.backgroundImage = 'url("IMAGES/Amala.jpg")';
        break;
        case 20:
        imageSrc.style.backgroundImage = 'url("IMAGES/babies.JPG")';
        break;
    }
}