import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonAction } from "../../actions/index"
import { Link } from "react-router-dom";


class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            albums: []
        };
    }
    componentDidMount() {
        const { match: { params } } = this.props;

        fetch(`https://rubytify.herokuapp.com/api/v1/artists/${params.id}/albums`)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        albums: result.data
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
        const { error, isLoaded, albums } = this.state;
        if (error) {
            return <div>Error in loading</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div className="flex flex-wrap justify-between ml-auto overflow-hidden pb6 pr0 pr5-l randomalbum w-100 w-80-l">
                    <h1 className="db w-100 tc white">Álbumes</h1>

                    {
                        albums.map(album => (
                            <Link to={`/artists/${album.id}/songs`} className="appCard br2 dib flex-l flex-wrap flex-column justify-center ma3 ma3-l w-100 w-20-l white" key={album.id}>
                                <div className="appCardItem center">
                                    <img src={album.image} alt={albums.name} />
                                </div>
                                <p className="mt2">{album.name}</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(Album)
