import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlaySong } from "../../actions/"
import "./Song.css"
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
        const { match: { params } } = this.props;
        fetch(`https://rubytify.herokuapp.com/api/v1/albums/${params.id}/songs`)
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

    playSong(preview_url) {
        this.props.PlaySong(preview_url)
    }

    render() {
        const { error, isLoaded, songs } = this.state;
        if (error) {
            return <div>Error in loading</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div className=" songs overflow-hidden w-100 w-80-l ml-auto mt0 mt6-l ">
                    <h1 className="ma3 db w-100 white">Canciones</h1>
                    {songs.map(song => (
                        <div className="appCard hover-bg-black-30 bb br0-l br2 dib ma0 pa3 tl w-100 white">
                            {song.preview_url != null ? (
                                <p className="left songItem white no-underline" onClick={() => this.playSong(song.preview_url)} key={song.id} >{song.name}</p>
                            ) : <p>No hay preview de la canción</p>}
                        </div>
                    ))}
                </div>);

        }
    }
}



const mapStateToProps = (state) => ({
    state: state
});
const mapDispatchToProps = dispatch => {
    return {
        PlaySong: (data) => dispatch(PlaySong(data))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Song)
