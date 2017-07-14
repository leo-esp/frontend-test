import React, { Component }from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {detailMovie} from '../actions/actionCreator';

class MovieItem extends Component{

    detailMovie(){
        this.props.detailMovie(this.props.movie);
    }

    render(){
        return (
            <div className="col-md-2">
                <div className="thumbnail" onClick={this.detailMovie.bind(this)}>
                    <Link to='movieDetails'>
                        <img src={this.props.movie.poster} className="img-responsive" alt={this.props.movie.show_title}/>
                        <div className="caption">
                            <p><b>{this.props.movie.show_title}</b></p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        detailMovie: movie => dispatch(detailMovie(movie))
    }
}

const MovieItemContainer = connect(mapStateToProps, mapDispatchToProps)(MovieItem);

export default MovieItemContainer