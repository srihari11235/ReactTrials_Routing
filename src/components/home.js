import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Home extends Component{

    render() {
        return(

            <div>
                <h1>
                    Home Page
                </h1><br />
                <p>
                    <Link to="/contact">Contact </Link>
                </p>
            </div>
        );
    }
}