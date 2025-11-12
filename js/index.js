async function fetchProductData() {
   try {
    let response = await fetch(`https://dummyjson.com/products`);
    let data = await response.json();
 
    let str= "";
    data.products.forEach((product) => {
        str += `
    <a href="/pages/product.html?productId=${product.id}">
       <div class="bg-gray-900 w-80 h-100 rounded-xl p-5 text-centerx max-md-w-full max-sm:w-full">
            <div class=" w-70 h-50  flex  items-start justify-center">
                <img src="${product.thumbnail}" alt="" class="h-full w-full object-cntain">
            </div>
            <div class="text-center pt-4">
                <p class="font-bold text-2xl">${product.title}</p>

            </div>
            <p class="font-bold text-2xl">$${product.price}</p>
            <p class="font-bold">Rating: ${product.rating}</p>

        </div>
   </a>

`
    });
    document.getElementById("card").innerHTML=str;
    
    
} catch(err){
        console.error(err);
        alert("An error occurred while fetching product data.");
    }
}
fetchProductData()





















'https://dummyjson.com/products'