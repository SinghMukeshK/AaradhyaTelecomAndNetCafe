import React, { Component } from 'react'
import Carrousel from '../../components/Carrousel/Carrousel.jsx';
import axios from 'axios';
import DetailedExpansionPanel from '../../components/Panel/Panel';


import Slide from '@material-ui/core/Slide';

class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainDetail: {
                route: [
                    { station: { name: 'STATION 1', code: "CODE1" } },
                    { station: { name: 'STATION 1', code: "CODE2" } },
                    { station: { name: 'STATION 1', code: "CODE3" } }]
            },
            checked: true
        }
    }
    handleScroll = () => {
        this.setState({
            checked: true
        })
        console.log('scrolling')
    }
    render() {
        let route;
        if (this.state.trainDetail.route) {
            route = this.state.trainDetail.route.map(route => {
                return <DetailedExpansionPanel route={route}></DetailedExpansionPanel>
            })
        } else {
            route = <DetailedExpansionPanel route={{ station: { name: 'STATION 1', code: "CODE1" } }}></DetailedExpansionPanel>
        }

        return (
            <Slide direction="up" in={this.state.checked} mountOnEnter unmountOnExit>
                <div>
                    <h2>Information</h2>
                    {route}
                </div>
            </Slide>
        )
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        // axios.get('https://api.railwayapi.com/v2/live/train/12541/date/12-12-2018/apikey/5qsgehc9xm/')
        //     .then(response => {
        //         console.log(response)
        //         this.setState({
        //             trainDetail: response.data
        //         })
        //     })
        //     .catch(err => console.log(err))
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
}

export default Tickets