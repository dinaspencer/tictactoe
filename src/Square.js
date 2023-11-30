export default function Square (props) {

    const squareStyles= {
        height: "140px",
        width: "140px",
        
    }
    return (
        <button style={squareStyles} className="square">{props.value}</button>
    )
}