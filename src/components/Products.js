import React, { Component } from 'react'
import { CardBody, CardText, CardImg, Card, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import datas from '../data';

export default class Products extends Component {
    render() {
        return (
            <div>
                <h2>สินค้าทั้งหมด</h2>
                <Row>
                    {datas.products.map(pd =>

                        <Col sm="4">
                            <Card>
                                <CardImg src={pd.image} />
                                <CardBody>
                                    <CardTitle>{pd.name}</CardTitle>
                                    <CardSubtitle>ราคา{pd.price}บาท</CardSubtitle>
                                    <CardSubtitle>จำนวน{pd.numStock}บาท</CardSubtitle>
                                    <CardText>รายละเอียดสินค้า</CardText>
                                    <Button color="warning">++เพิ่มใส่ในตระกร้า</Button>
                                </CardBody>
                            </Card>
                        </Col>

                    )
                    }
                </Row>
            </div>
        )
    }

}
