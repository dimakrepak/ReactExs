import react from 'react';
// import QuizTitle from './QuizTitle'

class Q2Title extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="q2-title">
                <h3>{this.props.name}</h3>
            </div>

        )
    }
}
export default Q2Title;