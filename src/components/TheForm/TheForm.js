import "./TheForm.css";

const TheForm = (props) => {
    return (
        <form className="TheForm">
            {props.children}
            <button type="submit">{props.btnText}</button>
        </form>
    )
}

export default TheForm;