//General
i = 0;
click_dps = 1;
dps_total = 0;

//Nami
count_nami = 0;
dps_nami = 0;
prix_nami = 100;

//Miss Fortune
count_miss_fortune = 0;
dps_miss_fortune = 0;
prix_miss_fortune = 1000;

//Creuset de Mikael
var creuset_de_mikael = class creuset_de_mikael {
	constructor(name, image, price, desc) {
		this.name = "Creuset de Mikael";
		this.image = image;
		this.price = price;
		this.desc = desc;
	}
};

window.setInterval('dps()', 1000);

function display_points() {
	document.getElementById('display_place').innerHTML = i;
	document.getElementById('dps_total').innerHTML = dps_total;
}

function add() {
	i = i + click_dps;
	display_points();
}

function dps() {
	dps_miss_fortune = count_miss_fortune * 5;
	dps_total = dps_miss_fortune;
    i += dps_total;
    if (dps_nami > 0)
		document.getElementById('shop.dps.nami').innerHTML = dps_nami;
    if (dps_miss_fortune > 0)
		document.getElementById('shop.dps.miss-fortune').innerHTML = dps_miss_fortune;
    display_points();
}

function buy_nami() {
	if (i >= prix_nami) {
		i = i - prix_nami;
		prix_nami = prix_nami + (10 * count_nami);
		count_nami++;
		dps_nami = count_nami;
		click_dps = 1 + dps_nami;
		document.getElementById('shop.price.nami').innerHTML = prix_nami;
		document.getElementById('shop.count.nami').innerHTML = count_nami;
		document.getElementById('click_dps').innerHTML = click_dps;
	}
	display_points();
}

function buy_miss_fortune() {
	if (i >= prix_miss_fortune) {
		i = i - prix_miss_fortune;		
		prix_miss_fortune = prix_miss_fortune + (100 * count_miss_fortune);
		count_miss_fortune++;
		document.getElementById('shop.price.miss-fortune').innerHTML = prix_miss_fortune;
		document.getElementById('shop.count.miss-fortune').innerHTML = count_miss_fortune;
	}
	display_points();
}

function buy_items() {

}