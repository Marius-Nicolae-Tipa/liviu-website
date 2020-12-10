import React, { Component } from 'react'
import { Container, Col, Fade, Row } from 'reactstrap'
import { MobilePDFReader } from 'reactjs-pdf-reader';

export default class First extends Component {
    render() {
        return (
            <div class="text-center" style={{backgroundColor: "#fff"}}>
                <img class="img-pdf" src="https://pdf2jpg.net/files/8cf15614f02beb585029021f80aeb648073901a2/test-page-001.jpg" alt="image"/>
                <img class="img-pdf" src="https://pdf2jpg.net/files/8cf15614f02beb585029021f80aeb648073901a2/test-page-002.jpg" alt="image"/>
                <img class="img-pdf" src="https://pdf2jpg.net/files/8cf15614f02beb585029021f80aeb648073901a2/test-page-003.jpg" alt="image"/>
                <img class="img-pdf" src="https://pdf2jpg.net/files/8cf15614f02beb585029021f80aeb648073901a2/test-page-004.jpg" alt="image"/>
                <img class="img-pdf" src="https://pdf2jpg.net/files/8cf15614f02beb585029021f80aeb648073901a2/test-page-005.jpg" alt="image"/>
                <img class="img-pdf" src="https://pdf2jpg.net/files/8cf15614f02beb585029021f80aeb648073901a2/test-page-006.jpg" alt="image"/>
                <img class="img-pdf" src="https://pdf2jpg.net/files/8cf15614f02beb585029021f80aeb648073901a2/test-page-007.jpg" alt="image"/>
                <img class="img-pdf" src="https://pdf2jpg.net/files/8cf15614f02beb585029021f80aeb648073901a2/test-page-008.jpg" alt="image"/>
                <img class="img-pdf" src="https://pdf2jpg.net/files/8cf15614f02beb585029021f80aeb648073901a2/test-page-009.jpg" alt="image"/>
                <img class="img-pdf" src="https://pdf2jpg.net/files/8cf15614f02beb585029021f80aeb648073901a2/test-page-010.jpg" alt="image"/>
            </div>
        )
    }
}
