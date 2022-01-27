import React, { useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal"
import classes from './UserList.module.css'

const UserList = (props) => {
    const [modalWindow, setModalWindow] = useState(null)
    const [usersFilter, setUsersFilter] = useState()

    const removeHandler = (event) => {
        setUsersFilter(props.users.filter((user) => user.id !== event.target.id))
        setModalWindow({ title: 'Note', message: 'are you sure' })
    }
    const removeDataHandler = () => {
        props.onGetFilteredData(usersFilter)
        setModalWindow(null)
    }
    const cancelRemove = () => {
        setModalWindow(null)
    }
    let addTitle = <h5>No Users</h5>

    if (props.users.length > 0) {
        addTitle = props.users.map((user) => (
            <li
                key={user.id}>
                {user.name} ({user.age} years old)
                <Button id={user.id} className={classes.button} onClick={removeHandler}>Delete</Button>
            </li >
        ))
    }

    return (
        <Card className={classes.users}>
            {modalWindow && (
                <ErrorModal title={modalWindow.title} message={modalWindow.message} onConfirm={removeDataHandler} >
                    <Button onClick={cancelRemove}>Cancel</Button>
                </ErrorModal>)}
            <ul>
                {addTitle}
            </ul>
        </Card>
    )
}
export default UserList;
