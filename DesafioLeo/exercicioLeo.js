var blocos = ["area1", "area2", "area3", "area4", "area5", "area6", "area7", "area8", "area9"];
blocos = document.getElementById(blocos);

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', saiu)


for (var i = 0; i < blocos.length; i ++){          
    function entrar(blocos[i]) {
      a.innerText = 'Entrou!'
      function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    }
    function saiu() {
        a.innerText = 'Saiu!'
    
    }
