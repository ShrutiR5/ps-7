import React, { Component } from 'react';
import './App.css';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class Skills extends Component {
    render() {
        return <div className="container">
        <p></p>
        <h2>Technical Skills</h2>
        <p> <em>Technical skills mostly consist of different programming languages I am know and practice.</em></p>
        <Card body outline color="primary">
        <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java</li>
            <li>R</li>
        </ul>
        </Card>
        <p></p>
        <h2>Design Skills</h2>
        <p> <em>Design skills mostly consist of different softwares I know how to use to create various types of wire-frames.</em> </p>
       <Card body outline color="primary">
       <ul>
            <li>Figma</li>
            <li>Sketch</li>
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Adobe XD</li>
        </ul>
        </Card> 
        </div>
    }
}
