import { useState, useEffect } from "react";

const DropdownComponent = ({title, options, values, defaultOptIndex=0, handleChange, styles=[]} ) => {
   const [opt, setOptions] = useState()
   useEffect( () => {
        showComponent()
   },[])
   const generateComponent = () =>{
        return new Promise((resolve, reject) => {
            resolve(
                options.map((opt, index)=>(
                    <option key={index+1} value = {values? values[index]: opt} style={ styles.length > 0 ? styles[index] : {} }>
                        {opt}
                    </option>
                ))
            )
        })
   }
  
   const showComponent = async () => {
        await generateComponent().
        then((component)=>
                setOptions(
                    <select style={{float:'inline-end',display:'flex'}} defaultValue = {options[defaultOptIndex]} onChange={handleChange}>
                        {component}
                    </select>
                )
            )
   }
    return(
        <>
        <span>{title}</span>
            {opt}
          </>
    )
}
export default DropdownComponent;