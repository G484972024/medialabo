function kensaku() {
    console.log('10件がヒットしました');
    let a = document.querySelector('p#kakka');
    a.textContent = "10件ヒットしました";
}
let b = document.querySelector('button#kai');
 b.addEventListener('click', kensaku); 




 let shop = data.results.shop[i];
    let p = document.createElement('p');
    p.textContent = shop.name;

    let f = document.createElement('p');
    f.textContent = shop.access;

    let k = document.createElement('p');
    k.textContent = shop.address;




    c.insertAdjacentElement('beforeend', p);
    c.insertAdjacentElement('beforeend', f);
    c.insertAdjacentElement('beforeend', k);

    let g = document.querySelector('ul#ikenme');
 let q = document.createElement('p');
 q.textContent = '１件目';
 g.insertAdjacentElement('beforebegin',q);

 let p = document.querySelector('ul#ikenme');
  let j = document.createElement('p');  
  j.textContent = '1件目';
  p.insertAdjacentElement('beforebegin',j);
 

