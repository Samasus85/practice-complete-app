import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(null)

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value)
    }
    const userAgeChangeHandler = (event) => {
        setAge(event.target.value)
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and age (non empty values)',
            })
            return;
        }
        if (+age < 1) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and age (age <0)',
            })
        }
        props.onAddUserHandler(userName, age);

        setUserName('');
        setAge('');
    };
    const errorHandler = () => [
        setError(null)
    ]
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username' >Username</label>
                    <input id='username' type='text' value={userName} onChange={userNameChangeHandler} />
                    <label htmlFor='age' >Age</label>
                    <input id='age' type='number' value={age} onChange={userAgeChangeHandler} />
                    <Button type='submit'>Add User</Button>

                </form>
            </Card>

        </div>
    )
}
export default AddUser;
