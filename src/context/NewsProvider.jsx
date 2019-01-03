import React from 'react';
import NewsContext from './NewsContext';
import axios from 'axios';
import PropTypes from 'prop-types';


class NewsProvider extends React.Component {
    state = {
        value: 1,
        isloading: true,
        news: [],
        sources: []
    }
    loadNews() {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&pageSize=50&apiKey=69a9c2d337d4411f92c3b2ad26cc3103')
            .then(response => {
                this.setState({
                    news: response.data.articles
                })
            })
            .catch(err => console.log(err))
    }
    loadNewsSources() {
        axios.get('https://newsapi.org/v2/sources?apiKey=69a9c2d337d4411f92c3b2ad26cc3103')
            .then(response => {
                this.setState({
                    sources: response.data.sources,
                    isloading: false
                })
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.loadNews();
       // this.loadNewsSources();
    }
    render() {
        return (
            <NewsContext.Provider value={{
                news: this.state.news,
                sources: this.state.sources,
                isLoading: this.state.isloading
            }}>
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}

// NewsContext.propTypes = {
//     isUserLoggedIn: PropTypes.bool,
//     loggedInUser: PropTypes.object
// };
export default NewsProvider;