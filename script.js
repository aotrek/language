let myFun = new webkitSpeechRecognition();
myFun.onresult = (e)=>{
    let text = e.results[0][0].transcript;
    document.getElementById('text').innerText=text;
    read(text)
}
function read(text){
    let seach = new webkitSpeechSynthesisUtterance();
    seach.text = text;
    if (text='hello') {
        seach.text ='bye'
    }else if(text=='what is your name'){
        seach.text='my name is swapon'
    }else{
        seach.text='please try again'
    }
    document.getElementById('res').innerText=seach.text
    window.speechSynthesis.speak(seach);
}