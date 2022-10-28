const button = document.querySelector("button");
const message_div = document.querySelector(".message_div");
const message2_div = document.querySelector(".message2_div");

function init(times, times2){
    let httpRequest;
    button.addEventListener("click",handleClick);

    function handleClick(){
        httpRequest = new XMLHttpRequest()

        if(!httpRequest){
            alert("Giving up :( Cannot create an XMLHTTP instance)");
            return false;
        }
        httpRequest.open("GET", "index.html");
        httpRequest.send(httpRequest.responseText);

    }

    function alertContent() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                alert(httpRequest.responseText);
                message_div.innerText = httpRequest.responseText;
            } else {
                alert("There was a problem with the request.")
            }
        }
    }
}


init(0,0)