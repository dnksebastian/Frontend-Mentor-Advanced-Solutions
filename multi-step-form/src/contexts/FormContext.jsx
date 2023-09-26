import { createContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

const FormContext = createContext();

export const FormContextProvider = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    selectedPlan: '',
    isYearly: false,
    addons: [],
});

const [ formLocalStorage, setFormLocalStorage ] = useLocalStorage("formStorage", {
    firstName: '',
    email: '',
    phone: '',
    selectedPlan: '',
    isYearly: false,
    addons: [],
});

console.log('context rendered');

useEffect(() => {
    if(formLocalStorage) {
        setFormData(formLocalStorage)
    }
    
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


useEffect(() => {
    setFormLocalStorage(formData)
}, [formData, setFormLocalStorage])

  

  return (
    <FormContext.Provider value={[formData, setFormData]}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
