import Headline from "../../Headline";
import Input from "../../compoents/Input";
import Paragraph from "../../compoents/Paragraph";

const Badges = ()=>{
    return(
        <>
            <Headline text={'Badges'}/>
            <form method='post' action='/badges' name='badgesForm'>
                <Headline text={'Which badges did you acquire'} level={2}/>
                <Input type={'text'} name={'trainerId'} placeholder={'TRAINER ID*'} required={true}/>
                <br/>
                <label>
                    <select name="badges">
                        <option value="1">Boulder Badge</option>
                        <option value="2">Cascade Badge</option>
                        <option value="3">Thunder Badge</option>
                        <option value="4">Rainbow Badge</option>
                        <option value="5">Soul Badge</option>
                        <option value="6">Marsh Badge</option>
                        <option value="7">Volcano Badge</option>
                        <option value="8">Earth Badge</option>
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

export default Badges