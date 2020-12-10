import React, { Component } from 'react'
import { Button, Col, Fade, Row } from 'reactstrap'
import First from './First'

export default class Home extends Component {
    render() {
        return (
            <Fade>
                <Button id="button-contact"> Contact us</Button>
                <First />

            </Fade>
        )
    }
}
