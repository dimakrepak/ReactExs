import react from 'react';
import Box4 from './box4';

class Box3 extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box3">
                <Box4 name={"itay"} />
                <Box4 name={"avi"} />
            </div>

        )
    }
}
export default Box3;