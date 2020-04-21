import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import List from "./List";

import '../../SASS/Household.scss';

import { Button, Icon } from 'semantic-ui-react';
import { NavLink, Redirect } from 'react-router-dom';
import { Row, Col } from "antd"

const Household = () => {

    return (
        <div className='household container'>
            <List />
            <Row style={{ margin: "50px 0" }}>
                <Col span={24}>
                    <NavLink className='dashboard-btn' to='/dashboard'>
                        <button className="ui button blue circular">Dashboard</button>
                    </NavLink>
                </Col>
            </Row>

        </div>
    )
}





export default Household;
