import react from 'react'

export default function HideandSeek() {
    const [state, setState] = react.useState({
        name: 'yellow',
    })
    const clickEvent = () => {
        console.log(state)
        if (state.name === 'yellow') {
            setState({
                name: 'none',
            })
        } else if (state.name === 'none') {
            setState({
                name: 'yellow',
            })
        }
    }

    return (
        <div>
            <button onClick={clickEvent}>
                show/hide
            </button>
            <div className={state.name}></div>
        </div>
    )
}
