// Highlight search bar on focus
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('focus', () => {
    searchBar.style.boxShadow = '0 0 12px rgba(226, 55, 68, 0.6)';
});

searchBar.addEventListener('blur', () => {
    searchBar.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.1)';
});

// Optional: alert on typing enter (simulate search)
searchBar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        alert(`Searching for: ${searchBar.value}`);
    }
});
