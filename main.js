function toggleMenu(){
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// handler render data store pagenation  follow click 
let arrStores= [
    {
        "storeName": "Banh xeo co ba",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 1",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 2",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 3",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 4",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 5",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 6",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 7",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 8",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 9",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 10",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 11",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    }  ,
    {
        "storeName": "Banh xeo co ba 12",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 13",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 14",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 15",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 16",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 17",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 18",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 19",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 20",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 21",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 22",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 23",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    } ,
    {
        "storeName": "Banh xeo co ba 24",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 25",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 26",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 27",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 28",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 29",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 30",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 31",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 32",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 33",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 34",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 35",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    } ,
    {
        "storeName": "Banh xeo co ba 36",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 37",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 38",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 10",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 11",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    }  ,
    {
        "storeName": "Banh xeo co ba 12",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 13",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    },
    {
        "storeName": "Banh xeo co ba 14",
        "Description": "banh Xeo",
        "businessRegistrationNumber":09090121029,
        "storeRepresentative" : "Nguyen Van Quan",
        "status" :"Active"
    }
]
let arrAcount=[
     {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Admin"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Moderator"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Admin"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Admin"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Moderator"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Moderator"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Admin"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Admin"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Moderator"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Admin"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Admin"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Moderator"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Moderator"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Admin"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Admin"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Moderator"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Admin"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Admin"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Moderator"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Moderator"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"User"},
      {"Name": "M2nh Ngoc 1",
      "Role":"Admin"}
]

let perPageStore=8;
let currentPageStore= 1;
let totalPagesStores = Math.floor(arrStores.length/perPageStore)+1;
let start;
let end;
function getCurrentDataStorePage(currentPage){
    start=(currentPage-1)*perPageStore;
end= (currentPage-1)*perPageStore+perPageStore;
}

const pagenationList= document.getElementById('list-stores-dashBoard')

function elem(allPages,pageCurent) {
    console.log(pageCurent)
    let li='';

    let beforePage=pageCurent-1;
    let afterPage=pageCurent+1
    let pageActive
    if (pageCurent>1) {
        li+=`<li class="btnPreviousPage" onclick="elem(totalPagesStores,${pageCurent-1}),loadItemStore(${pageCurent-1})" ><ion-icon name="chevron-back-sharp"></ion-icon></ion-icon></li>`
    }
    for(let pageLength=beforePage;pageLength<=afterPage;pageLength++){
       if (pageLength>allPages){
        continue;
       }
        if (pageLength==0){
            pageLength+=1;
        }
        if(pageLength==pageCurent){
            pageActive=`active`
      }
      else{
        pageActive=``;
      }
        li+=`<li class="numb ${pageActive}" onclick="elem(totalPagesStores,${pageLength}),loadItemStore(${pageLength})"  ><span>${pageLength}</span></li>`
    }
    if (pageCurent<allPages){
        
        li+=`<li class="btnNextPage" onclick="elem(totalPagesStores,${pageCurent+1}),loadItemStore(${pageCurent+1})" ><ion-icon name="chevron-forward-sharp"></ion-icon></li>`
    }
    pagenationList.innerHTML=li;
}
elem(totalPagesStores,1);

function renderDataStore(){
    var temp=""
   for (var i=0;i<arrStores.length;i++){
    if (i>=start&&i<end){

temp+=`<tr>`
temp+="<td>" +arrStores[i].storeName +"</td>"
temp+="<td>"+arrStores[i].Description+"</td>"
temp+="<td>"+arrStores[i].businessRegistrationNumber+"</td>"
temp+="<td>"+arrStores[i].storeRepresentative+"</td>"
temp+="<td>"+`<span class="statusPause"> `+ "Pause"+"</span>"+"</td>"
temp+="<td>"+`<button class="btn"> `+ "Details"+"</button>"+"</td></tr>"
    }
   }
   document.getElementById('recentStores').innerHTML=temp;
   
}
renderDataStore();
function loadItemStore(pageClicked){
     getCurrentDataStorePage(pageClicked);
renderDataStore();
}
loadItemStore(1);



//recent account pagenation

let recentAccount= document.getElementById('recentAccount');
let pageAccountNum= document.getElementById('list-accounts-dashBoard')
let perPageAccount=8;
let currentPageAccount=1;
let totalPagesAccount = Math.floor(arrAcount.length/perPageAccount)+1;
function getCurrentDataAccountPage(currentPage){
    start=(currentPage-1)*perPageAccount;
end= (currentPage-1)*perPageAccount+perPageAccount;
}
function renderDataAccount(){
   
let temp="";
    for (let i=0;i<arrAcount.length;i++){
        if (i>=start&&i<end){
    temp+="<tr>"+
    `<td width="60px"><div class="imgBox"><ion-icon name="person-outline"></ion-icon></div></td>`
    +"<td>"+`<h4>${arrAcount[i].Name}</h4>` +`<span>${arrAcount[i].Role}</span>`+"</td>"
    +`<td ><div ><button class="btn">Details</button></div></td>`+"</tr>"
        }
    }
  recentAccount.innerHTML=temp;
}
renderDataAccount()
function elemAccount(allPages,pageCurent) {
    let li='';

    let beforePage=pageCurent-1;
    let afterPage=pageCurent+1
    let pageActive
    if (pageCurent>1) {
        li+=`<li class="btnPreviousPage" onclick="elemAccount(totalPagesStores,${pageCurent-1}),loadItemAccount(${pageCurent-1})" ><ion-icon name="chevron-back-sharp"></ion-icon></ion-icon></li>`
    }
    for(let pageLength=beforePage;pageLength<=afterPage;pageLength++){
       if (pageLength>allPages){
        continue;
       }
        if (pageLength==0){
            pageLength+=1;
        }
        if(pageLength==pageCurent){
            pageActive=`active`
      }
      else{
        pageActive=``;
      }
        li+=`<li class="numb ${pageActive}" onclick="elemAccount(totalPagesStores,${pageLength}),loadItemAccount(${pageLength})"  ><span>${pageLength}</span></li>`
    }
    if (pageCurent<allPages){
        
        li+=`<li class="btnNextPage" onclick="elemAccount(totalPagesStores,${pageCurent+1}),loadItemAccount(${pageCurent+1})" ><ion-icon name="chevron-forward-sharp"></ion-icon></li>`
    }
    pageAccountNum.innerHTML=li;
}
elemAccount(totalPagesAccount,1)
function loadItemAccount(pageNum){
    getCurrentDataAccountPage(pageNum);
    renderDataAccount();
}
loadItemAccount(1)




