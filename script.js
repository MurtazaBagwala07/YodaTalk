var translateButton = document.querySelector("#btn-Translate");
var inputText = document.querySelector("#text-Area");
var output = document.querySelector("#output");

var serverUrl="https://api.funtranslations.com/translate/yoda.json";

function translationUrl(text){
    return serverUrl+"?"+"text="+text;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with server try again later")
}

function clickHandler(){
    
    var inputTxt = inputText.value;
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerHTML = translatedText;
    })
    .catch(errorHandler)
};

translateButton.addEventListener("click", clickHandler)