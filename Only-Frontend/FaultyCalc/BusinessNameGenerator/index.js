function adjectives(){
    let a = "Crazy"
    let b = "Amazing"
    let c = "Fire"

    let randomNum = Math.floor(Math.random()*3)
    if(randomNum == 0){
        return a;
    }
    if(randomNum == 1){
        return b;
    }
    if(randomNum == 2){
        return c;
    }
}
function Shopname(){
    let a = "Engine"
    let b = "Foods"
    let c = "Garments"

    let randomNum = Math.floor(Math.random()*3)
    if(randomNum == 0){
        return a;
    }
    if(randomNum == 1){
        return b;
    }
    if(randomNum == 2){
        return c;
    }
}
function Another(){
    let a = "Bors"
    let b = "Limited"
    let c = "Hub"

    let randomNum = Math.floor(Math.random()*3)
    if(randomNum == 0){
        return a;
    }
    if(randomNum == 1){
        return b;
    }
    if(randomNum == 2){
        return c;
    }
}
const adj = adjectives();
const shop = Shopname();
const last = Another();

console.group(`${adj} ${shop} ${last}`)


