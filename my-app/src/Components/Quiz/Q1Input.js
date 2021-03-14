import react from 'react';

class QuizInput extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="quiz-input">
                <input type='range'></input>
            </div>

        )
    }
}
export default QuizInput;