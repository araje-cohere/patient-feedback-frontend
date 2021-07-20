import React, { useState, useEffect } from "react";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css'

const MainForm = (props) => {
    const [feedback, setFeedback] = useState('');
    const [questionnare, setQuestionnare] = useState('');

    useEffect(() => {

    }, [questionnare]);

    const onFeedbackEntered = (e) => {
        const feedbackValue = e.target.value;
        setFeedback(feedbackValue);
    };

    const onSubmit = (e) => {
        // add fetch call here 
        props.history.push("/thanks");
    };

    return (
        <div>
            <Header />
            <div className="container">
                <form onSubmit={onSubmit}>
                    <h1>We'd love to hear from you!</h1>
                    <h4>Please provide feedback about your experience at blah for foo!</h4>
                    <textarea
                        className="form-control"
                        placeHolder="Enter your feedback here"
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