import React, { useState } from "react";
import { Card, Container, InputGroup, FormControl } from "react-bootstrap";
import data from "./questions.json";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
    const [currentQstn, setCurrentQstn] = useState(0);
	const [showScores, setShowScores] = useState(false);
	const [scores, setScores] = useState(0);
    

    const handleOptionSelected = (answer) => {
        if (answer) {
            setScores(scores + 1);
        }
        const nextQstn = currentQstn +1;
        if(nextQstn < data.length){
            setCurrentQstn(nextQstn);
        } else {
            setShowScores(true);
        }
    }

    function data1(optVal) {
        return (
            Object.values(optVal).map((opt) =>
                <form>
                    <div className='options'>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Radio  />
                            </InputGroup.Prepend>
                            <FormControl value={opt}/>
                        </InputGroup>
                    </div>
                    
                </form>

            )
        );
    }
    return (
        <Container>
            {showScores ? (
            <div className='score-section'>
            You scored {scores} out of {data.length}
        </div>
    ) : (
        <>
            <Card>
                <Card.Header floated='center'>Quiz</Card.Header>
                <Card.Body>
                    {data.map((questionData, index) => (
                        <Card.Title>Q#{questionData.id} {questionData.question}
                            <Card.Text>{questionData.options.map(data1)}</Card.Text>
                            <Button floated="left">Previous</Button>
                            <Button floated="right">Next</Button>
                        </Card.Title>
                    ))} 
                </Card.Body>
            </Card>
            </>
            )}
    </Container>
        
    )
}
