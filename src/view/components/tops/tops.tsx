import React from 'react';
import { Col, Row, Image } from 'antd';

const Tops = () => {
    return (
        <Row wrap={false} justify="space-around" align="middle" style={{marginTop:'10px', marginBottom:'10px'}}>
            <Col span={8}>
                <Image 
                    src="/logo.png"
                    preview={false}
                    onClick={() => {console.log("image clicked")}}
                />
            </Col>
            <Col flex="auto" style={{backgroundColor: 'blue'}}>
                <Row justify="end">
                    <Col style={{backgroundColor: 'pink'}}>1</Col>
                    <Col style={{backgroundColor: 'red'}}>1</Col>
                    <Col style={{backgroundColor: 'green'}}>1</Col>
                </Row>
                <Image 
                    preview={false}
                    src='https://tribratanews.ntb.polri.go.id/wp-content/uploads/2022/07/media.io_UQG10a7A-1.gif'
                />
            </Col>
        </Row>
    )
}

export default Tops;