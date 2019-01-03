const blogSchema = {
    title: {
        type: "textbox",
        label: "Title",
        value: ''
    },
    description: {
        type: "textbox",
        label: "Description",
        value: ''
    },
    detailDescription: {
        type: "textarea",
        label: "Detail Description",
        value: ''
    },
    category: {
        type: "select",
        label: "Category",
        options: [{
                key: 'Technology',
                value: 'Technology'
            },
            {
                key: 'Business',
                value: 'Business'
            },
        ]
    }
}

export default blogSchema;