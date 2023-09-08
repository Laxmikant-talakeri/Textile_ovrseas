// Get all elements with the class "add-to-cart"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add a click event listener to each "Add to Cart" button
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Display an alert message when any button is clicked
        alert('Product added to cart!');
    });
});
// Get references to the search input, search button, and results container
const searchInput = document.getElementById('search_inpt');
const searchButton = document.getElementById('Search-btn');
const searchResults = document.getElementById('searchResults');

searchButton.addEventListener('click', () => {
    alert("please Enter valid Products name")
    searchInput.value="";
});

document.querySelector("#blog").addEventListener("click", function() {
    const blogSections = document.getElementsByClassName("blog");
    
    // Assuming you want to scroll to the first element with the "blog" class
    if (blogSections.length > 0) {
        blogSections[0].scrollIntoView({ behavior: "smooth" });
    }
});

// Select all elements with the ID "product" using document.querySelectorAll
const productElements = document.querySelectorAll("#product");

// Loop through each element and attach a click event listener
productElements.forEach(function(productElement) {
    productElement.addEventListener("click", function() {
        const productSection = document.querySelector(".pro");
        if (productSection) {
            productSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
 const productMain=document.querySelector("#main");
productMain.addEventListener("click" , function(){
    const product=document.querySelector(".pro");
    if(product){
        product.scrollIntoView({behavior:"smooth"});
    };
})
