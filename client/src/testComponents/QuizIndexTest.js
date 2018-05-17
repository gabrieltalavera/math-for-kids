import React from 'react';
import { Link } from 'react-router-dom';

function QuizIndex (props) {
  const { quizes = [] } = props;

     return(
      <div className="QuizIndex">

        <table id="quizes-table">
          <tbody>
            <tr>
              <th></th>
              <th>Date</th>
              <th>No Of Expressions</th>
              <th>Right Answers</th>
              <th>Time</th>
            </tr>
            {
              quizes.map((quiz,index) => {
              return(
                <tr key={index} id={`row${index}`}>
                    <td>{index + 1}</td>
                    <td>{(quiz.date).slice(0,10)}</td>
                    <td>{quiz.expression_count}</td>
                    <td>{quiz.right_answer_count}</td>
                    <td>{quiz.time}</td>
                    <td>
                      <Link to={`/quizes/show/${quiz.id}`}>Repeat Quiz</Link>
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
     )
}

export default QuizIndex;