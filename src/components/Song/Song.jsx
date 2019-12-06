import React, { Component } from 'react';

class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            songs: []
        };
    }
    componentDidMount() {

        fetch("http://rubytify-ayenda.herokuapp.com/api/v1/albums/3/songs")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        songs: result.data
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
        const { error, isLoaded, songs } = this.state;
        if (error) {
            return <div>Error in loading</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div className=" songs w-100 w-80-l ml-auto">
                    <h1 className="db w-100 tc white">Canciones</h1>

                    {
                        songs.map(song => (
                            <div className="appCard br2 dib ma3 ma3-l w-20-l w-40 white">
                                <a clasName="white no-underline" href={song.preview_url}>{song.name}</a>
                            </div>
                        ))
                    }
                </div>);

        }
    }
}

export default Song;