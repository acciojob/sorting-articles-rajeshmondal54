//your JS code here. If required.
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

function normalizeTitle(title) {
    // Convert to lowercase and remove the words "a", "an", "the"
    return title.toLowerCase().replace(/\b(a|an|the)\b\s*/g, '').trim();
}

function sortBands(bands) {
    return bands.sort((a, b) => {
        const normalizedA = normalizeTitle(a);
        const normalizedB = normalizeTitle(b);
        if (normalizedA < normalizedB) return -1;
        if (normalizedA > normalizedB) return 1;
        return 0;
    });
}

function displayBands(bands) {
    const bandList = document.getElementById('band');
    bandList.innerHTML = ''; // Clear any existing content
    bands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });
}

const sortedBands = sortBands(bands);
displayBands(sortedBands);
