import React, { useState } from 'react'
import styles from './index.module.css'

const Todo = () =>{

  const [value, setValue] = useState('')
  const [todoList, setTodoList] = useState([])

  const onInputChange = (event) =>{
    setValue(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 回车键被按下
      // 在这里执行你想要的操作
      setTodoList((prev) => [
        ...prev,
        {
          value,
          done: false,
          key: new Date().valueOf()
        }
      ])
      setValue('')
    }
  }

  return (
    <div className={styles.wrap}>
      <h2>React TODOList</h2>
      <input onKeyDown={handleKeyDown} onChange={onInputChange} value={value} type="text" />
      <ul>
        {
          todoList.map(item => {
            return (
              <li
                key={item.key}
              >
                {item.value}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todo