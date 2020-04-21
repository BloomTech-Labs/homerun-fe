import React from "react";

import { Row, Col } from "antd"
import { Image } from "semantic-ui-react"

const Name = (props) => {

    return (
        <li style={{ margin: "15px 0" }}>
            <Row>
                <Col span={4}>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                </Col>
                <Col span={20}>
                    <h3>{props.name}</h3>
                </Col>

            </Row>
        </li>
    )
}


export default Name;