//3 STATUSZA VAN. 1- VALAMI TORTENIK, HA AZ KESZ, VALAMIT FOLYTATOLAGOSAN TUDUNK CSINALNI AZ EREDMENNYEL

/* const showMessageLater = (msg) => {
    setTimeout(() => {
        return msg
    }, 3000);

}

console.log(showMessageLater('Hello')) */ //undefined az erteke a setTimeOut miatt mert nem varja meg, erre kell a PROMISE h rabirjuk az egeszet h kiirja

const showMessageLater = (msg) => {
    return new Promise( (resolve, reject) => {
        setTimeout (() =>{
            if(msg === "Hello"){                
                return reject("error happened")
            }
            return resolve(msg)
        }, 1000)
    })

}

showMessageLater('Hello2').then((result) =>{
    console.log(result)
    showMessageLater("Hello3").then((result) =>{
        console.log(result)
        showMessageLater("Hello4").then((result) =>{
            console.log(result)
        })
    })
}).catch((error) => {
    console.log(error)
})

//PROMISE 2.PARAMETERE A REJECT (AZ ELSO A RESOLVE)

/* showMessageLater("Hello3").then((result) =>{
    console.log(result)
}) */

//UGYANEZ SZEBBEN: AWAIT UJ FILE = await = then



