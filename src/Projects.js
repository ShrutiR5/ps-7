import React, { Component } from 'react';
import './App.css';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        // Load data
        d3.csv("data/projects.csv").then((d) => {
            console.log(d);
            this.setState({ data: d });
        });
    }
    
    render() {
        console.log(this.state.data)
        return <div className="container"> <h1>Projects</h1>
                 { this.state.data.map((d, i) => {
                       return <Col key={ "project" + i }>
                              <Card body className="text-center" body outline color="primary">
                                <CardBody>
                                  <CardTitle>
                                    { d.name }
                                  </CardTitle>
                                  <CardText>
                                    { d.description }
                                  </CardText>
                                  <a target="_blank" href={ d.links }>
                                    <Button outline color="primary">Link</Button>
                                  </a>
                                </CardBody>
                              </Card>
                              <br/>
                              </Col>
                   
                   }) }
               </div>
    }
}
