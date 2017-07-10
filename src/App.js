import React, { Component } from 'react';
import axios from 'axios'
import {Container, Item, Picture, Button, Description} from './components/Heroe';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: []
        };
    }

    componentDidMount () {
        axios.get('http://gateway.marvel.com:80/v1/public/characters', {
            params: {
                ts: 1,
                apikey: '047d34076dca78bfb1fd6ba191996354&hash=aab07edc087e0ae82a8ddbea3b300086',
                limit: 100
            }
        })
            .then(function (response) {
                console.log(response.data.data.results);
                this.setState({
                    heroes: response.data.data.results
                });
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            })
    }

  render() {
    return (
        <Container>
            {
                this.state.heroes.map((heroe, index) => {
                    return <Item>
                                {/*<Description>{`${heroe.description}`}</Description>*/}
                                <Picture src={`${heroe.thumbnail.path}.${heroe.thumbnail.extension}`} />
                                <Button>More</Button>
                            </Item>            
                })
            }
        </Container>
    );
  }
}

export default App;
