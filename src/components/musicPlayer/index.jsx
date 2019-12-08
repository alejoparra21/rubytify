import React, { Component } from 'react'
import './musicPlayer.css'
import { connect } from 'react-redux';



class MusicPlayer extends Component {

    render() {

        return (
            <div className="fixed bottom w-100 flex justify-center center bottom-0">
                <audio src={this.props.song} controls className="w-100 audioPlayer " autoPlay>
                </audio>
            </div>);
    }
}
const mapStateToProps = (state) => ({
    song: state.song
});
export default connect(mapStateToProps)(MusicPlayer)
