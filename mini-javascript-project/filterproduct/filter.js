const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryBtns = document.querySelectorAll('.category-btn');

function filterProduct(){
 const SearchValue = searchInput.value.toLowerCase();
 const productItem = document.querySelectorAll(".product-item");
 const activeCategory = document.querySelector(".category-btn.active").dataset.category;
 productItem.forEach(item =>{
     const title = item.querySelector('h3').innerText.toLowerCase();
     const category = item.dataset.category;
     
     if((title.includes(SearchValue) || SearchValue == "") && (category === activeCategory || activeCategory ==="all") ){
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
    filterProduct();
    })

}

// Select the first category button by default (assuming buttons have class names)
const firstCategoryBtn = categoryBtns[0];
firstCategoryBtn.classList.add("active"); // Set the first button as active

searchBtn.addEventListener("click",filterProduct);
searchInput.addEventListener("keyup",filterProduct);
categoryBtns.forEach(btn =>{
btn.addEventListener("click",setCategory);
})
filterProduct();
