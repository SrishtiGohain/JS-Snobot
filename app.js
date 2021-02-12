const btn=document.querySelector('.talk');
const content= document.querySelector('.content');

const greetings = ['Im good Srishti', 'Doing good bro', 'leave me alone'];

const weather =['The Weather is perfectly fine', 'You need a tan lol'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition =  new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice Activated, Say something ..');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript= event.results[current][0].transcript;
    context.textContent= transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech= new SpeechSynthesisUtterance();

    speech.text = 'i dont know what you want';
    
    if(message.includes('how are you')){
        const finalText= greetings[Math.floor(Math.random()* greetings.length)];
        speech.text = finalText;
    }
    
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}