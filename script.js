const airports = [
    "Delhi (DEL)",
    "Mumbai (BOM)",
    "Bangalore (BLR)",
    "Hyderabad (HYD)",
    "Chennai (MAA)",
    "Kolkata (CCU)",
    "Pune (PNQ)",
    "Ahmedabad (AMD)",
    "Goa (GOI)",
    "Jaipur (JAI)"
];

function setupAutocomplete(inputId, suggestionId) {
    const inputField = document.getElementById(inputId);
    const suggestionsBox = document.getElementById(suggestionId);

    inputField.addEventListener("input", () => {
        const query = inputField.value.toLowerCase();
        const matches = airports.filter(airport => airport.toLowerCase().includes(query));

        suggestionsBox.innerHTML = "";
        if (matches.length > 0 && query) {
            suggestionsBox.style.display = "block";
            matches.forEach(airport => {
                const listItem = document.createElement("li");
                listItem.textContent = airport;
                listItem.addEventListener("click", () => {
                    inputField.value = airport;
                    suggestionsBox.style.display = "none";
                });
                suggestionsBox.appendChild(listItem);
            });
        } else {
            suggestionsBox.style.display = "none";
        }
    });

    document.addEventListener("click", (e) => {
        if (!suggestionsBox.contains(e.target) && e.target !== inputField) {
            suggestionsBox.style.display = "none";
        }
    });
}

setupAutocomplete("from-airport", "from-suggestions");
setupAutocomplete("to-airport", "to-suggestions");
