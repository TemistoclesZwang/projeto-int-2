import { useCustomContext } from "../c1";

export function SecondComponent() {
    const { value } = useCustomContext();
  
    return <div>Valor do Contexto: {value}</div>;
  }