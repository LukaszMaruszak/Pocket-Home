class Device{
	constructor(name, code){
		this.name = name;
		this.code = code;
	}

	getName(){
		return this.name;
	}

	getCode(){
		return this.code;
	}
}

var d1 = new Device("Lamp", '1111');
var d2 = new Device("Pamp", '1111');

class Helper{
	constructor(){
		self.devices = [d1, d2];
		self.codes = ['1111', '2222', '3333'];
		self.names = new Array();
	}

	printDevices(){
		for (var i in self.devices){
			console.log(i + ": " + self.devices[i].getName());
		}
	}

	getDevices(){
		return self.devices;
	}

	addDevice(name, code){
		document.getElementById('device_name').style.borderColor = 'gray';
		document.getElementById('name_valid').innerHTML = "";
		document.getElementById('device_code').style.borderColor = 'gray';
		document.getElementById('code_valid').innerHTML = "";

		console.log("Adding device");
		if (name.length > 5){
			console.log("Too long name");
			document.getElementById('name_valid').innerHTML = "Nazwa może mieć tylko 5 znaków";
			document.getElementById('device_name').style.borderColor = 'red';
		}
		if (name.length == 0){
			console.log("Enter name!");
			document.getElementById('name_valid').innerHTML = "Musisz podać nazwę";
			document.getElementById('device_name').style.borderColor = 'red';
		}
		if (!(self.codes.includes(code))){
			console.log("Includes:" + self.codes.includes(code, 0));
			console.log("Invalid code");
			document.getElementById('code_valid').innerHTML = "Niepoprawny kod!";
			document.getElementById('device_code').style.borderColor = 'red';
		}
		if (self.names.includes(name)){
			console.log("Includes:" + self.names.includes(name));
			console.log("Name repeated");
			document.getElementById('name_valid').innerHTML = "taka nazwa już istnieje!";
			document.getElementById('device_name').style.borderColor = 'red';
		}
		else{
			var d = new Device(name, code);
			self.devices.push(d);
			self.names.push(name);
			this.addDevice2(name, code);
		}
	}

	addDevice2(name, code){
			if(code == '1111'){
				document.getElementById('devices').innerHTML += '<div class="device">'	+		
				'<h2>'+ name +'</h2>' +
				'<label class="switch">' + 
				'<input type="checkbox">' +
				'<span class="slider round"></span>' +
				'</label>'+
						'<i id="more_button" class="fas fa-angle-double-right" onclick="openTab(' + "'settings1'" +')' + '"></i>'+
		
						'<div class="device_more" id="settings1">'+
							'<i id="less_button" class=' + 'fas fa-angle-double-left' + 'onclick="closeTab(' + "'settings1'" + ')' + '"></i>'+
							'<div class="slider_container">'+
								'<i id=' + 'sun' + 'class=' + 'fas fa-sun' + '></i>'+
								'<label for="myRange"> Intensywność światła</label>'+
								'<input type="range" min="0" max="100" value="50" class="slider_x" id="myRange" oninput="this.nextElementSibling.value=this.value">'+
								'<output>50</output>'+
								'<br>'+
							'</div>'+
		
							'<div class="color_container">'+
								'<label for="color_input"> Kolor Światła: </label>'+
								'<input type="color" id="color_input" name="head">'+
							'</div>'+
						'</div>'+
		
			+'</div>';	
			}
		}

	refreshDevices(){
		console.log("Refreshing...");
		console.log("Devices length: " + self.devices.length);
		for (var i in self.devices){
			this.addDevice2(self.devices[i].getName(), self.devices[i].getCode());
		}
	}
}
var helper = new Helper();
sessionStorage.setItem('AllDevices', helper.getDevices());
helper.printDevices();

console.log(sessionStorage.getItem('AllDevices').length);
console.log(sessionStorage.getItem('AllDevices'))


var AllDevs = sessionStorage.getItem('AllDevices');
console.log(AllDevs.length);
for (var i in AllDevs){
	console.log(i + ": " + AllDevs[i])
}



function openTab(tabName) {
	document.getElementById(tabName).style.display = "block";
	var p_width = document.getElementById("devices").offsetWidth;
	document.getElementById(tabName).style.width = p_width/1.1 + "px";
	var p_height = document.getElementById("devices").offsetHeight;
	document.getElementById(tabName).style.height = p_height / 2 + "px";
	document.getElementById('more_button').style.display = "none";
}

function closeTab(tabName) {
	document.getElementById(tabName).style.width = "0px";
	document.getElementById(tabName).style.height = "0px";
	document.getElementById(tabName).style.display = "none";
	document.getElementById('more_button').style.display = "block";
}
/*
W jakich scenach jest dane urządzenie,
Walidacja długości nazwy
Wyszukiwanie urządzeń
*/

/**
 * Kody urządzeń
 * 1111 - Żarówka
 * 2222 - Klimatyzacja
 * 3333 - 
 */