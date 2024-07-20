document.addEventListener('DOMContentLoaded', () => {
    const bands = [
        'The Plot in You',
        'The Devil Wears Prada',
        'Pierce the Veil',
        'Norma Jean',
        'The Bled',
        'Say Anything',
        'The Midway State',
        'We Came as Romans',
        'Counterparts',
        'Oh, Sleeper',
        'A Skylit Drive',
        'Anywhere But Here',
        'An Old Dog'
    ];

    // Function to normalize the article titles
    function normalizeTitle(title) {
        // Convert to lowercase and remove the words "a", "an", "the"
        return title.toLowerCase().replace(/\b(a|an|the)\b\s*/g, '').trim();
    }

    // Function to sort the bands array
    function sortBands(bands) {
        return bands.sort((a, b) => {
            const normalizedA = normalizeTitle(a);
            const normalizedB = normalizeTitle(b);
            if (normalizedA < normalizedB) return -1;
            if (normalizedA > normalizedB) return 1;
            return 0;
        });
    }

    // Function to display the sorted bands in the unordered list
    function displayBands(bands) {
        const bandList = document.getElementById('bands');
        if (bandList) { // Check if the element exists
            bandList.innerHTML = ''; // Clear any existing content
            bands.forEach(band => {
                const li = document.createElement('li');
                li.textContent = band;
                bandList.appendChild(li);
            });
        } else {
            console.error('Element with ID "bands" not found.');
        }
    }

    // Sort and display the bands
    const sortedBands = sortBands(bands);
    displayBands(sortedBands);
});
