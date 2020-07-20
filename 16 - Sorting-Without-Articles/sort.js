const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const strip = bandName => {
    return bandName.replace(/^(a |the |an )/i, '').trim();
};

const sortedBands = bands.sort((currentBand, nextBand) => strip(currentBand) > strip(nextBand));

document.querySelector("#bands").innerHTML =
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join("");