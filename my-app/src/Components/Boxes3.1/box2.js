import react from 'react';
import Box3 from './box3';

class Box2 extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box2">
                <Box3></Box3>
            </div>

        )
    }
}
export default Box2;