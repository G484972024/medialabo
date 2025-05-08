let kotae = Math.floor(Math.random()*10)+1;
console.log("答(デバッグ用 : " + kotae);

let kaisu = 0;

hantei();
hantei();
hantei();
hantei();

function hantei() {
    let yoso = 4;
    kaisu = kaisu +1;
    console.log(kaisu+"回目の予想:"+yoso);
    if(kaisu >= 4){
        console.log("答えは"+kotae+"でした。 すでにゲームは終わっています.");
    }
    else if(kaisu ===3){
        if(yoso === kotae){
            console.log("正解です。おめでとう！");
        }
        
        else{
            console.log("まちがい、残念でした答えは"+kotae+"です。");
        }
    }
    else if (kaisu<=2){
        if(yoso === kotae){
            console.log("正解です。おめでとう！");
            kaisu = 4;
        }
        else if (kotae > yoso){
            console.log("まちがい、答えはもっと大きいですよ");

        }
        else{
            console.log("まちがい、答えはもっと小さいですよ");
        }

    }
   
    
}