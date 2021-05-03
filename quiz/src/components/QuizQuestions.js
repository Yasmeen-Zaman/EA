import React, { useState } from "react";
import { Button, Container, Card, Form } from "react-bootstrap";
import { Radio, RadioGroup } from '@adobe/react-spectrum';
import data from './questions.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './Results';

let count = 0;
function QuizQuestions() {
    const correct = 0;
    const incorret = 0;
    let myQuiz = data;

    const [qId, setQId] = useState(data[0].id);
    const [questions, setQuestions] = useState(data[0].question);
    const [option, setOption] = useState(data[0].options[0]);
    const [answer, setAnswer] = useState(data[0].answer);
    const [status, setStatus] = useState(data[0].status);
    const [scores, setScores] = useState(data[0].score);

    function handleNext() {
        if (count >= data.length-1) {
            count = data.length;
            alert("Last Question!!!");
        } else {
            count++;
            setQId(data[count].id);
            setQuestions(data[count].question);
            setOption(data[count].options[0]);
            setAnswer(data[count].answer);
            setStatus(data[count].status);
            setScores(data[count].score);
        }
    }

    function handlePrevious() {
        if(count <= 0){
            alert("First Question!!!");
            count=0;
        } else {
            count--;
            setQId(data[count].id);
            setQuestions(data[count].question);
            setOption(data[count].options[0]);
            setAnswer(answer - 1);
            setStatus(status - 1);
            setScores(scores - 1);
        }
    }

    function handleSubmit(allData) {
        return <Results myQuiz={allData} />
    }

    const CheckAnswer = (e) => {
        if (myQuiz[count].answer === e) {
            myQuiz[count].score = "1";
            myQuiz[count].status = "Correct";
        } else {
            myQuiz[count].score = "0";
            myQuiz[count].status = "Incorrect";
        }
    }

    return (
        <Container>
            <h1 className="text-center">Quiz</h1>
            <Card>
                <Card.Title>Q#{qId}: {questions} </Card.Title>
                <Card.Body>
                    <Card.Text>
                        <RadioGroup>
                            {Object.entries(option).map((allOptions) => {
                                return <Radio value={option[1]} label={option[1]} onChange={() => CheckAnswer(allOptions[1])} />     
                                })
                            }
                        </RadioGroup>
                    </Card.Text>
                    <Form className="d-flex justify-content-evenly mb-3">
                        <Button id='prev' disabled={count<=0} className="p-2 btn btn-primary mx-2" onClick={handlePrevious}>Previous</Button>
                        <Button id='next' disabled={count>=data.length-1} className="p-2 btn btn-primary mx-2" onClick={handleNext}>Next</Button>
                        <Button id='submit' disabled={count < data.length-1} className="p-2 btn btn-primary mx-2" onClick={() => handleSubmit(data)}>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default QuizQuestions;