import React, { Component } from 'react';
import './app.css';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playingURL: '',
            audio: null,
            playing: false
        }
    }

    playAudio(url) {
        let audio = new Audio(url);
        if(!this.state.playing) {
            audio.play();
            this.setState({
                playing: true,
                playingURL: url,
                audio
            });
        }
        else {
            if(this.state.playingURL === url) {
                this.state.audio.pause();
                this.setState({
                    playing: false
                });
            } else {
                this.state.audio.pause();
                audio.play();
                this.setState({
                    playing: true,
                    playingURL: url,
                    audio
                });
            }
        }
    }

    render() {
        const { tracks } = this.props;
        return (
            <div>
                {
                    tracks.map((track, i) => {
                        const trackImg = track.album.images[0].url;
                        return (
                            <div key={i} className="track" onClick={() => {this.playAudio(track.preview_url)}}>
                                <img alt='' className="track-image" src={trackImg} />
                                <div className="track-play">
                                    <div className="track-play-inner">
                                        {this.state.playingURL === track.preview_url ? <span>| |</span> : <span>&#9654;</span>}
                                    </div>
                                </div>
                                <p className="track-text">{track.name}</p>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default Gallery;