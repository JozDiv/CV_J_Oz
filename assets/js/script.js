let xhr2 = new XMLHttpRequest;
function swap(){
    xhr2.onreadystatechange = function(){
        if(xhr2.readyState==4 && xhr2.status==200){
            let donnees2 = xhr2.responseText;
            affichage2(donnees2);
        }
    }
}


function affichage2(data2){
    document.querySelector('#root').innerHTML = data2;
}

        document.querySelector('#about').onclick = function(){
            xhr2.open("GET","about.html");
            xhr2.send();
            swap();
        }
        document.querySelector('#skills').onclick = function(){
            xhr2.open("GET","skills.html");
            xhr2.send();
            swap();
        }
        document.querySelector('#parcours').onclick = function(){
            xhr2.open("GET","parcours.html");
            xhr2.send();
            swap();
        }
        document.querySelector('#experience').onclick = function(){
            xhr2.open("GET","experience.html");
            xhr2.send();
            swap();
        }