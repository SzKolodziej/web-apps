import React from "react";

interface InputProps{
    type: string,
    name: string,
    placeholder?: string,
    value?: string
    required?: boolean
    min?: number,
    max?: number,
    onChange?: (value: React.SetStateAction<string>) => void
}

const Input = ({type, name, placeholder, value, required, min, max, onChange}: InputProps)=>{
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(onChange){
            onChange(e.target.value)
        }
    }

    return(
        <label>
            <input type={type}
                   name={name}
                   placeholder={placeholder}
                   value={value}
                   required={required}
                   min={min}
                   max={max}
            onChange={handleChange}/>
        </label>
    )
}

export default Input