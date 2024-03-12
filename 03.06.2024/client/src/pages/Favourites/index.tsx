import Headline from "../../Headline";
import Input from "../../compoents/Input";
import Paragraph from "../../compoents/Paragraph";

const Favourites = ()=>{
    return(
        <>
            <Headline text={'Favourite Pokémon'}/>
            <form method='post' action='/favourites' name='favouritesForm'>
                <Headline text={'Tell us your favourite Pokémon'} level={2}/>
                <Input type={'text'} name={'trainerId'} placeholder={'TRAINER ID*'} required={true}/>
                <br/>
                <Input type={'text'} name={'pokemonName'} placeholder={'POKEMON NAME*'} required={true}/>
                <br/>
                <Input type={'text'} name={'type'} placeholder={'TYPE*'} required={true}/>
                <br/>
                <Input type={'submit'} name={'submit'} value={'Submit'}/>
                <br/>
                <Paragraph/>
                <Paragraph text={'If some trainer already have a favourite Pokémon it will be changed'}/>
            </form>
        </>
    )
}

export default Favourites