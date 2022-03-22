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

const myFunction = async () =>{
    
    try {
        let result = ''
        result = await showMessageLater('Hello5')
        console.log(result);
        result = await showMessageLater('hello6')
        console.log(result);
        result = await showMessageLater('hello7')
        console.log(result);
        result = await showMessageLater('Hello')
        console.log(result);
        
    } catch (error) {
        console.log(error)
    }
}

myFunction()