console.log("Start Shopping");

const searchInput = document.getElementById('searchInput');
let debounceTimer;

searchInput.addEventListener("input", (event) => {
    clearTimeout(debounceTimer); 

    debounceTimer = setTimeout(() => {
        const searchTerm = event.target.value;
        console.log("Optimized Search Input:", searchTerm);

    }, 300); 
});
