import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Input from './Input/Input'
import TodoList from './TodoList/TodoList'
import { nanoid } from 'nanoid'


function App() {

  interface TodoListItem {
    title: "",
    id: String,
    createdAt: Date,
    isComplete: boolean
  }

  const initialState = []

  function reducer(state, action) {
    switch (action.type) {
      case 'addItem':
        return [...state, { title: action.payload, createdAt: new Date(), isComplete: false, id: nanoid() }]
      case 'delete':
        return state.filter(item => item.id !== action.payload)
      case 'complete':
        return state.map(item => {
          if (item.id === action.payload) {
            return { ...item, isComplete: !item.isComplete }
          } else {
            return item
          }
        })
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <Input dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  )
}

export default App
