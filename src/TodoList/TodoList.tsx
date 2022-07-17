import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList(props) {
  console.log(props.state)
  const todoEls = props.state.map(thing => {
    return <TodoItem title={thing.title} dispatch={props.dispatch} id={thing.id} isComplete={thing.isComplete} />
  })


  return (
    <div>
      {todoEls}
    </div>
  )
}