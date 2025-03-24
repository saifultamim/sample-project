export default async function productCreate(formData:any) {
    try{
        const response = await fetch(
            `/api/curd/create`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({...formData }),
              cache: "no-cache",
            }
          );

           const result = await response.json();
     
        console.log('server-action ',formData)
        return result;

    }catch(error){
        console.log('Registration server-action error : ',error)
    }

}
