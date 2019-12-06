import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Provider } from "react-redux";
import './Rubytify.css';
import store from './store';
import Artist from './components/Artist/Artist';
import Genres from './components/Genres/Genres';
import Album from './components/Album/Album';
import MusicPlayer from './components/musicPlayer/index';
import Tachyons from 'tachyons/css/tachyons.min.css'
import logo from './logo.svg'
import Home from "./components/Home/Home";

function App() {


    return (
        <Provider store={store}>
            <Router>
                <div className="wrapper flex flex-wrap">
                    <aside className="pa3-ns asideBar bg-dark-gray fixed-l flex flex-wrap h-auto items-baseline justify-around w-100 w-20-l">
                        <a href="/">
                            <img src={logo} alt="" className="center flex pa2 pt4-l w-60 w-90-l" />
                        </a>
                        <nav className="flex justify-center inline w-90">
                            <ul className=" list overflow-auto w-100">
                                <li>
                                    <RubytifyLinks activeOnlyWhenExact={true} to="/" label="Home" />
                                </li>
                                <li>
                                    <RubytifyLinks activeOnlyWhenExact={true} to="/artists" label="Artistas" />
                                </li>
                                <li>
                                    <RubytifyLinks activeOnlyWhenExact={true} to="/genres" label="Generos" />
                                </li>
                                <li>
                                    <RubytifyLinks activeOnlyWhenExact={true} to="/albums" label="Álbumes" />
                                </li>
                            </ul>
                        </nav>

                    </aside>
                </div>
                <div>
                    <hr />

                    <Switch>
                        <Route exact path="/genres" component={Genres} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/artists" component={Artist} />
                        <Route path={`/artists/${artist.name}/albums`} component={Album} />
                    </Switch>
                    <MusicPlayer />

                </div>
            </Router>
        </Provider>
    );
}


function RubytifyLinks({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <div className={match ? "active" : ""}>
            {match && ''}
            <Link className="no-underline white flex items-center justify-center pb0 hover-bg-black-20 pt3 pb3" to={to}>{label}</Link>
        </div>
    );
}

export default App;
