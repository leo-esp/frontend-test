import React, {Component} from 'react';
import NetFlixApi from '../logicas/NetFlixApi';
import {connect} from 'react-redux';
import MovieItem from './MovieItem';

class Collection extends Component {

    render() {
        return (
            <div className="row-fluid">
                {
                    this.props.movies.map(movie => <MovieItem key={movie.show_id} movie={movie}/>)
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
        listMovies: url => dispatch(NetFlixApi.listMovies(url))
    }
}

const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(Collection);

export default CollectionContainer