import zilverRing from "./img/Zilver-ring.jpeg";
import goudKetting from "./img/goud-ketting.webp";
import dollarKetting from "./img/dollar-necklace.jpg";
import Ruby from "./img/Ruby.jpg"

function ChooseImage(nameInput){
    
    let toBeAddedImg;
    switch (nameInput) {
        case ("Slot Ketting"):
            toBeAddedImg = goudKetting
            break;
        case ("Dollar Ketting"):
            toBeAddedImg = dollarKetting
            break;
        case ("Zilver ring"):
            toBeAddedImg = zilverRing
            break;
        default:
            toBeAddedImg = Ruby
            break;
    }
    return toBeAddedImg
}

export default ChooseImage