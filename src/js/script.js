// TODO
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");
aMettreEnRouge.style.color = 'red';

const enrougesuiteaclick = document.querySelector("#en-rouge-suite-a-click");
enrougesuiteaclick.addEventListener("click", (evt)=>{
    enrougesuiteaclick.style.color = "red";
});

const h2 = document.querySelectorAll("h2")
h2.forEach((elm)=>{
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color = "red";
    });
   
});