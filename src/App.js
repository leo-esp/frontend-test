import React, {Component} from 'react';
import HeaderMovies from './componentes/HeaderMovies';

class App extends Component {
    render() {
        return (
            <div id="root">
                <div className="main">
                    <HeaderMovies store={this.context.store}/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.contextTypes = {
    store: React.PropTypes.object.isRequired
}

export default App;
