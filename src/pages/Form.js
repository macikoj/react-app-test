import classes from './Form.module.css'
import classes_card from '../globalCSS/Card.module.css'
import { useDispatch } from 'react-redux'

import { useHistory} from 'react-router-dom';
import { useEffect, useState } from 'react';
import useInput from '../hoks/use-input'
const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');
const Form = () => {
    const history = useHistory();

    useEffect(async () => {
        const response = await fetch(
            "https://baconipsum.com/api/?type=all-meat&paras=2")
        if (!response.ok) {
            throw new Error('Fetch data error');
        }
        const result = await response.json();
        textAreaChangeHandler(result[0])
    }, []);

    const dispatch = useDispatch();

    const {
        value: nameAndSurnameValue,
        isValid: nameAndSurnameIsValid,
        hasError: nameAndSurnameHasError,
        valueChangeHandler: nameAndSurnameChangeHandler,
        inputBlurHandler: nameAndSurnameBlurHandler,
        reset: resetNameAndSurname,
    } = useInput(isNotEmpty);
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmai,
    } = useInput(isEmail);
    const {
        value: textAreaValue,
        isValid: textAreaIsValid,
        hasError: textAreaHasError,
        valueChangeHandler: textAreaChangeHandler,
        inputBlurHandler: textAreaBlurHandler,
        reset: resetTextArea,
    } = useInput(isNotEmpty);

    let formIsValid = false;

    if (nameAndSurnameIsValid && emailIsValid && textAreaIsValid) {
        formIsValid = true;
    }

    const submitFormHandler = (event) => {
        event.preventDefault()

        if (!formIsValid) {
            return;
        }
        dispatch({
            type: 'submitForm',
            nameAndSurname: nameAndSurnameValue,
            email: emailValue,
            textArea: textAreaValue
        })
        history.push("/form-summary");


    }


    const nameAndSurnameClasses = nameAndSurnameHasError ? 'form-control invalid' : 'form-control';
    const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
    const textAreaClasses = textAreaHasError ? 'form-control invalid' : 'form-control';



    return (
        <div className={classes_card.card} style={{ height: '700px' }}>
            <div className={classes.formstyle}>
                <form onSubmit={submitFormHandler}>
                    <div className='control-group'>
                        <div className={nameAndSurnameClasses}>
                            <input type="text"
                                placeholder="Your Name and Surname"
                                value={nameAndSurnameValue}
                                onChange={nameAndSurnameChangeHandler}
                                onBlur={nameAndSurnameBlurHandler}
                            />
                            {nameAndSurnameHasError && <p className={classes.errortext}>Input is required.</p>}
                        </div>
                        <div className={classes.emailClasses}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={emailValue}
                                onChange={emailChangeHandler}
                                onBlur={emailBlurHandler}
                            />
                            {emailHasError && <p className={classes.errortext}>Please enter a valid email address.</p>}
                        </div>
                        <div className={textAreaClasses}>
                            <textarea
                                rows='18'
                                placeholder="Type your Message"
                                maxlength="5000"
                                value={textAreaValue}
                                onChange={textAreaChangeHandler}
                                onBlur={textAreaBlurHandler}
                            />
                            {textAreaHasError && <p className={classes.errortext}>Input is required.</p>}

                        </div>
                        <button className={classes.submit} disabled={!formIsValid}>send
                        </button>

                    </div>
                </form>

            </div>
        </div>
    )
}
export default Form