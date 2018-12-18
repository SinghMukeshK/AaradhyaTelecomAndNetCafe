function fetchBlogs(category, readingCallback, completionCallback) {
    for (let i = 0; i <= 1000000; i++) {
        if (i === 1000000) completionCallback('Done')
        else readingCallback(i)
    }
}

module.exports = fetchBlogs;