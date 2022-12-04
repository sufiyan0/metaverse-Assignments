let sandwich = ['slice cheese','Chatter cheese','butter','White tikka','egg']
let order = ['Behari boti', 'double cheese','omlate']
function acceptArray(funcArray){
    console.log("summary of Your order is");
    funcArray.forEach(provides => {
        console.log(`adding ${provides} in your sandwich`);
        
    });

}

acceptArray(sandwich)
acceptArray(['white sause', 'chicken tikks','cheese'])
acceptArray(order)