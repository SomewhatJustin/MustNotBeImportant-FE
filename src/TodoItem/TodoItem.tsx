import './TodoItem.css'

export default function TodoItem(props) {

  function deleteItem() {
    props.dispatch({ type: "delete", payload: props.id })
  }

  function completeItem() {
    props.dispatch({ type: "complete", payload: props.id })
  }

  return (
    <div className='todo-item'>
      <button onClick={completeItem}>✔</button>
      <p>{props.title}</p>
      <p>{props.isComplete ? "complete" : "no"}</p>
      <button onClick={deleteItem}>-</button>
    </div>
  )
}