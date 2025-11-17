async function fetchProductData() {
    
   try {
    let response = await fetch(`https://dummyjson.com/products`);
    let data = await response.json();
    console.log(data)
    
 
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


function searchshow() {
  document.getElementById("search").addEventListener("click",()=>{
    let query = document.getElementById("product").value;
    fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then(response => response.json())
    .then(data => {
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
     </a>`
     });
     document.getElementById("card").innerHTML=str
                 
    })
    
   
    

  })
}
searchshow()

function productfiltter(){
    
    fetch(`https://dummyjson.com/products/category-list`)
       .then(res => res.json())
       .then( data =>{
        console.log(data)
         let str=``
         data.forEach((category)=>{
            str+=
            ` <button class="bg-white w-35 h-12 rounded-3xl hover:bg-black hover:text-white font-bold " id="fillter" onclick="showitems('${category}')">${category}</button>`
                 

         })
          
        document.getElementById("all-filter").innerHTML=str
       })
        t
    fetchProductData()
}
 productfiltter()


function showitems(category,){
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then(res => res.json())
    .then(data=>{
    console.log(data)
    let str= ``
    data.products.forEach(( product)=>{
        str+=`
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
     </a>`
        
        

    })
    document.getElementById("card").innerHTML=str



})
 fetchProductData()
    





}
showitems(e)