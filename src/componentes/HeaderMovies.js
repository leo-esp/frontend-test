import React, {Component} from 'react';
import {FormGroup, Form, FormControl, Button, Glyphicon, InputGroup} from 'react-bootstrap';
import NetFlixApi from '../logicas/NetFlixApi';
import { browserHistory } from 'react-router';
import {showFavorites} from '../actions/actionCreator';

export default class HeaderMovies extends Component {

    search(event){
        event.preventDefault();
        this.props.store.dispatch(NetFlixApi.search(this.texto.value, this.type.value));
        if(this.type.value === 'title'){
            browserHistory.push('/movieDetails');
        }else{
            browserHistory.push('/');
        }
    }

    showFavorites(event){
        event.preventDefault();
        this.props.store.dispatch(showFavorites(this.props.store.getState().favorite));
        browserHistory.push('/');
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">

                        <Form inline onSubmit={this.search.bind(this)}>
                            <InputGroup>
                                <FormGroup controlId="formControlsSelect">
                                    <FormControl componentClass="select" placeholder="select" inputRef={input => this.type = input}>
                                        <option value="title">Título</option>
                                        <option value="actor">Ator</option>
                                        <option value="director">Diretor</option>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup controlId="formInlineName">
                                    <FormControl type="text" placeholder="Buscar" inputRef={input => this.texto = input}/>
                                </FormGroup>
                                <Button type="submit">
                                    <Glyphicon glyph="search"/>
                                </Button>
                            </InputGroup>
                            <Button onClick={this.showFavorites.bind(this)}>
                                <Glyphicon glyph="star" />
                            </Button>
                        </Form>

                    </div>
                </div>
            </nav>
        );
    }
}