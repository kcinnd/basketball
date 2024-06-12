document.addEventListener('DOMContentLoaded', () => {
    const database = {
        "james": "https://i.imgur.com/qlhmPJn.png",
        "mills": "https://i.imgur.com/7smM2cW.png",
        "staley": "https://i.imgur.com/BEZiyYT.png",
        "cambage": "https://i.imgur.com/vsNURhL.png"
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
