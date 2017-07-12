import React, { Component }from 'react';

export default class MovieItem extends Component{
    render(){
        console.log(this.props);
        return (
            <div className="col-md-2">
                <div className="thumbnail">
                    <img src={this.props.movie.poster} className="img-responsive" alt={this.props.movie.show_title}/>
                    <div className="caption">
                        <p><b>{this.props.movie.show_title}</b></p>
                    </div>
                </div>
            </div>
        )
    }
}