import react from 'react';
// import QuizTitle from './QuizTitle'

class Q1Title extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="q1-title">
                <h3>{this.props.name}</h3>
            </div>

        )
    }
}
export default Q1Title;