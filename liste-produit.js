document.addEventListener("DOMContentLoaded", function() {
    loadProducts();

    function loadProducts() {
        let products;
        try {
            products = JSON.parse(localStorage.getItem('products')) || [];
        } catch (e) {
            products = [];
            console.error("Erreur de parsing JSON", e);
        }

        const productList = document.getElementById("productList");
        productList.innerHTML = "";

        products.forEach(product => {
            const row = document.createElement("tr");

            Object.values(product).forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });

            productList.appendChild(row);
        });
    }
});
