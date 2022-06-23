// Utils: index.js

// URL
exports.URL = (process.env.NODE_ENV === 'development') ? process.env.URL_DEV : process.env.URL_PROD;

// Liste icons
exports.ICONS = [
    { id: 0, label: 'home', value: 'home' }, { id: 1, label: 'event', value: 'event' }, { id: 2, label: 'search', value: 'search' }, { id: 3, label: 'person', value: 'person' }, { id: 4, label: 'phone', value: 'phone' },
];

// Liste RATIO
exports.RATIO = [
    { id: 0, label: '1:1', value: '1' },
    { id: 1, label: '4:3', value: '4/3' },
    { id: 2, label: '16:9', value: '16/9' },
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

exports.simpleAgent = (device) => {
    let agent = []

    if (device.toLowerCase().includes('android')) agent.push('Android')
    else if (device.toLowerCase().includes('linux')) agent.push('Linux')

    if (device.toLowerCase().includes('windows')) agent.push('Windows')

    if (device.toLowerCase().includes('iphone')) agent.push('Iphone')
    else if (device.toLowerCase().includes('macintosh')) agent.push('Mac')

    if (device.toLowerCase().includes('chrome')) agent.push('Chrome')
    if (device.toLowerCase().includes('firefox')) agent.push('Firefox')

    return agent.toString().replace(',', " - ")
}

// Convert Iso Date to String
exports.convertISODate = (date) => {
    const d = new Date(date)

    // DD / MM / YY - HH : mm
    return `${d.getDate()} / ${d.getMonth() +1} / ${d.getFullYear()} - ${d.getHours()}h : ${d.getMinutes()}m `
}