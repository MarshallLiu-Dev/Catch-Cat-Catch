// toggle_cat() comportamento de ativar e desativar  mostar e esconde

function toggle_cat(){
    let cat1 = document.querySelector("#cat1");
    let cat2 = document.querySelector("#cat2");
    let nomeCat1 = document.querySelector("#nomeCat1");
    let nomeCat2 = document.querySelector("#nomeCat2");


    if(cat1.style.display != 'none'){
        cat1.style.display = 'none';
        cat2.style.display = 'inline';
        nomeCat1.style.display = "none";
        nomeCat2.style.display = "inline";
    } else{
        cat1.style.display = 'inline';
        cat2.style.display = 'none';
        nomeCat1.style.display = "inline";
        nomeCat2.style.display = "none";
    }
}
/*

 if (nomCat1.style.display != "none") {
   nomCat1.style.display = "none";
   nomeCat2.style.display = "inline";
 } else {
   nomeCat1.style.display = "inline";
   nomfeCat2.style.display = "none";
 }*/