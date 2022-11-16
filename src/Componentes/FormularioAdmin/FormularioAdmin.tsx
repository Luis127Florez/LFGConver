import { useEffect, useState } from "react";
import "./FormularioAdmin.css";

function FormularioAdmin(params: any) {
  const [Empresas, setEmpresa] = useState<string[]>([]);

  function quitar(param: any) {
    if (Empresas.length == 1) {
      setEmpresa([]);
    } else {
      for (let i = 0; i < Empresas.length; i++) {
        if (Empresas[i] == param) {
          Empresas.splice(i, i);
          setEmpresa([...Empresas])
          console.log(Empresas)
        }
      }
    }
  }

  function AgrearPermiso(params: string) {
    setEmpresa([...Empresas, params]);
    /* const lista = document.querySelector("#lista")
        if (lista) {
            lista.innerHTML += `<li>${params}</li><input  onChange={quitar(${params})} type="checkbox" checked={actualChecked} className="checkbox-round" />` 
        }  */
  }

  function GuardarDatos(params: any) {
    const Data = JSON.parse(localStorage.getItem("Users") || "[]");
    const obj = {
      user: params.target.user.value,
      pass: params.target.pass.value,
      role: params.target.role.value,
      compani: Empresas,
    };
    Data.splice(Data.length, 0, obj);
    localStorage.setItem("Users", JSON.stringify(Data));
    alert("Datos guardados");

    params.preventDefault();
  }

  return (
    <div className="FormularioAdmin">
      <form onSubmit={GuardarDatos} className="FormAdmin">
        <h3> Formulario Admin </h3>
        <input
          className="inputText"
          placeholder="role"
          name="role"
          type="text"
        />
        <input
          className="inputText"
          placeholder="User"
          name="user"
          type="text"
        />
        <input
          className="inputText"
          placeholder="Password"
          name="pass"
          type="text"
        />

        <select
          className="inputText"
          defaultValue={"DEFAULT"}
          onChange={(e) => AgrearPermiso(e.currentTarget.value)}
        >
          <option value="DEFAULT" disabled>
            provide access...
          </option>
          <option value="FormularioAdmin">Formulario de Administrador</option>
          <option value="Empresa1">Empresa1</option>
          <option value="Empresa2">Empresa2</option>
        </select>

        <input className="btn" type="submit" />
      </form>
      <p>Access</p>
      <ol id="lista">
        {Empresas.map((x, index) => {
          return (
            <div key={index}>
              <li> {x} </li>
              <button onClick={() => quitar(x)}>x</button>
            </div>
          );
        })}
      </ol>
    </div>
  );
}
export default FormularioAdmin;
