import react from 'react';
import './style.css';
import QuizTitle from './QuizTitle'
import Q1 from './Q1'
import Q2 from './Q2'

class Quiz extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <QuizTitle name={"How Do You Like Front End"} />
                <Q1 />
                <Q2 />
            </div>

        )
    }
}
export default Quiz;