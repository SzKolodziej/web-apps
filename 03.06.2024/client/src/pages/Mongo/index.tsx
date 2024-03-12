import Headline from "../../Headline";
import Input from "../../compoents/Input";
import Paragraph from "../../compoents/Paragraph";

const Mongo = ()=>{
    return(
        <>
            <Headline text={'Mongo'}/>
            <form method='post' action='/mongo' name='mongoForm'>
                <Headline text={'Mongo'} level={2}/>
                <Input type={'text'} name={'name'} placeholder={'NAME*'} required={true}/>
                <br/>
                <Input type={'text'} name={'surname'} placeholder={'SURNAME*'} required={true}/>
                <br/>
                <Input type={'number'} name={'age'} placeholder={'AGE*'} min={0} max={150}/>
                <br/>
                <Input type={'submit'} name={'submit'} value={'Submit'}/>
                <br/>
                <Paragraph/>
            </form>
        </>
    )
}

export default Mongo