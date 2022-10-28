const hello_btn = document.querySelector(".hello_btn");


function init(times){
    hello_btn.addEventListener('click', handleClick);
    function handleClick(){
        console.log(`Hello, World ${++times}`);
    }
}


init(0)