//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
function henkou() {
	let p = document.createElement('a'); 
	p.textContent = campus.address;
	let c = document.querySelector('h2#addr');
	c.insertAdjacentElement('afterend', p);
	let l = document.createElement('ul'); 
	
	for(let r = 0;r<gakka.length;r=r+1) {
		let i = document.createElement('li');
		let u = gakka[r].name;
		i.textContent = u;		
		l.insertAdjacentElement('beforeend', i);
	}
	let g = document.querySelector('h2#dept');
	g.insertAdjacentElement('afterend', l);
	

}
let b = document.querySelector('button#show');
b.addEventListener('click', henkou);




