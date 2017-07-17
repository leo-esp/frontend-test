import React, { Component }from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {detailMovie} from '../actions/actionCreator';
import {Glyphicon} from 'react-bootstrap';

class MovieItem extends Component{

    constructor(props){
        super(props);
        this.state = {isFavorited: false};
    }

    ComponentDidMount(){
        if(this.props.favorites.filter(movie => movie.unit === this.props.movie.unit).length> 0){
            this.setState({isFavorited: true});
        }
    }

    detailMovie(event){
        event.preventDefault();
        this.props.detailMovie(this.props.movie);
    }

    favorite(event){
        event.preventDefault();
        this.setState({isFavorited: !this.state.isFavorited});
        this.props.favorite(this.props.movie);
    }

    render(){
        return (
            <div className="col-md-2">
                <div className="thumbnail" onClick={this.detailMovie.bind(this)}>
                    <Glyphicon className="favoriteStar" glyph={this.state.isFavorited ? 'star' : 'star-empty'} onClick={this.favorite.bind(this)}/>
                    <Link to='movieDetails'>
                        <img src={this.props.movie.poster} className="img-responsive" alt={this.props.movie.show_title}/>
                        <div className="caption">
                            <p>
                                <b>{this.props.movie.show_title}</b>
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {favorites: state.favorite}
};

const mapDispatchToProps = dispatch => {
    return {
        detailMovie: movie => dispatch(detailMovie(movie)),
    }
}

const MovieItemContainer = connect(mapStateToProps, mapDispatchToProps)(MovieItem);

export default MovieItemContainer