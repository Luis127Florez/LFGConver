import { data } from 'jquery';
import { useEffect, useState } from 'react';
import './Compani1.css'


function Compani1 (params:any) {

    const [ValorFinal, setValorFinal] = useState(0)
    const [Monedas, setMonedas] = useState<[]>([]);
    const [NombreMonedas, setNombreMoneda] = useState<[]>([]);





    const myHeaders = new Headers();
    myHeaders.append("apikey", "RvWxggo5HfKOeR7C6UO0tsJhokhxL6ZY")

    function Convertir(params:any) {
        params.preventDefault();
        const ValorAConvertir = params.target.ValorAConvertir.value
        const MonedaAConvertir = params.target.MonedaAConvertir.value
        const convertia = params.target.convertia.value
        console.log(params.target.ValorAConvertir.value)
        console.log(params.target.MonedaAConvertir.value)
        console.log(params.target.convertia.value)
        fetch( `https://api.apilayer.com/exchangerates_data/convert?to=${convertia}&from=${MonedaAConvertir}&amount=${ValorAConvertir}`, {method: 'GET', redirect: 'follow', headers: myHeaders})
        .then((response:any) => response.text())
        .then((result:any) =>  setValorFinal(JSON.parse(result).result))
        .catch((error:any) => console.log('error', error)); 
    }

    useEffect(()=>{
        const host = 'api.frankfurter.app';
        let Moneda:any = []
        let NombreMoneda:any  = [] 
        fetch(`https://${host}/currencies`)
          .then(resp => resp.json())
          .then((data) =>   {    
            for (const i in data) {
                NombreMoneda.push(data[i])
                Moneda.push(i)
            }
            setMonedas(...Monedas, Moneda) 
            setNombreMoneda(...NombreMonedas, NombreMoneda)
        })
      },[])



    return(
        <div className='ConvertidorDeMoneda'>
            <h2>Convertidor de moneda:</h2>
            <form onSubmit={Convertir}>
                <div className="div1">
                    <label htmlFor="">
                    Valor a Convertir
                    <input type="text" name='ValorAConvertir' className='ValorAConvertir'/>
                    </label>
                    <select name='MonedaAConvertir'  defaultValue={'DEFAULT'} className="MonedaAConvertir" id="">
                        <option disabled value="DEFAULT">Elegir..</option>
                        {Monedas.map((x:any , index:number)=>  <option key={index} value={x}> {NombreMonedas[index]} </option> )}
                        <option  value="COP">Peso Colombiano</option>
                    </select>
                </div>
                <div className='div2'>
                    <label>
                    Convertir a:
                    <select name='convertia' defaultValue={'DEFAULT'} className='convertia' >
                        <option disabled value="DEFAULT">Elegir..</option>
                        {Monedas.map((x:any , index:number)=>  <option key={index} value={x}> {NombreMonedas[index]} </option> )}
                        <option  value="COP">Peso Colombiano</option>
                    </select>
                    </label>
                </div>
                <input  className='btn'  type="submit" value="Convertir" />
            </form>
            
            <label htmlFor="" className='labelValorAConvertir'>
            El Valor Convertido es : {ValorFinal}
            </label>
        </div>
    )
}
export default Compani1
