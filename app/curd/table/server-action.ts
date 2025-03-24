export default async function getProduct() {
  console.log('get prodcut')

  const response = await fetch('http://localhost:3000/api/curd/read',{
    method:"GET",
  })
  console.log('+++ ',await response.json())
  // try {
  //   const response = await fetch(
  //     `/api/curd/read`, 
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       cache: "no-cache",
  //     }
  //   );

  //   const result = await response.json();

  //   console.log('server-action');
  //   return result;
  // } catch (error) {
  //   console.log('Registration server-action error : ', error);
  // }
}
