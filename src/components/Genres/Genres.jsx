import React, { Component } from 'react';

class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            genres: []
        };
    }
    componentDidMount() {

        fetch("https://rubytify-ayenda.herokuapp.com/api/v1/genres")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        genres: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                },
            )
    }
    render() {
        const { error, isLoaded, genres } = this.state;
        if (error) {
            return <div>Error in loading</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div className="flex flex-wrap justify-between genre w-100 w-80-l ml-auto pb6">
                    <h1 className="db w-100 tc white">Géneros</h1>

                    {
                        genres.map(genre => (
                            <a href="/" className="appCard br2 dib flex-l flex-wrap justify-center ma3 ma3-l w-20-l w-40 white">

                                <p className="mt2">{genre}</p>
                            </a>
                        ))
                    }
                </div>);

        }
    }
}

export default Artist;