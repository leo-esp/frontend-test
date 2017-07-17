import React, {Component} from 'react';
import NetFlixApi from '../logicas/NetFlixApi';
import {connect} from 'react-redux';
import MovieItem from './MovieItem';

class Collection extends Component {

    render() {
        return (
            <div className="row-fluid">
                {
                    this.props.movies.map(movie => <MovieItem key={movie.show_id} movie={movie} favorite={this.props.favorite}/>)
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {movies: state.collection}
};

const mapDispatchToProps = dispatch => {
    return {
        listMovies: url => dispatch(NetFlixApi.listMovies(url)),
        favorite: movie => dispatch(NetFlixApi.favorite(movie))
    }
}

const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(Collection);

export default CollectionContainer