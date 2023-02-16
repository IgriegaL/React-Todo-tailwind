import {createContext} from 'react'

export const TaskContext = createContext()
// Se crea el provider que encapsula
export function TaskContextProvider(props) {
  return (
    <TaskContext.Provider>
        {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext