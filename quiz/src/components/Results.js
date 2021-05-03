import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup } from '@adobe/react-spectrum';
import { Card, Container, ListGroup } from 'react-bootstrap';

let total = 0;

function TotalScore(quesList) {
    quesList.map((item) => (
        total = total + parseInt(item.score)
    ))
    return total;
}

const Result = ({ myQuiz }) => {
    return (
        <Container>
            <Card>
                <Card.Header className="text-center">Quiz Result</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">Total Scores: {TotalScore(myQuiz) / 2} / {myQuiz.length}</Card.Title>
                    <Card.Text>
                        <ListGroup>{
                            myQuiz.map((item) => (
                                <ListGroup.Item>
                                    <div>Q#{item.id} {item.question}</div>
                                    {myQuiz[item].options.map(
                                        function (fetchOptions) {
                                            return (Object.values(fetchOptions).map((allOptions) => {
                                                <RadioGroup>
                                                    <Radio value={allOptions[1]} label={allOptions[1]}>{allOptions[1]}</Radio>
                                                </RadioGroup>
                                            })
                                            )
                                        }
                                    )}
                                    <div><b>Correct Answer: </b>{item.answer}</div>
                                    <div><span>Status: {myQuiz.status} </span> <span> {item.score}</span></div>
                                </ListGroup.Item>
                            ))}</ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Result;
