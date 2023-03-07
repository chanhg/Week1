var device_add = [];

function addNewDevice(){
	var date = "07-03-2023";
	var name = document.getElementById("name").value;
	var mac = document.getElementById("mac").value;
	var ip = document.getElementById("ip").value;
	var power = document.getElementById("power").value;
	var new_device = {};
	new_device.Devices = name;
	new_device.Date = date;
	new_device.MAC = mac;
	new_device.IP = ip;
	new_device.Power = parseFloat(power);
	device_add.push(new_device);
    console.log(device_add);
}