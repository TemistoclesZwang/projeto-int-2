import { useCustomContext } from "../c1";

export function SecondComponent() {
    const { email } = useCustomContext();
  
    return <div>Valor do Contexto: {email}</div>;
  }