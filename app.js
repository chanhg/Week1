function login(e){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username == "john" && password == "1234"){
		window.location.href = 'dashboard.html';
	} else {
		alert("Sai username, password")
	}
}
$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
  
$("#menu-icon").on("click", function(){
  $("nav").slideToggle();
  $(this).toggleClass("active");
});
var device_add = [];
const device = [
	{
		Devices: "TV",
		MAC: "RD:01:1R:76:UH:9U",
		IP: "127.0.0.1",
		Date: "07-03-2023",
		Power: 50
	},
	{
		Devices: "Washer",
		MAC: "AV:H7:QT:23:I9:HH",
		IP: "127.0.0.2",
		Date: "07-03-2023",
		Power: 80
	},
	{
		Devices: "Refrigerator",
		MAC: "KH:GF:12:MX:Y6:34",
		IP: "127.0.0.3",
		Date: "06-03-2023",
		Power: 100
	},
	{
		Devices: "Selling Fan",
		MAC: "HG:76:BD:OT:09:TS",
		IP: "127.0.0.4",
		Date: "07-03-2023",
		Power: 130
	}
]
function addNew(){
	var today = new Date();
	var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
	var name = document.getElementById("name").value;
	var mac = document.getElementById("mac").value;
	var ip = document.getElementById("ip").value;
	var power = document.getElementById("power").value;
	var new_device = {};
	new_device.Devices = name;
	new_device.MAC = mac;
	new_device.IP = ip;
	new_device.Date = date;
	new_device.Power = parseFloat(power);
	device_add.push(new_device);
	console.log(device_add);
	Chart.helpers.each(Chart.instances, function (instance) {
		instance.destroy();
   });
	render();
}
function render(){
	const data=[];
	var all_device=[];
	table = `<tr>
		<th>Device</th>
		<th>MAC Address</th>
		<th>IP</th>
		<th>Create Date</th>
		<th>Power Consumption</th>
	</tr>`
	for (let i=0;i<device.length;i++){
		all_device.push(device[i].Devices);
		data.push(device[i].Power);
		table+=`<tr>
			<td>${device[i].Devices}</td>
			<td>${device[i].MAC}</td>
			<td>${device[i].IP}</td>
			<td>${device[i].Date}</td>
			<td>${device[i].Power}</td>
		</tr>`;
		}
	for (let i=0;i<device_add.length;i++){
		all_device.push(device_add[i].Devices);
		data.push(device_add[i].Power);
		table+=`<tr>
			<td>${device_add[i].Devices}</td>
			<td>${device_add[i].MAC}</td>
			<td>${device_add[i].IP}</td>
			<td>${device_add[i].Date}</td>
			<td>${device_add[i].Power}</td>
		</tr>`;
		}
	document.getElementById("render").innerHTML=table;	
	const ctx = document.getElementById('myChart').getContext('2d');
	const myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: all_device,
			datasets: [{
				label: 'Power Consumption',
				data: data,
			}]
		},
	});
	// veBieuDo();
}

function veBieuDo(){
	const ctx = document.getElementById('myChart').getContext('2d');
	const myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: all_device,
			datasets: [{
				label: 'Power Consumption',
				data: data,
			}]
		},
	});
}