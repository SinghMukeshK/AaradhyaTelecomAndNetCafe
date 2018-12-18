import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';

const CustomDrawer = ({ ...props }) => {
    const {
        classes,
        className,
        children,
        plain,
        profile,
        chart,
        ...rest
    } = props;
    return (
        <div>
            {children}
        </div>
    )
}
export default CustomDrawerCustomDrawer;