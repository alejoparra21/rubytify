import React, { Component } from 'react'
import './Home.css'
import Icon from "../../icon.svg"

export default class Home extends Component {
    render() {
        return (
            <div className="w-100 w-80-l ml-auto flex justify-center items-center flow">
                <a className="no-underline dib" href="/">
                    <img src={Icon} alt="" width="150px"/>
                    <p className="bg-black-30 br4 f4 flex hover-bg-black-40 items-center mt3 no-underline pa3 white">Descubre música</p>
                </a>
            </div>
        )
    }
}
