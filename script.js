function response(){
    var x = document.getElementById("resp");
    if (x.className === ""){
        x.classList.add("responsive");
    }else{
        x.classList.remove("responsive");
    }
    console.log("teste");
}