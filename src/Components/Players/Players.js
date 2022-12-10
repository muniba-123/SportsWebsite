import React, { Component } from 'react';
import Button from '../Common/Button';
import TextField from '../Common/TextField';
import Table from './Table';
import searchIcon from "../../Assets/icons/icon_search_w.svg";

class Players extends Component {
    render() {
        return (
            <div className="page-wrap px-4">
            <h5 className="page-title">Players</h5>
            <div className="page-inner-wrap">
                <div className='d-flex justify-content-center align-items-center'>
                    <TextField placeholder="Search players name"/>
                    <Button label="Search" className="search-btn" icon={searchIcon}/>
                </div>
                <Table/>
                </div>

                </div>
        );
    }
}

export default Players;