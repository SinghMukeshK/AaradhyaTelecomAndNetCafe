import React, { Component } from 'react'
import Carrousel from '../../components/Carrousel/Carrousel.jsx';
import axios from 'axios';
import DetailedExpansionPanel from '../../components/Panel/Panel';

import Maps from '../../components/Maps/Maps';

class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainDetail: {}
        }
    }
    render() {
        let route;
        if (this.state.trainDetail.route) {
            return (
                route = this.state.trainDetail.route.map(route => {
                  return  <DetailedExpansionPanel route={route}></DetailedExpansionPanel>
                })
            )
        } else {
            route = <DetailedExpansionPanel route={{ station: { name: 'STATION 1', code: "CODE1" } }}></DetailedExpansionPanel>
        }

        return (
            <div>
                <h2>Train Information</h2>
                {route}
            </div>
        )
    }
    componentDidMount() {
        // axios.get('https://api.railwayapi.com/v2/live/train/12541/date/12-12-2018/apikey/5qsgehc9xm/')
        //     .then(response => {
        //         console.log(response)
        //         this.setState({
        //             trainDetail: response.data
        //         })
        //     })
        //     .catch(err => console.log(err))
    }
}

export default Tickets