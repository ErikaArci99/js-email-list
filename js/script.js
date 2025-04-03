// mi recupero gli elementi del dom che mi servono
const button = document.getElementById('button');
const listEmail = document.getElementById('listEmail');

// mi dichiaro le variabili che mi servono
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// ciclo for che mi crea 10 email 
for (let i = 0; i < 10; i++) {
    axios.get(endpoint).then( res => {
        const emails = res.data.response;
        // console.log(emails);
        const emailItem = document.createElement('p'); 
        emailItem.textContent = emails; 
        listEmail.appendChild(emailItem)
    })
}


