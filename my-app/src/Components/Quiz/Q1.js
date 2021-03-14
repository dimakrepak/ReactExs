import react from 'react';
import Q1Title from './Q1Title'
import Q1Input from './Q1Input'

class Q1 extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="q1">
                <Q1Title name={"How much you like front end ?"} />
                <Q1Input></Q1Input>
            </div>

        )
    }
}
export default Q1;