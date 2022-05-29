// Utils: index.js

// URL
exports.URL = (process.env.NODE_ENV === 'development') ? process.env.URL_DEV : process.env.URL_PROD

exports.ICONS = [
    { id: 0, label: 'home', value: 'home' }, { id: 1, label: 'event', value: 'event' }, { id: 2, label: 'search', value: 'search' }, { id: 3, label: 'person', value: 'person' }, { id: 4, label: 'phone', value: 'phone' },
]