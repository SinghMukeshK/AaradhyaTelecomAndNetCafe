import React from 'react';
import Chip from '@material-ui/core/Chip';

const categories = [
    { key: 'Technology', label: 'Technology' },
    { key: 'Education', label: 'Education' },
    { key: 'Science', label: 'Science' },
    { key: 'Bank', label: 'Bank' },
    { key: 'Jobs', label: 'Jobs' }];

const BlogCategories = ({ ...props }) => {
    const { handleCategoryClick } = props;
    return (
        <div>
            {categories.map((category) => {
                return (<Chip
                    style={{ margin: "2px" }}
                    key={category.key}
                    color="primary"
                    label={category.label}
                    onClick={() => handleCategoryClick(category.label)}
                    variant="outlined"
                />)
            })}
        </div>
    )
}

export default BlogCategories;