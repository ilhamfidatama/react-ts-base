import React from 'react';
import { Col, Row } from 'antd';

const Tops = () => {
    return (
        <Row justify="space-around">
            <Col style={{backgroundColor: 'pink'}} span={8}>
                Logo
            </Col>
            <Col style={{backgroundColor: 'blue'}} span={6}>
                <Row justify="end">
                    <Col style={{backgroundColor: 'pink'}}>1</Col>
                    <Col style={{backgroundColor: 'red'}}>1</Col>
                    <Col style={{backgroundColor: 'green'}}>1</Col>
                </Row>
                <p>atas</p>
            </Col>
        </Row>
    )
}

export default Tops;