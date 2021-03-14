import react from 'react';

class QuizTitle extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="quiz-title">
                <h1>{this.props.name}</h1>
            </div>

        )
    }
}
export default QuizTitle;