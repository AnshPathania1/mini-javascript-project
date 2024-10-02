const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryBtns = document.querySelectorAll('.category-btn');

function filterProduct(){
 const SearchValue = searchInput.value.toLowerCase();
 const productItem = document.querySelectorAll(".product-item");
 
 productItem.forEach(item =>{
     const title = item.querySelector('h3').innerText.toLowerCase();
     const category = item.dataset.category;
     
     if((title.includes(SearchValue) || SearchValue == "") ){
         item.style.display="inline-block";
        }
        else {
            item.style.display="none";
            
        }
        
        
        // && (category === activeCategory || activeCategory ==="all")
        
        
    })
}

function categoryProduct(){
     const activeCategory = document.querySelector(".category-btn.active").dataset.category;
     const SearchValue = searchInput.value.toLowerCase();
 const productItem = document.querySelectorAll(".product-item");
 
 productItem.forEach(item =>{
     const title = item.querySelector('h3').innerText.toLowerCase();
     const category = item.dataset.category;
     
     if((title.includes(SearchValue) || SearchValue == "")&& (category === activeCategory || activeCategory ==="all") ){
         item.style.display="inline-block";
        }
        else {
            item.style.display="none";
            
        }
        
        
        // 
        
        
    })
}

function setCategory(e){
    categoryBtns.forEach(btn =>{
        btn.classList.remove("active");
        e.target.classList.add("active");
       categoryProduct();
    })

}


searchBtn.addEventListener("click",filterProduct);
searchInput.addEventListener("keyup",filterProduct);
categoryBtns.forEach(btn =>{
btn.addEventListener("click",setCategory);
})
filterProduct();