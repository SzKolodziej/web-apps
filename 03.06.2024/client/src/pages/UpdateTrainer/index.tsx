import Headline from "../../Headline";
import Input from "../../compoents/Input";
import Paragraph from "../../compoents/Paragraph";

const UpdateTrainer = ()=>{
    return(
        <>
            <Headline text={'Update Trainer'}/>

            <form method='post' action='/updateTrainer/update' name='updateTrainerForm'>
                <Headline text={'Update trainer'} level={2}/>
                <Input type={'text'} name={'trainerId'} placeholder={'ID*'} required={true}/>
                <br/>
                <Input type={'text'} name={'newName'} placeholder={'NEW NAME'}/>
                <br/>
                <Input type={'text'} name={'newSurname'} placeholder={'NEW SURNAME'}/>
                <br/>
                <Paragraph text={'Starter can\'t be changed'}/>
                <br/>
                <Input type={'submit'} name={'submit'} value={'Submit'}/>
                <br/>
                <Paragraph/>
            </form>

            <form method='post' action='/updateTrainer/delete' className={'deleteTrainer'} name='deleteTrainerForm'>
                <Headline text={'Delete trainer'} level={2}/>
                <Input type={'text'} name={'trainerId'} placeholder={'ID'} required={true}/>
                <br/>
                <Input type={'submit'} name={'submit'} value={'Submit'}/>
                <br/>
                <Paragraph/>
            </form>
        </>
    )
}

export default UpdateTrainer