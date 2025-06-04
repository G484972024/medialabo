
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for (let i = 0;i<2;i++){
    let shop = data.results.shop[0];
    console.log("------------");
    console.log("店舗名"+shop.name);
  }

  

  

  

}


let c = document.createElement('div');
c.setAttribute('id', 'result');
let y = document.querySelector('p#kekka'); 
let u = document.createElement('p');
u.setAttribute('id','nikenn');
y.insertAdjacentElement('beforeend', u) 


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  c.remove();
  u.remove();

  y = document.querySelector('p#kekka'); 

  u = document.createElement('p');
  u.setAttribute('id','nikenn');
  u.textContent = '二件がヒットしました';
  y.insertAdjacentElement('beforeend', u) 


  c = document.createElement('div');
  c.setAttribute('id', 'result');
  let b = document.querySelector('body');
  b.insertAdjacentElement('beforeend', c); 

  let a = document.createElement('ul'); 
  a.setAttribute('id','ikenme');
  let h = document.createElement('ul');
  h.setAttribute('id','nikenme');

  

  


 
  let shop = data.results.shop[0];

  let e = document.createElement('li');
  e.textContent = "[店名]  "+shop.name;
  a.insertAdjacentElement('beforeend', e);
  
  let w1 = document.createElement('li');
  w1.textContent = "[アクセス]  "+shop.access;
  a.insertAdjacentElement('beforeend', w1);

  let w2 = document.createElement('li');
  w2.textContent = "[バリアフリー]  "+shop.barrier_free;
  a.insertAdjacentElement('beforeend', w2);

  let w3 = document.createElement('li');
  w3.textContent = "[ディナー料金]  "+shop.average;
  a.insertAdjacentElement('beforeend', w3);

  let w4 = document.createElement('li');
  w4.textContent = "[カード利用]  "+shop.card;
  a.insertAdjacentElement('beforeend', w4);

  c.insertAdjacentElement('beforeend', a);
  



  shop = data.results.shop[1];
  e = document.createElement('li');
  e.textContent = "[店名]  "+shop.name; //店の名前
  h.insertAdjacentElement('beforeend', e); 

  w11 = document.createElement('li');
  w11.textContent = "[アクセス]  "+shop.access;//アクセス
  h.insertAdjacentElement('beforeend', w11); 

  let w22 = document.createElement('li');
  w22.textContent = "[バリアフリー]  "+shop.barrier_free;
  h.insertAdjacentElement('beforeend', w22);

  let w33 = document.createElement('li');
  w33.textContent = "[ディナー料金]  "+shop.average;
  h.insertAdjacentElement('beforeend', w33);

  let w44 = document.createElement('li');
  w44.textContent = "[カード利用]  "+shop.card;
  h.insertAdjacentElement('beforeend', w44);

  c.insertAdjacentElement('beforeend', h);


  
    
 

    
    

  let g = document.querySelector('ul#ikenme'); 
  let q = document.createElement('p'); 
  q.textContent = '１件目'; 
  g.insertAdjacentElement('beforebegin',q); 

  let gg = document.querySelector('ul#nikenme'); 
  let qq = document.createElement('p'); 
  qq.textContent = '2件目'; 
  gg.insertAdjacentElement('beforebegin',qq); 

  
  // if(ii>0){
   
  //   c.remove();
   
   
   
  // }
  // ii += 1;



    
    



  

}


 y = document.querySelector('button#kai');
y.addEventListener('click', sendRequest); 






// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let i = document.querySelector('select#yosou');
  let key = i.value 
  
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+key+'.json';

  axios.get(url)
     .then(showResult)
     .catch(showError)
     .then(finish)

  



}



// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  if(typeof data == 'string'){
    data = JSON.parse(data);
  }
  console.log(data);
  console.log(data.x);
  printDom(data);


}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
  