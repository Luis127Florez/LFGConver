
function useIngreso( user:string, pass:string) {
    
    //console.log(user +" "+ pass)
    let Data =  JSON.parse(localStorage.getItem("Users") || "[]") 
    let singIn = false
    let index = 0

    for (let i = 0; i < Data.length; i++) {
        if (Data[i].user == user && Data[i].pass == pass) {
            singIn = true
            index = i   
        }
    } 

    if (singIn) {
        window.location.href = `/Home/?index=${index}&user=${Data[index].user}`
    }else{
        alert("USTED NO ESTA REGISTRADO")
    }

    
}
export default useIngreso