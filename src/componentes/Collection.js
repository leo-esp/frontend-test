import React, {Component} from 'react';
import NetFlixApi from '../logicas/NetFlixApi';
import {connect} from 'react-redux';
import MovieItem from './MovieItem';

class Collection extends Component {

    carregaFotos() {
        this.props.listMovies('https://netflixroulette.net/api/api.php?director=Alejandro%20Gonzalez%20inarritu');
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