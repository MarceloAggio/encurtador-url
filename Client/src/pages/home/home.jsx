import React from "react";
import { useEffect, useState } from "react";
import './home.css'
import Input from "../../components/input/input";
import Button from "../../components/button/button";

function Home() {

   const [longUrl, setlongUrl] = useState('');
   const [slug, setSlug] = useState('');

   function handleSubmit(event) {
      event.preventDefault();

      fetch(`http://localhost:4000/api/url`, {

         method: 'post',
         body: JSON.stringify({longUrl}),
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },

      }).then((response) => response.json()).then((data) => {

         setSlug(data.slug);

      })

   }

   return (
      <>
         <div className="container">
            <h3 className="titulo">Encurtador de URL's</h3>
            <form onSubmit={handleSubmit}>
               <Input
                  type="text"
                  name={"longUrl"}
                  value={longUrl}
                  placeholder="Digite sua URL"
                  onchange={(event) => {
                     var valueLongUrl = event.target.value
                     setlongUrl(valueLongUrl);
                     if(valueLongUrl.length <= 0){
                         setSlug();
                     }
                 }}
               />
               <Button type={"submit"} propsBtn={'Gerar Link'} />
            </form>
            {slug && (<h4 className="link">Link gerado: <button className="buttonCopiar" onClick={()=>navigator.clipboard.writeText(`http://localhost:4000/api/${slug}`)}>http://localhost:4000/api/{slug}</button><p className="cliqueCopiar">(clique para copiar)</p></h4>)}
            
            <a className="link linkUrl" href="http://localhost:5173/buscarurl">Ver quantos acessos o link teve</a>
         </div>
      </>
   )
}
export default Home;