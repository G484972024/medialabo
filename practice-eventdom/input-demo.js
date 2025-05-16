


function greeting() {
    


let h = document.querySelector('input[name="shimei"]'); 
shimei = h.value;
h.getAttribute('name');
let aisatu = 'こんにちは, '+shimei + 'さん'; 
let p =document.querySelector('p#message'); 
p.textContent = aisatu;
  
}
let b = document.querySelector('button#print');
 b.addEventListener('click', greeting); 