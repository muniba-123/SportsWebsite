import React, { Component } from 'react';
import Button from '../Common/Button';
import TextField from '../Common/TextField';
import searchIcon from "../../Assets/icons/icon_search_w.svg";
import Table from '../Players/Table';

class Events extends Component {
    render() {
        return (
            <div className="page-wrap px-4">
            <h5 className="page-title">Events</h5>
            <div className="page-inner-wrap">
                <div className='d-flex justify-content-center align-items-center search-block'>
                    <TextField placeholder="Search events name"/>
                    <Button label="Search" className="search-btn" icon={searchIcon}/>
                </div>
                <Table/>
                </div>

                </div>
        );
    }
}

export default Events;