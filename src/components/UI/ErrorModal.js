import Button from "./Button"
import Card from "./Card"
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
    return (
        <div>
            <div onClick={props.onConfirm} className={classes.backdrop} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2> {props.title}</h2>
                </header>
                <div>
                    <p> {props.message}</p>
                </div>
                <Button onClick={props.onConfirm}>Okay</Button>
            </Card>
        </div>

    )
}
export default ErrorModal;
