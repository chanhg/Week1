$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
  
$("#menu-icon").on("click", function(){
  $("nav").slideToggle();
  $(this).toggleClass("active");
});
const logs = [
    {
        id : "1",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "2",
        name : "Washer",
        action: "Sleep",
        date: "126237"
    },
    {
        id : "3",
        name : "Fan",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "4",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "5",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "6",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "7",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "8",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "9",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "10",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "11",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "12",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "13",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "14",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "15",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
    {
        id : "16",
        name : "TV",
        action: "Turn on",
        date: "126237"
    },
]
let perPage = 5;
let currentPage = 1;
let start = 0;
let end = perPage;
const totalPage = Math.ceil(logs.length/perPage);

function getCurrentPage(currentPage){
    start = (currentPage-1)*perPage;
    end = (currentPage)*perPage;
}

function renderDevice(){
    table=`<tr>
        <th>Device ID</th>
        <th>Name</th>
        <th>Action</th>
        <th>Date</th>
    </tr>`;
    for (let i=0;i<logs.length;i++){
        if(i>=start&&i<end){
            table+=`<tr>
			<td>${logs[i].id}</td>
			<td>${logs[i].name}</td>
			<td>${logs[i].action}</td>
			<td>${logs[i].date}</td>
		</tr>`;
        }
	}
    document.getElementById("render_all").innerHTML=table;
}
function render_page(num){
    html='';
    for(let i=1;i<=num;i++){
        if(i==currentPage){
            html+=`<li class="active" id="page${i}">${i}</li>`;
        } else{
            html+=`<li id="page${i}">${i}</li>`;
        }
    }
    document.getElementById("page").innerHTML=html;
}
renderDevice();
render_page(totalPage);
changePage();
function changePage(){
    const all_page = document.querySelectorAll('.page li');
    console.log(all_page);
    for(let i=0;i<all_page.length;i++){
        all_page[i].addEventListener('click',()=>{
            console.log(i);
            page_current="page";
            page_current+=String(currentPage);
            document.getElementById(page_current).className = "";
            currentPage = i+1;
            page = "page";
            page+=String(currentPage);
            document.getElementById(page).className = "active";
            getCurrentPage(currentPage);
            renderDevice();
        })
    }
}
function searchLog(){
    let valueInput = document.getElementById("search").value;
    let searchLog = logs.filter(value =>{
        return value.name.toUpperCase().includes(valueInput.toUpperCase())
    });
    renderSearch(searchLog);
    let totalPageSearch = Math.ceil(searchLog.length/perPage);
    render_page_search(totalPageSearch);
    changePageSearch(searchLog);
}
function renderSearch(arr){
    table=`<tr>
        <th>Device ID</th>
        <th>Name</th>
        <th>Action</th>
        <th>Date</th>
    </tr>`;
    for (let i=0;i<arr.length;i++){
        if(i>=start&&i<end){
            table+=`<tr>
			<td>${arr[i].id}</td>
			<td>${arr[i].name}</td>
			<td>${arr[i].action}</td>
			<td>${arr[i].date}</td>
		</tr>`;
        }
	}
    document.getElementById("render_all").innerHTML=table;
}
function render_page_search(num){
    html='';
    for(let i=1;i<=num;i++){
        if(i==currentPage){
            html+=`<li class="active" id="pageS${i}">${i}</li>`;
        } else{
            html+=`<li id="pageS${i}">${i}</li>`;
        }
    }
    document.getElementById("page").innerHTML=html;
}
function changePageSearch(arr){
    const all_page_search = document.querySelectorAll('.page li');
    console.log(all_page_search);
    for(let i=0;i<all_page_search.length;i++){
        all_page_search[i].addEventListener('click',()=>{
            console.log(i);
            page_current_S="pageS";
            page_current_S+=String(currentPage);
            document.getElementById(page_current_S).className = "";
            currentPage = i+1;
            page_S = "pageS";
            page_S+=String(currentPage);
            document.getElementById(page_S).className = "active";
            getCurrentPage(currentPage);
            renderSearch(arr);
        })
    }
}