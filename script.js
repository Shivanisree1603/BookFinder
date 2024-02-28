// Function to perform search
function searchBooks() {
    // Get the input value
    var searchText = document.getElementById('search').value.toLowerCase();
    
    // Get all book titles and their corresponding buttons
    var bookTitles = document.querySelectorAll('.flex.flex-row > div > p:nth-child(2)');
    var buttons = document.querySelectorAll('.flex.flex-row > div > button');

    // Loop through each book
    for (var i = 0; i < bookTitles.length; i++) {
        var title = bookTitles[i].textContent.toLowerCase();
        var button = buttons[i];
        
        // Check if the search text matches the book title
        if (title.includes(searchText)) {
            // Show the book if it matches
            bookTitles[i].parentElement.style.display = 'flex';
            button.style.display = 'block';
        } else {
            // Hide the book if it doesn't match
            bookTitles[i].parentElement.style.display = 'none';
            button.style.display = 'none';
        }
    }
}

// Add event listener to the search button
document.querySelector('button').addEventListener('click', searchBooks);
