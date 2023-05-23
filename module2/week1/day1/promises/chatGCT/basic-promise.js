

// Del form se esta tomando el input que se esta enviando
form.addEventListener('submit', (e) => {
    e.preventDefault();
    prediction.style.display='block';

    // Definir promesa
    let importantLifeDecisions =  new Promise((resolve, reject) => {
        // throw new Error('OpenAI: Te acabste tus creditos, debes darnos mas dinero para que sigamos con nuestro plan de esclavisar a ala humanidad')
        const isHead = Math.random() > 0.5 ? true : false;
        setTimeout(() => {
            if(isHead) resolve('pa lante, tu dale')
            else reject('no, es muy arriegado no lo haga compa')
        }, 2000)
    })

    // Manejar promesa (resolverla o rechazarla)
    console.log(importantLifeDecisions);
    importantLifeDecisions.then(positiveResponse => {
        console.log(importantLifeDecisions);
        console.log('positiveResponse: ', positiveResponse)
        return positiveResponse.toUpperCase();
    }).then(value => {
        console.log('value: ', value);
    }).catch(negativeResponse => {

        if(negativeResponse instanceof Error) {
            console.error('negativeResponse: ', negativeResponse)
            return;
        }
        console.log(importantLifeDecisions);
        console.log('negativeResponse: ', negativeResponse)
    }).finally(() => {
        setTimeout(() => {
            alert("Por otros 0.01 ETH obten mas consejos de vida");
        }, 3000)
    })

})