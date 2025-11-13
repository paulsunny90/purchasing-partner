let productid = new URLSearchParams(window.location.search).get("productId");
async function fetchProductDetails() {
    try {
        let response = await fetch("https://dummyjson.com/products/" + productid);
        let data = await response.json();
        console.log(data);

        let thumbnailss=``
          data.images.forEach((img,i)=>{
            thumbnailss +=`
             <img src="${img}" class="w-28 h-28 bg-white hover:border-4 border-blue-500 cursor-pointer" id="img${i}">
            `
        })
        let reviewHTML=``
        data.reviews.forEach((r)=>{
            reviewHTML+=`
            <div class=" border-1 border-white w-[100%] h-50" >
             <p class="text-2xl ">${r.comment}</p>
             <p class="text-2xl ">${r.date}</p>
             <p class="text-2xl "> name:${r.reviewerName}</p>
             <p class="text-2xl ">${r.comment}</p>
            </div>
            `
        })


        let str = `
        
     
     
        <div class="left bg-gray-900 w-28 h-[1000px] sticky top-30">
            <div class="grid grid-flow-col grid-rows-4 gap-4 pt-10 pl-3">
              ${thumbnailss}
            </div>
            
        </div>
        <div class="center bg-gray-900 w-[35%] h-[1000px] flex flex-col items-start justify-start pt-30 border-r-1 border-white pl-5 sticky top-30">

            <img src="${data.thumbnail}" alt="" class="bg-white w-[80%] h-[550px] object-contain" id="main-img">
                
            <div class="flex items-center justify-center gap-15 font-bold text-white p-8">
                <div class=" flex items-center justify-center  border w-50 h-10 gap-2">
                    <img src="/images/add_shopping_cart_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="">
                    <a href="/pages/cart.html"><button id="addto"> ADD TO CART</button></a>
                     
                </div>
                <button class=" border-2 w-50 h-10">ORDER NOW </button>
              
            </div>


        </div>
    
        
        <div class="right bg-gray-900  w-[50%] h-[1000px] flex flex-col text-white p-20 gap-5 h-auto ">
            <p class="font-bold text-4xl">${data.title}</p>
            <p class="text-2xl">description:${data.description}</p>
            <p class="text-2xl">brand:${data.brand}</p>
            <div class="flex bg-white w-15 h-7 text-center justify-center items-center text-black">
            <p class="font-bold">${data.rating +"⭐"}</p>
            </div>
            
            <div class=" flex gap-10">
            <p class="text-5xl font-bold ">${"₹"+data.price}</p>
            <p class="text-2xl">${data.discountPercentage +"% off"}</p>
            </div>
            <p class="text-2xl">Availability:${data.availabilityStatus}</p>
            <p class="text-2xl">stock:${data.stock}</p>
            <p class="text-2xl">warranty:${data.warrantyInformation}</p>
            <p class="text-2xl">Shipping:${data.shippingInformation}</p>
            <p class="text-2xl ">ReturnPolicy:${data.returnPolicy}</p>

             <p class="text-5xl font-bold">Reviews</p>
    
              ${reviewHTML}

        </div>
        `;
        document.getElementById("product-detail").innerHTML = str;
        const mainImg = document.getElementById("main-img");
        const thumbnails = document.querySelectorAll("#img1, #img2, #img3");
        thumbnails.forEach(img=>{
            img.addEventListener("mouseover",function(){
              mainImg.src=this.src;
            })
        })

    } catch (err) {
        console.error(err);
        alert("An error occurred while fetching product details.");
    }
}
fetchProductDetails();

 








