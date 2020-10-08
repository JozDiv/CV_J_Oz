let xhr = new XMLHttpRequest();
xhr.onload = function(){
    if (this.status === 200){
        document.getElementById('root').innerHTML = xhr.responseText;
    }
}
xhr.open('get','about.html');
xhr.send();