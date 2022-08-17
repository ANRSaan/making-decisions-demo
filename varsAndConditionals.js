let obiAttk = 25
let aniAttk = 35

if( obiAttk > aniAttk){
    console.log('Obiwan has a better attack than Anakin')
} else if (obiAttk < aniAttk){
    console.log('Anakin has a better attack than Obiwan')
} else {
    console.log('They are equally matched!')
}

let obiHP = 100
let obiDef = 0

if (obiHP <= aniAttk){
    console.log('Obiwan has been slain!')
} else{
    obiHP -= aniAttk
    console.log(`Obiwan's health is now ${obiHP}!`)
}

obiDef +=30

for(let i = 0; i < 5; i++){
    obiHP -= (aniAttk - obiDef)
    if(obiHP <= 0){
        console.log('Obiwan has been slain!')
    } else {
        console.log(`Obiwan's health is now ${obiHP}!`)
    }
}

while (obiHP > 0) {
    obiHP -= (aniAttk - obiDef)
    console.log(`Obiwan's health is now ${obiHP}!`)
    if(obiHP <= 0){
        console.log('Obiwan has been slain!')
    }
}
