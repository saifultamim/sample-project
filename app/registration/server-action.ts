export async function userRegistration(formData:any) {
    try{
        console.log('formDara ',formData)
        const response = await fetch(
            `/api/registration`,
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
           return result;

    }catch(error){
        console.log('Registration server-action error : ',error)
    }

}


export async function getUser() {
  try{
      const response = await fetch(
          `/api/user`,
          {
            method: "GET",
          }
        );

         const result = await response.json();
         return result;

  }catch(error){
      console.log('Get User server-action error : ',error)
  }

}


export async function create () {
  try{
     const response = await fetch('/api/user',{method:"POST"})
     const result = await response.json()
     console.log('result ',result)
  }catch(error){
    console.log('error ',error)
  }
}

