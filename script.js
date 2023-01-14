var count = 0;
var countElement = document.querySelector("#sum");

console.log(countElement);
    
function add(){
    count++;
    countElement.innerHTML = count + " like(s)";
    console.log(count);
    alert("Se ha registrado tu voto");
}