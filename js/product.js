let productid = new URLSearchParams(window.location.search).get("productId");
async function fetchProductDetails() {
    try {
        let response = await fetch("https://dummyjson.com/products/" + productid);
        let data = await response.json();
        console.log(data);
        let str = `
        <div class="left bg-gray-900 w-28 h-[1000px] ">
            <div class="grid grid-flow-col grid-rows-4 gap-4 pt-10 pl-3">
                <img src="${data.images[0]}" alt="" class="w-25 h-25 bg-white hover:border-5 border-blue-800  cursor-pointer" id="img1">
                <img src="${data.images[1]}" alt="" class="w-25 h-25 bg-white hover:border-5 border-blue-800  cursor-pointer" id="img2">
                <img src="${data.images[2]}" alt="" class="w-25 h-25 bg-white hover:border-5 border-blue-800  cursor-pointer" id="img3">





            </div>
            
        </div>
        <div class="center bg-gray-900 w-[35%] h-[1000px] flex items-start justify-center pt-20 border-r-1 border-white">

                <img src="${data.thumbnail}" alt="" class="bg-white w-[80%] h-[550px] object-contain" id="main-img">

          


        </div>
        
        <div class="right bg-gray-900  w-[50%] h-[1000px] flex flex-col text-white p-20 gap-5 ">
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

             <p class="text-5xl font-bold"> Reviews</p>
            
            <div class=" border-1 border-white w-[100%] h-50" >
             <p class="text-2xl ">${data.reviews[0].comment}</p>
             <p class="text-2xl ">${data.reviews[0].date}</p>
             <p class="text-2xl "> namre:${data.reviews[0].reviewerName}</p>
             <p class="text-2xl ">${data.reviews[0].comment}</p>
            </div>






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



