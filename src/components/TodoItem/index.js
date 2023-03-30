import './index.css'

const TodoItem = props => {
  const {details, deleteList} = props
  const {title, id} = details

  const onDelete = () => {
    deleteList(id)
  }

  return (
    <li className="simple-list">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
