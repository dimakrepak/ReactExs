import react from 'react';


class Box4 extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box4">
                {this.props.name.toUpperCase()}
            </div>

        )
    }
}
export default Box4;