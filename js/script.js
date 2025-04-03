// mi recupero gli elementi del dom che mi servono
const button = document.getElementById('button');
const listEmail = document.getElementById('listEmail');

// mi dichiaro le variabili che mi servono
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail?items=10'

// svolgo la chiamata ajax per interrogare l`endpoint
