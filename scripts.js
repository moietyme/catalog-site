document.addEventListener("DOMContentLoaded", function () {
    const data = {
        categories: ["Телефони", "Ноутбуки", "Аксесуари"],
        products: [
            { name: "iPhone 15", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS1y7It8U1PJRhVXmN4it7dFj89zelB_z66bKWRHvHG6CiX9fPFmSveDpFrEay5XwFOaiCjDKB9m777nnmzeVKut6pZMEjSpOyGAFTSYXmKFLBGID1qTFhF", price: "35 000 грн", category: "Телефони" },
            { name: "MacBook Pro", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR5WYelRX-BRCeRzScYLu9dlMrA-9Syw81jOIGsCvkvftWKjcSIwTFgIlgvAHAGk6oJ2onL0F0jnBAprkWQ0gmLi1kJX4Q4UWByPq1W3KKCiWqlcd_P---oKUo", price: "75 000 грн", category: "Ноутбуки" },
            { name: "Навушники AirPods", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTl4TAF-0AwdHHDPrOMzg02XcyBgEFjpiCzs9y5ESE3ey_5aarNFVA9SF1CQ6Ho9ewyKPaXQxQXdEVz-HkW8cHhZIbGLydqKpKlFa9IDFvfnW3CS9Gpy2Lhgw", price: "5 000 грн", category: "Аксесуари" }
        ]
    };

    const categoryList = document.getElementById("categories");
    const productList = document.getElementById("product-list");

    // Відображаємо категорії
    data.categories.forEach(category => {
        let li = document.createElement("li");
        li.textContent = category;
        li.addEventListener("click", () => showProducts(category, data.products));
        categoryList.appendChild(li);
    });

    // Відображаємо всі товари за замовчуванням
    showProducts(null, data.products);

    function showProducts(category, products) {
        productList.innerHTML = "";
        products
            .filter(product => !category || product.category === category)
            .forEach(product => {
                let div = document.createElement("div");
                div.classList.add("product");
                div.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                `;
                productList.appendChild(div);
            });
    }
});
function searchProducts() {
    let input = document.getElementById("search").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let name = product.querySelector("h3").textContent.toLowerCase();
        if (name.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
window.onscroll = function() {
    let scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}