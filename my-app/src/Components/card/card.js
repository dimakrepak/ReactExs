// import './style.css'
const Card = (props) => {
    return (
        <div className="container">
            <img src={props.img}></img>
            <h2>{props.title}</h2>
            <p>{props.des}</p>
            <div className='SE'>
                <h3>
                    {props.share} {props.explore}
                </h3>
            </div>
        </div >
    )
}

export default Card;