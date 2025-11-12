let productid= new URLSearchParams(window.location.search).get("productId");
async function fetchProductDetails(){
    try{
        let response=await fetch("https://dummyjson.com/products/"+productid);
        let data =await response.json();
        console.log(data);
        let str=`
        <div class="left bg-blue-500 w-25 h-[1000px] ">
            <div class="grid grid-flow-col grid-rows-4 gap-4 pt-10">
                <img src="${data.images[0]}" alt="" class="w-25 h-25 bg-gray-300 hover:border-5 border-blue-800">
                <img src="${data.images[1]}" alt="" class="w-25 h-25 bg-gray-300 hover:border-5 border-blue-800">
                <img src="${data.images[2]}" alt="" class="w-25 h-25 bg-gray-300 hover:border-5 border-blue-800">
                <img src="${data.images[3]}" alt="" class="w-25 h-25 bg-gray-300 hover:border-5 border-blue-800">



            </div>
            
        </div>
        <div class="center bg-blue-800 w-[35%] h-[1000px] flex items-start justify-center pt-20">

                <img src="${data.thumbnail}" alt="" class="bg-gray-300 w-[80%] h-[550px]">

          


        </div>
        <div class="right bg-gray-900  w-[50%] h-[1000px] flex flex-col text-white p-20 gap-5">
            <p class="font-bold text-3xl">name:${data.title}</p>
            <p class="text-2xl">description:${data.description}</p>
            <p class="text-2xl">brand:${data.brand}</p>
            <p class="text-2xl">rating:${data.rating}</p>
            <p class="text-2xl">price:${data.price}</p>


        </div>
        `;
        document.getElementById("product-detail").innerHTML=str;
        




    }catch(err){
        console.error(err);
        alert("An error occurred while fetching product details.");
    }
}
fetchProductDetails();