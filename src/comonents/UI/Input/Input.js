import React from 'react'
import classes from './Input.module.css'

function isInvalid({valid, sholdValidate, touched}){
    return !valid && sholdValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor = `${inputType}-${Math.random()}`

    if(isInvalid(props)){
        cls.push(classes.invalid)
    }
    if(props.onName){
        if(props.onClickPropsRegister){
        cls.push(classes.isVisibality)
        }else{
            cls.push(classes.isNotisVisibality)
        }
    
    }
 
    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
    {
        isInvalid(props)
        ? <span>{props.errorMassage || 'Введите верное значение'}</span>
        : null
    }
        </div>
    )
}



export default Input