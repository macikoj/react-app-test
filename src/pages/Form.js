import classes from './Form.module.css'
import classes_card from '../globalCSS/Card.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import useInput from '../hoks/use-input'
import { formActions } from '../store/form-Slice'
const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');
const Form = () => {
    const history = useHistory();

    const time = useSelector(state => state.time.time)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://baconipsum.com/api/?type=all-meat&paras=2")
            if (!response.ok) {
                throw new Error('Fetch data error');
            }
            const result = await response.json();
            textAreaChangeHandler(result[0])
        }
        fetchData()
    }, []);



    const dispatch = useDispatch();

    const {
        value: nameAndSurnameValue,
        isValid: nameAndSurnameIsValid,
        hasError: nameAndSurnameHasError,
        valueChangeHandler: nameAndSurnameChangeHandler,
        inputBlurHandler: nameAndSurnameBlurHandler,
    } = useInput(isNotEmpty);
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
    } = useInput(isEmail);
    const {
        value: textAreaValue,
        isValid: textAreaIsValid,
        hasError: textAreaHasError,
        valueChangeHandler: textAreaChangeHandler,
        inputBlurHandler: textAreaBlurHandler,
    } = useInput(isNotEmpty);

    let timeIsValid = false

    const seconds = parseInt(time.slice(-2))

    if ((seconds >= 10 && seconds <= 19) ||
        (seconds >= 30 && seconds <= 39) ||
        (seconds >= 50 && seconds <= 59)) {
        timeIsValid = false
    } else {
        timeIsValid = true
    }

    let formIsValid = false;

    if (nameAndSurnameIsValid && emailIsValid && textAreaIsValid && timeIsValid) {
        formIsValid = true;

    }

    const submitFormHandler = (event) => {
        event.preventDefault()

        if (!formIsValid) {
            return;
        }
        dispatch(formActions.submitForm({
            nameAndSurname: nameAndSurnameValue,
            email: emailValue,
            textArea: textAreaValue,
        }))
        history.push("/form-summary");


    }


    return (
        <div className={classes_card.card} style={{ height: '700px' }}>
            <div className={classes.formstyle}>
                <form onSubmit={submitFormHandler}>
                    <div className='control-group'>
                        <div>
                            <input type="text"
                                placeholder="Your Name and Surname"
                                value={nameAndSurnameValue}
                                onChange={nameAndSurnameChangeHandler}
                                onBlur={nameAndSurnameBlurHandler}
                            />
                            {nameAndSurnameHasError && <p className={classes.errortext}>Input is required.</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={emailValue}
                                onChange={emailChangeHandler}
                                onBlur={emailBlurHandler}
                            />
                            {emailHasError && <p className={classes.errortext}>Please enter a valid email address.</p>}
                        </div>
                        <div>
                            <textarea
                                rows='18'
                                placeholder="Type your Message"
                                maxlength="5000"
                                value={textAreaValue}
                                onChange={textAreaChangeHandler}
                                onBlur={textAreaBlurHandler}
                                style={{ resize: 'none' }}
                            />
                            {textAreaHasError && <p className={classes.errortext}>Input is required.</p>}
                            {!timeIsValid && <p className={classes.errortext}>You cannot send form right now.</p>}
                        </div>
                        <button className={classes.submit} disabled={!formIsValid}>Send
                        </button>

                    </div>
                </form>

            </div>
        </div>
    )
}
export default Form