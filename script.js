const botao_topo = document.getElementById("botao-topo")

botao_topo.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener("scroll", function(){
    if (window.scrollY > 10){
        botao_topo.style.display = "flex"
    }else{
        botao_topo.style.display = "none"
    }
})