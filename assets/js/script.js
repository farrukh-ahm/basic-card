let btn = document.querySelector(".btn")
let btnAux = document.querySelector(".btn-aux")
let main = document.querySelector(".main")
let aux = document.querySelector(".auxilary")

btn.addEventListener("click", ()=>{
    main.classList.remove("show")
    main.classList.add("hide");
    aux.classList.remove("hide")
    aux.classList.add("show");
})

btnAux.addEventListener("click", ()=>{
    aux.classList.remove("show");
    aux.classList.add("hide");

    main.classList.add("show");
    main.classList.remove("hide")

})