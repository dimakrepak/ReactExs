import react from 'react';
import Box2 from "./box2";

class Box1 extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box1">
                <Box2></Box2>

            </div>

        )
    }
}
export default Box1;