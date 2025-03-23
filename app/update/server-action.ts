
export async function userEdit(id:number) {
    try{
        console.log('formDara ',id)
        const response = await fetch(
            `/api/edit`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(id),
              cache: "no-cache",
            }
          );

           const result = await response.json();
           return result;

    }catch(error){
        console.log('Registration server-action error : ',error)
    }

}

export async function userDelete(id:number) {
  try{
      console.log('formDara ',id)
      const response = await fetch(
          `/api/delete`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(id),
            cache: "no-cache",
          }
        );

         const result = await response.json();
         return result;

  }catch(error){
      console.log('Registration server-action error : ',error)
  }

}