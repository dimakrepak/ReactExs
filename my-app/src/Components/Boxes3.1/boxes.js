import react from 'react';
import Box1 from './box1';
import './style.css';

class ContainerBox extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Box1></Box1>
            </div>

        )
    }
}
export default ContainerBox;
