import React, {useState} from 'react'

interface FormErrors{
    email?: string
    checkbox?: string
    message?: string
}

export default function Contact(){
    const [email, setEmail] = useState('')
    const [topic, setTopic] = useState('Topic1')
    const [checkboxChecked, setCheckboxChecked] = useState(false)
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState<FormErrors>({})
    const [messageSent, setMessageSent] = useState(false)

    const validateForm = ()=>{
        const errors: FormErrors = {}

        if(!email){
            errors.email = 'Email is required'
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = 'Invalid email address'
        }

        if(!checkboxChecked){
            errors.checkbox = 'You must check the checkbox'
        }

        if(message.length < 20){
            errors.message = 'Message is too short'
        }

        return errors
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const errors = validateForm()

        if(Object.keys(errors).length === 0){
            console.log('Form submitted: ', {email, topic, message})
            setMessageSent(true)
        }
        else{
            setErrors(errors)
        }
    }

    if(messageSent){
        return <h1>Your message has been sent</h1>
    }

    return(
        <>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='email'>Email: </label>
                <input type='email'
                       name='email'
                       id='email'
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

                <br/>

                <label htmlFor='topic'>Topic: </label>
                <select name='topic'
                        id='topic'
                        value={topic}
                        onChange={(e)=>setTopic(e.target.value)}>
                    <option>Topic 1</option>
                    <option>Topic 2</option>
                    <option>Topic 3</option>
                    <option>Topic 4</option>
                    <option>Topic 5</option>
                </select>

                <br/>

                <input type='checkbox'
                       name='checkbox'
                       id='checkbox'
                       checked={checkboxChecked}
                       onChange={(e)=>setCheckboxChecked(e.target.checked)}
                />
                <label htmlFor='checkbox'>I agree to process my personal data</label>
                {errors.checkbox && <span style={{ color: 'red' }}>{errors.checkbox}</span>}

                <br/>

                <label htmlFor={'message'}>Message</label>
                <textarea name='message'
                          id={'message'}
                          value={message}
                          onChange={(e)=>setMessage(e.target.value)}
                />
                {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}

                <br/>

                <button name='submit'>Send</button>
            </form>
        </>
    )
}