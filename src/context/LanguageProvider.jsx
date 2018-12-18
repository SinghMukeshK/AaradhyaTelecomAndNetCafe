import React from 'react';
const LanguageContext = React.createContext();


class LanguageProvider extends React.Component {
    state = {
        language: "french"
    }

    updateLanguage = e => this.setState({ language: e.target.value });

    render() {
        return (
            <LanguageContext.Provider value={{
                language: this.state.language,
                updateLanguage: this.updateLanguage
            }}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}


export default LanguageProvider;