import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieDetails extends Component{

    render(){
        return (
            <div className="row-fluid movie-detail">
                <div className="col-md-6 col-md-offset-3">
                    <div className="col-md-6">
                        <img src={this.props.movie.poster} className="img-responsive" alt={this.props.movie.show_title}/>
                    </div>
                    <div className="col-md-6">
                        <h1>{this.props.movie.show_title}</h1>
                        <p>Ano: {this.props.movie.release_year} - Duracão: {this.props.movie.runtime} - Nota: {this.props.movie.rating}</p>
                        <p>Sinopse: {this.props.movie.summary}</p>
                        <p>Diretor: {this.props.movie.director}</p>
                        <p>Elenco: {this.props.movie.show_cast}</p>
                    </div>
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