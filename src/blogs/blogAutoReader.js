function fetchBlogs(category, readingCallback, completionCallback) {
    for (let i = 0; i <= 1000000; i++) {
        if (i === 1000000) completionCallback('Done')
        else readingCallback(i)
    }
}

module.exports = fetchBlogs;


const userSettings = {
    showProfile: {
        type: Boolean,
        text:"Make your profile visible",
        value:true
    },
    subscribe: {
        type: Boolean,
        text: "Subscribe for the latest articles",
        value: true
    }
}