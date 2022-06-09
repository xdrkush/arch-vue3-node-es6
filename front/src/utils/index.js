// Utils: index.js

// URL
exports.URL = (process.env.NODE_ENV === 'development') ? process.env.URL_DEV : process.env.URL_PROD;

// Liste icons
exports.ICONS = [
    { id: 0, label: 'home', value: 'home' }, { id: 1, label: 'event', value: 'event' }, { id: 2, label: 'search', value: 'search' }, { id: 3, label: 'person', value: 'person' }, { id: 4, label: 'phone', value: 'phone' },
];

// Input {} - Output [ { key: ..., value: ... }, ... ]
exports.arrayObjEnt = (obj) => Object.entries(obj).map((arr, index) => {
    return { key: arr[0], value: arr[1] };
});

// Limite characters maxChar(str, limit)
exports.maxChar = (value, limit) => value.length <= limit;

// Move element in Array arraymove(array, fromIndex, toIndex)
exports.arraymove = (arr, fromIndex, toIndex) => {
    const el = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, el);
}