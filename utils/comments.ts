

export async function generateStatic() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/comments", {
      cache: "no-store",
    }).then((res) => res.json());
  
    return posts.slice(0, 5).map((params: any) => ({
      id: String(params.id),
    }));
  }


export  async function getComments() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
        {
          cache: "force-cache",
        }
      );
      const result = await response.json();
      return result
}