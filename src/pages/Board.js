import {Table} from "react-bootstrap";
import React , { useState }from 'react';
import Navigation from '../navi';
import Lnb from './lnb.js';
import Drawer_lnb from './drawer.js';
import { findByLabelText } from "@testing-library/react";
function Board(){
    return(
        <div>
            <Navigation/>
            <Lnb></Lnb>
            {/* <Drawer_lnb/> */}
            <Table striped bordered hover >
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Board;