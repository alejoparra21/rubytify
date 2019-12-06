import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonAction } from "../../actions/index"

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

        fetch("http://rubytify-ayenda.herokuapp.com/api/v1/artists/4/albums")
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
    componentWillMount() {
        const { match: { params } } = this.props;
        console.log("params", params)

    }
    render() {
        const { error, isLoaded, albums } = this.state;
        if (error) {
            return <div>Error in loading</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div className="flex flex-wrap justify-between randomalbum w-100 w-80-l ml-auto pb6 ">
                    <h1 className="db w-100 tc white">Álbumes</h1>

                    {
                        albums.map(album => (
                            <a href="/" className="appCard br2 dib flex-l flex-wrap justify-center ma3 ma3-l w-100 w-20-l white">
                                <div className="appCardItem center">
                                    <img src={album.image} alt={albums.name} />
                                </div>
                                <p className="mt2">{album.name}</p>
                            </a>
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
