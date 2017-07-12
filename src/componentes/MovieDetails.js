import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieDetails extends Component{
    render(){
        console.log('MovieDetail props', this.props);
        return (
            <div className="row-fluid">
                <div className="col-md-6 col-md-offset-3">
                    <h1>{this.props.errorMovie}</h1>
                    <img src={this.props.movie.poster} className="img-responsive" alt={this.props.movie.show_title}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {movie: state.detail}
};

const mapDispatchToProps = dispatch => {
    return {}
}

const MovieDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

export default MovieDetailsContainer