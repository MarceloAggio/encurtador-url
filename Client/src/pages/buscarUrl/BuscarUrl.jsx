import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import './buscarUrl.css';

function BuscarUrl() {

    const [slug, setSlug] = useState('');
    const [click, setClick] = useState();

    function handleSubmit(event){
        event.preventDefault();

        fetch(`http://localhost:4000/api/clicks/${slug}`).then((response)=>response.json()).then((data)=>{
            setClick(data.clicks);
        })

    }

    return (
        <>
            <div className="containerBuscarUrl">
                <h3 className="tituloBuscarUrl">Veja quantos clicks seu link teve:</h3>
                <form onSubmit={handleSubmit}>
                    <Input
                        value={slug}
                        type="text"
                        name={"slug"}
                        placeholder="Digite seu Slug"
                        onchange={(event) => {
                            var valueSlug = event.target.value
                            setSlug(valueSlug);
                            if(valueSlug.length <= 0){
                                setClick();
                            }
                        }}
                    />
                    <Button type={"submit"} propsBtn={'Buscar'} />
                </form>
                {click && (<h4 className="clicksLink">Clicks no link: {click}</h4>)}
                <a className="link linkUrl" href="http://localhost:5173/">Retornar a pagina principal</a>
            </div>
        </>
    )
}

export default BuscarUrl;