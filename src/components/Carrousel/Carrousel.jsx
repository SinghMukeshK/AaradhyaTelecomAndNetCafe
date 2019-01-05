import React from "react";
import PropTypes from "prop-types";
import Slider from 'react-slick';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import carrouselStyle from '../../assets/jss/components/carrouselStyle.jsx';
import banner_two from '../../assets/img/banner-2.jpg';
import banner_one from '../../assets/img/banner-1.jpg';

function Carrousel({ ...props }) {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }
    const { classes, children } = props;
    return (
        <div style={{ paddingTop: "50px" }}>
            <Slider {...settings}>
                <div>
                    <div className={classes.carrouselWrapper}
                        style={{
                            background: `url(${banner_one})`,
                            height: `100px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        style={{
                            background: `url(${banner_two})`,
                            height: `100px`
                        }}
                    ></div>
                </div>
            </Slider>
            {children}
        </div>
    );
}

Carrousel.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(carrouselStyle)(Carrousel);
