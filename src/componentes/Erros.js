import React, { Component } from 'react';
import {connect} from 'react-redux';

class Erros extends Component {
    render(){
        return (
            <div className="error-message text-center">
                <h1>{this.props.msg}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {msg: state.error}
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

const ErrosContainer = connect(mapStateToProps, mapDispatchToProps)(Erros);

export default ErrosContainer
