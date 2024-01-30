const  inventoryDataBase =[
    {name:"Potions section",
    items:'',
},
    {name:"Armor Section",
    items:'',
},
    {name:"Weapons Section",
    items:'',
}
]




const vendor = document.querySelector("#vendor");
const inventoryContainer =document.querySelector("#inventory")

function openInventoryOnClick(){
    inventoryDataBase.forEach((itemDoArray)=>{
        console.log(itemDoArray)
      inventoryContainer.innerHTML = itemDoArray
    })
}
vendor.addEventListener("click",openInventoryOnClick);
