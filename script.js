const kuch = document.querySelector("#in");

kuch.addEventListener("keydown" , store);

function store(){
    let x = kuch.value
    localStorage.setItem('a' , x);
}
kuch.innerText = localStorage.getItem('a');