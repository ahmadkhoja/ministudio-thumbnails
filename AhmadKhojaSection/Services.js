import React from 'react';
import {Button, Thumbnail, Col, Grid, Row, } from 'react-bootstrap'
import index from './index.css'
import Breifcase from 'react-icons/lib/fa/briefcase'
import BirthdayCake from 'react-icons/lib/fa/birthday-cake'
import Social from 'react-icons/lib/fa/bullhorn'
const Services = () => {
    return (
    <div className="serviceSection">
        
            <Row>
                <Col xs={1} md={4}>
                <Thumbnail>
                    <Breifcase className="breifcase" height="3em"/>
                    <h3>Production</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </Thumbnail>
                </Col>
                <Col xs={1} md={4}>
                <Thumbnail>
                    <BirthdayCake className="birthdayCake" height="3em"/>
                    <h3>Entertainment</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </Thumbnail>
                </Col>
                <Col xs={1} md={4}>
                <Thumbnail>
                    <Social className="social" height="3em"/>
                    <h3>Social</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </Thumbnail>
                </Col>
            </Row>
        
    </div>
    )
}

export default Services;