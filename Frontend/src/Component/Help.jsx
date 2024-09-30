import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Help.css';

const Help = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const toggleHelpBox = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newQuestion) {
      setError('Please enter a question.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/help', {
        question: newQuestion,
      });
      setQuestions([...questions, response.data]);
      setNewQuestion('');
      setError('');
      setSuccess('Question submitted successfully!');
    } catch (error) {
      console.error('Error submitting question:', error);
      setError('Failed to submit the question.');
    }
  };

  return (
    <div>
      <div className="help-button">
        <button className="circle-button" onClick={toggleHelpBox}>
          ?
        </button>
        <div className={`help-box ${isOpen ? 'active' : ''}`}>
          <h3>Frequently Asked Questions</h3>
          {questions.length > 0 ? (
            <ul>
              {questions.map((question) => (
                <li key={question._id}>{question.question}</li>
              ))}
            </ul>
          ) : (
            <p>No questions available.</p>
          )}
          <div className="submit-question">
            <h3>Have a question?</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Type your question here..."
              ></textarea>
              <button type="submit">Submit</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
