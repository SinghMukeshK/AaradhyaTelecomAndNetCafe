import React from 'react';
import Chip from '@material-ui/core/Chip';

const BlogCategories = ({ ...props }) => {
    const { handleCategoryClick } = props;
    return (
        <div>
            <Chip
                color="primary"
                label="Technology"
                onClick={() => handleCategoryClick('Technology')}
                variant="outlined"
            />
            <Chip
                color="primary"
                label="Education"
                onClick={() => handleCategoryClick('Education')}
                variant="outlined"
            />
            <Chip
                color="primary"
                label="Science"
                onClick={() => handleCategoryClick('Science')}
                variant="outlined"
            />
        </div>
    )
}

export default BlogCategories;