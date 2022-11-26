// toggle_cat() comportamento de ativar e desativar  mostar e esconde

function toggle_cat(){
    let cat1 = document.querySelector("#cat1");
    let cat2 = document.querySelector("#cat2");


    if(cat1.style.display != 'none'){
        cat1.style.display = 'none';
        cat2.style.display = 'inline';
    } else{
        cat1.style.display = 'inline';
        cat2.style.display = 'none';
    }
}