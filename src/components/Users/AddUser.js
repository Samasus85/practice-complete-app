import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = () => {
    return (
        <Card className={classes.input}>
            <form >
                <label htmlFor='username' >Username</label>
                <input id='username' type='text' />
                <label htmlFor='age' >Age</label>
                <input id='age' type='number' />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>

    )
}
export default AddUser;
