import React from 'react';

import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
import { Container, Row, Col } from 'react-bootstrap'
// import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
// import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

import { data_clean } from '../data/data_clean'

function isNumeric(n) { 
	return !isNaN(parseFloat(n)) && isFinite(n);
}

class SamplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {

        var parsedData = data_clean.map(function(obj, ind) {
            return {
                "idx": ind,
                "Raw Data": Number(obj[Object.keys(obj)[0]])
                }
        })

        this.setState({ 
            data: parsedData
        });
    }


    render() {
        const { data } = this.state;

        return (

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1>Algothon 2021: Data Visualisation</h1>
                
                <Container>
                    <Row className="justify-content-md-center">
                        <ResponsiveContainer width='100%' height={400}>
                            <LineChart data={data}
                            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="idx" label={{ value: 'Index', position: 'bottom', offset: 0}}/>
                                <YAxis/>                        
                                <Tooltip />
                                <Legend verticalAlign="top" height={36}/>
                                <Line type="monotone" dataKey="Raw Data" stroke="#8884d8" dot={false}/>
                            </LineChart>
                        </ ResponsiveContainer>
                    </Row>
                    <Row>
                        <Col>
                        lalal
                        </Col>
                        
                        <Col>
                        lalal
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        );
    }
}

export { SamplePage };
                /*<VictoryChart
                theme={VictoryTheme.material}
                height={200}
                width={200}
                style={{
                    labels: { fontSize: 15 }
                }}
                >
                <VictoryLine
                    style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc"},
                    }}
                    data={data}
                />
                </VictoryChart>*/