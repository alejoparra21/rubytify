import React, { Component } from 'react'
import './musicPlayer.css'
import { connect } from 'react-redux';



class MusicPlayer extends Component {

    render() {

        return (
            <div className="musicPlayer fixed bottom w-100 flex justify-center center bottom-1">
                <audio src={this.props.song} controls className="w-80 w-40-l " autoPlay>
                </audio>
            </div>);
    }
}
const mapStateToProps = (state) => ({
    song: state.song
});
export default connect(mapStateToProps)(MusicPlayer)
