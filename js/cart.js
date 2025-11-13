 let arr = JSON.parse(localStorage.getItem("cartItems")) || [];
    function displayCartItems() {
        let str = "";
        arr.forEach((item, index) => {
            str += `
            <div class=" bg-white w-[100%] h-[240px] text-black  flex   gap-10   my-10"> 
             <img src="${item.thumbnail}" alt="" class="bg-red-900 w-60 h-60 object-contain ">
                <div class="p-10 ">
                    <p class="text-2xl">${item.title}</p>
                    <p>${item.brand}</p>
                    <p class="text-2xl">${item.availabilityStatus}</p>
                    <div class="flex justify-center items-center gap-10 pt-10 font-bold text-2xl">
                        <button onClick="saveForLater(${index})">Save for later</button>
                        <button onClick="removeItem(${index})">Remove</button>
                    </div>
                </div>
                
            </div> 
            
            
            `
        })
        document.getElementById("catr-data").innerHTML = str;
    }
    displayCartItems();
    
    // function removeItem(index){
    //     let item=JSON.parse(localStorage.getItem("cartItems"))||[];
    //     item.splice(index,1)
    //     localStorage.setItem("cartItems",JSON.stringify(item))
    //     displayCartItems();
    // }




    
