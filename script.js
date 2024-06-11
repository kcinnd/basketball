document.addEventListener('DOMContentLoaded', () => {
    const database = {
        "example": "https://via.placeholder.com/300",
        "mills": "https://i.imgur.com/NFKG3DL.png",
        "dog": "https://via.placeholder.com/300/00FF00/FFFFFF?text=Dog"
    };

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultContainer = document.getElementById('result-container');

    function displayImage(imageUrl) {
        resultContainer.innerHTML = `
            <div class="result-image-container">
                <img src="${imageUrl}" class="result-image" alt="Search Result">
                <button class="close-button">X</button>
            </div>
        `;
        
        document.querySelector('.close-button').addEventListener('click', () => {
            resultContainer.innerHTML = '';
        });
    }

    function searchDatabase() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (database[searchTerm]) {
            displayImage(database[searchTerm]);
        } else {
            resultContainer.innerHTML = `<p>No results found.</p>`;
        }
    }

    searchButton.addEventListener('click', searchDatabase);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchDatabase();
        }
    });
});
