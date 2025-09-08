import { createContext } from "react";

interface FormContextProps {
    value?: Record<string, any>;
    //设置初始值
    setValues?: (values: Record<string, any>) => void;
    onValueChange?: (key: any, value: any) => void;
    validateRegister?: (name: string, cb: Function) => void,
}


export const FormContext = createContext<FormContextProps>({})
