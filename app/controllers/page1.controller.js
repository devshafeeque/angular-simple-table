app.controller("page1Controller", ["$scope", page1Controller]);

function page1Controller($scope) {
	$scope.colConfig = [
		{
			property: 'name',
			title: 'Name'
		},
		{
			property: 'age',
			title: 'Age'
		},
		{
			property: 'gender',
			title: 'Gender'
		},
		{
			property: 'address',
			title: 'Address'
		}
	];
	$scope.data = [
		{
			"_id": "5823cdc30ed0486c029c84e9",
			"age": 30,
			"name": "Rollins Underwood",
			"gender": "male",
			"company": "ACRODANCE",
			"email": "rollinsunderwood@acrodance.com",
			"phone": "+1 (943) 469-2236",
			"address": "299 Taylor Street, Clara, New Hampshire"
		},
		{
			"_id": "5823cdc3afc7b28ccc2707b4",
			"age": 40,
			"name": "Vanessa Frazier",
			"gender": "female",
			"company": "NETILITY",
			"email": "vanessafrazier@netility.com",
			"phone": "+1 (942) 550-2411",
			"address": "889 Cove Lane, Deputy, North Dakota, 6053"
		},
		{
			"_id": "5823cdc380d1b2663281176f",
			"age": 22,
			"name": "Florine Baldwin",
			"gender": "female",
			"company": "PETIGEMS",
			"email": "florinebaldwin@petigems.com",
			"phone": "+1 (803) 444-3858",
			"address": "447 Delmonico Place, Wauhillau, Indiana, 1067"
		},
		{
			"_id": "5823cdc36d175921d6fa4deb",
			"age": 30,
			"name": "Thompson Fitzpatrick",
			"gender": "male",
			"company": "OPTYK",
			"email": "thompsonfitzpatrick@optyk.com",
			"phone": "+1 (977) 402-2451",
			"address": "699 Buffalo Avenue, Bayview, Maryland, 6594"
		},
		{
			"_id": "5823cdc3f5b4eb04c9ca2e4e",
			"age": 33,
			"name": "Sonya Estrada",
			"gender": "female",
			"company": "AFFLUEX",
			"email": "sonyaestrada@affluex.com",
			"phone": "+1 (927) 581-2563",
			"address": "970 Creamer Street, Lavalette, Pennsylvania, 8697"
		},
		{
			"_id": "5823cdc37afa56acf6dd5005",
			"age": 22,
			"name": "Maldonado Jones",
			"gender": "male",
			"company": "HOTCAKES",
			"email": "maldonadojones@hotcakes.com",
			"phone": "+1 (917) 557-2471",
			"address": "343 Hubbard Place, Sussex, Ohio, 9443"
		},
		{
			"_id": "5823cdc335d20d4f81411a75",
			"age": 27,
			"name": "Dora Kramer",
			"gender": "female",
			"company": "BYTREX",
			"email": "dorakramer@bytrex.com",
			"phone": "+1 (916) 574-2627",
			"address": "848 Varick Street, Movico, Oregon, 7817"
		},
		{
			"_id": "5823cdc3a4ea9d7974705f49",
			"age": 35,
			"name": "Cervantes Hartman",
			"gender": "male",
			"company": "KANGLE",
			"email": "cervanteshartman@kangle.com",
			"phone": "+1 (814) 513-2076",
			"address": "358 Gunther Place, Tampico, Michigan, 7074"
		},
		{
			"_id": "5823cdc36c1f2fc0bf9664a9",
			"age": 36,
			"name": "Russell Boyd",
			"gender": "male",
			"company": "COMSTAR",
			"email": "russellboyd@comstar.com",
			"phone": "+1 (825) 574-2814",
			"address": "299 Hull Street, Ola, Delaware, 1665"
		},
		{
			"_id": "5823cdc3236ab3dfaf0a7aab",
			"age": 22,
			"name": "Kramer Green",
			"gender": "male",
			"company": "ZAJ",
			"email": "kramergreen@zaj.com",
			"phone": "+1 (813) 538-2775",
			"address": "187 Reed Street, Courtland, Hawaii, 6376"
		}
	];

	$scope.itemsPerPage = 5;
	$scope.currentPage = 0;
	$scope.items = [];

}