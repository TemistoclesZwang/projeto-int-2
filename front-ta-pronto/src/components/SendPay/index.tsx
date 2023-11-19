// import { useCustomContext } from "../c1";

// export async function SendPay (menuId: string):Promise<string>{
// const { value } = useCustomContext();

//     try {
//       const response = await fetch('http://localhost:3000/users/order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({

//           email: value,
//           orderStatus: 'cancelado',
//           menuId:menuId,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Erro ao fazer o pedido');
//       }

//       console.log('Pedido feito com sucesso!');
//     } catch (error) {
//       // console.error(error.message);
//     }
// return('teste')
// };