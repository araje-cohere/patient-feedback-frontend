import React, { useState, useEffect } from "react";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css';
import qs from 'qs';

const apiUrl = 'http://localhost:1738';

const MainForm = (props) => {
    // console.log(props.location.search);
    const [feedback, setFeedback] = useState('');
    const [questionnaire, setQuestionnaire] = useState();

    var qid = qs.parse(props.location.search, { ignoreQueryPrefix: true }).questionnaireID;
    
    useEffect(() => {
        if (props.location.search) {
            // var qid = qs.parse(props.location.search, { ignoreQueryPrefix: true }).questionnaireID;
            console.log(qid)
            fetch(`${apiUrl}/patientQuestionnaire/${qid}`, { mode: 'no-cors' })
                .then(response => response.json())
                .then((data) => {
                    setQuestionnaire(data);
                    // console.log("Success: ", data);
                })
                .catch((error) => {
                    console.error("Error: ", error);
                });

            setQuestionnaire(qid);
        }
    }, [questionnaire, props.location.search, qid]);

    const onFeedbackEntered = (e) => {
        const feedbackValue = e.target.value;
        setFeedback(feedbackValue);
    };

    const onSubmit = (e) => {
        // make a PUT request here to the DB
        fetch(`${apiUrl}/`, {
            method: 'PUT',
            body: {
                id: qid,
                response: feedback
            }
        })
        .then(response => response.json())
        .then(() => {
            props.history.push("/thanks");
        })
        .error(err => console.log(err))

    };

    return (
        <div>
            <Header />
            <div className="container">
                <form onSubmit={onSubmit}>
                    <h1>We'd love to hear from you!</h1>
                    <h4>Please provide feedback about your experience at blah for foo!</h4>
                    {/* <h4>{questionnaire}</h4> */}
                    <textarea
                        className="form-control"
                        placeholder="Enter your feedback here"
                        value={feedback}
                        onChange={onFeedbackEntered}
                    >
                    </textarea>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainForm;