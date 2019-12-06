import React, { Component } from 'react'
import './musicPlayer.css'



class MusicPlayer extends Component {

    render() {

            return (
                <div className="musicPlayer fixed bottom w-100 flex justify-center center bottom-1">
                    <audio src="https://p.scdn.co/mp3-preview/2ec09221ef6979e034c22ac7198056117850e744?cid=76ef95421e3a4e7aac6358eba6727257" controls className="w-80 w-40-l ">
                    </audio>
                </div>);
        }
    }

export default MusicPlayer
