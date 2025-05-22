function kensaku() {
    console.log('二件がヒットしました');
    let a = document.querySelector('p#kakka');
    a.textContent = "二件ヒットしました";
}
let b = document.querySelector('button#kai');
 b.addEventListener('click', kensaku); 