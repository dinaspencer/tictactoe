import Square from "./Square";

export default function Board (props) {
    
    return (
        <div>
        {props.values.map((rowValues, index) => {
          let row = rowValues.map((value, column) => {
            
            return <Square key={index + "-" + column} value={value} />
          })
          return <div key={row + index}>{row}</div>
        }
        )}
       </div>
    )
}