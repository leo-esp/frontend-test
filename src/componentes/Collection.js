import React, {Component} from 'react';
import NetFlixApi from '../logicas/NetFlixApi';
import {connect} from 'react-redux';
import MovieItem from './MovieItem';

class Collection extends Component {

    carregaFotos() {
        console.log('Collection listmovies');
        // this.props.listMovies('http://netflixroulette.net/api/api.php?director=Alejandro%20Gonzalez%20inarritu');
        this.props.listMovies('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan');
    }

    componentDidMount() {
        this.carregaFotos();
    }

    render() {
        console.log('Collection movies', this.props);
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
        listMovies: url => {console.log('Collection dispatching listMovies');dispatch(NetFlixApi.listMovies(url));}
    }
}

const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(Collection);

export default CollectionContainer