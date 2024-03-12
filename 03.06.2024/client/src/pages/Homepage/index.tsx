import Input from "../../compoents/Input";
import Paragraph from "../../compoents/Paragraph";
import Headline from "../../Headline";
import React, {useState} from "react";

interface FormErrors {
    name?: string,
    surname?: string
}

const Homepage = ()=>{
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [selectStarter, setSelectStarter] = useState('Bulbasaur')
    const [errors, setErrors] = useState<FormErrors>({})

    const validateForms = ()=>{
        const errors: FormErrors = {}

        if(!name){
            errors.name = 'Name is required'
        }

        if(!surname){
            errors.surname = 'Surname is required'
        }

        return errors
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        const errors = validateForms()

        if(Object.keys(errors).length === 0){
            console.log('Form submitted: ', {name, surname, selectStarter})
        }
        else{
            e.preventDefault()
            setErrors(errors)
        }
    }

    return(
        <>
            <Headline text={'Welcome new Trainer'}/>

            <form onSubmit={handleSubmit} action='/' name='newTrainerForm'>
                <Headline text={'Create new Trainer'} level={2}/>

                {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                <Input type={'text'} name={'name'} placeholder={'NAME*'} onChange={setName}/>

                <br/>

                {errors.surname && <span style={{color: 'red'}}>{errors.surname}</span>}
                <Input type={'text'} name={'surname'} placeholder={'SURNAME*'} onChange={setSurname}/>

                <br/>

                <label>Select your starter:
                    <select name="selectStarter" onChange={(e)=>setSelectStarter(e.target.value)}>
                        <option value="Bulbasaur">Bulbasaur</option>
                        <option value="Charmander">Charmander</option>
                        <option value="Squirtle">Squirtle</option>
                    </select>
                </label>

                <br/>

                <Input type={'submit'} name={'submit'} value={'Submit'}/>

                <br/>

                <Paragraph/>
            </form>
        </>
    )
}

export default Homepage