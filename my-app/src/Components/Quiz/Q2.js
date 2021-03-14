import react from 'react';
import Q2Title from './Q2Title'
import Q2Input from './Q2Input'

class Q2 extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="q2">
                <Q2Title name={"How much you like front end ?"} />
                <Q2Input></Q2Input>
            </div>

        )
    }
}
export default Q2;