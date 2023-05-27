// Debo invertir en bitcoin?
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    prediction.style.display='block';
    console.log('submitting form...')

    // Promise definition
    const importantLifeDecisions = new Promise((resolve, reject) => {
        console.log('calling promise...')
        setTimeout(() => {
            const isHead = Math.random() > 0.5 ? true : false;
            if(isHead) resolve('pa lante, tu dale');
            reject('no, es muy arriesgado')
        }, 5000)
        // throw new Error('OpenAPI error, se te acabo tu credito, debes pagarnos si quieres seguir usandonos!')
    })

    // Promise handling
    console.log(importantLifeDecisions);
    let positiveAnswer;
    try {
        positiveAnswer = await importantLifeDecisions
        console.log(positiveAnswer);
        const text = document.createTextNode(negativeAnswer);
        prediction.appendChild(text);
    } catch (negativeAnswer) {
        if(negativeAnswer instanceof Error) {
            console.error('an unknown error has ocurred');
            return;
        }
        const text = document.createTextNode(negativeAnswer);
        prediction.appendChild(text);
        console.log(negativeAnswer);
    } finally {
        setTimeout(() => {
            alert("Por otros 0.01 ETH obten mas consejos de vida");
        }, 3000)
    }
})