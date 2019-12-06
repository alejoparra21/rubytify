import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonAction } from "../../actions/index"

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

    
    clickToPlay(preview_url){
        this.props.playSong(preview_url)
    }
    render() {
        const { error, isLoaded, songs } = this.state;
        if (error) {
            return <div>Error in loading</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div className=" songs w-100 w-80-l ml-auto mt6">
                    <h1 className="ma3 db w-100 tc white">Canciones</h1>

                    {
                        songs.map(song => (
                            <div className="appCard br2 dib ma3 ma3-l w-100 white">
                                <a className="left songItem white no-underline" href={song.preview_url} key={song.id} >{song.name}</a>
                            </div>
                        ))
                    }
                </div>);

        }
    }
}



const mapStateToProps = (state) => ({
    state: state
});
const mapDispatchToProps = dispatch => {
    return {
        CommonAction: (data) => dispatch(CommonAction(data))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Song)