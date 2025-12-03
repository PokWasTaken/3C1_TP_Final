// Shared Header Component
function loadHeader() {
    const header = document.getElementById('main-header');
    if (header) {
        header.innerHTML = `
            <nav>
                <div class="logo">
                    <h1>LoL Wiki</h1>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="champions.html">Champions</a></li>
                    <li><a href="esports.html">Esports</a></li>
                </ul>
            </nav>
        `;
    }
}

// Shared Footer Component
function loadFooter() {
    const footer = document.getElementById('main-footer');
    if (footer) {
        footer.innerHTML = `
            <p>&copy; 2025 Wiki League of Legends. Tous droits réservés.</p>
        `;
    }
}

// Load components when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
