import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Artist.css'
import { CommonAction } from "../../actions/index"
import { Link } from "react-router-dom";


class Artist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            artists: []
        };
    }

    componentDidMount() {

        fetch("https://rubytify-ayenda.herokuapp.com/api/v1")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        artists: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                },
            )
        this.props.CommonAction(true);

    }
    render() {
        const { error, isLoaded, artists } = this.state;
        if (error) {
            return <div>Error in loading</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div className="flex flex-wrap justify-between randomalbum w-100 w-80-l ml-auto pb6 ">
                    <h1 className="db w-100 tc white">Artistas</h1>
                    {
                        artists.map(artist => (
                            <Link to={`/artists/${artist.id}/albums`} className="appCard br2 dib flex-l flex-wrap flex-column justify-center ma3 ma3-l w-100 w-20-l white" key={artist.id}>
                                <div className="appCardItem center">
                                    <img src={artist.image} alt={artists.name} />
                                </div>
                                <p className="mt2">{artist.name}</p>
                            </Link>
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


export default connect(mapStateToProps, mapDispatchToProps)(Artist)
