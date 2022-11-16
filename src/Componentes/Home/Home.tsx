import './Home.css'
function Home (params:any) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const usuario = urlParams.get('user');
    const index = urlParams.get('index');

    const Data =  JSON.parse(localStorage.getItem("Users") || "[]") 

    const permisos = Data[ index || ""].compani
    console.log(permisos)

    function enviar (params:any) {
        window.location.href = `/${params}`
    }


    return(
        <div className="Home">
            <p>Hello {usuario} </p>
            <select defaultValue={'DEFAULT'} className='select' onChange={e => enviar(e.currentTarget.value)} >
                <option value="DEFAULT" disabled>Choose an available option ...</option>
                {permisos.map((x: any, index: number)=>{
                    return <option  key={index} value={x} > {x} </option>
                })}
         
            </select>
        </div>
    )
}

export default Home