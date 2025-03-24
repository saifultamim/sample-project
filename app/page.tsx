import { generateStatic, getComments } from "@/utils/comments";

export async function generateStaticParams() {
  await generateStatic();
}

export default async function Home() {
  const data = await getComments();

  return (
    <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto mt-3">
      {data?.map((params: any, idx: number) => (
        <div className="border border-black" key={idx}>
          <p>{params.name}</p>
          <p>{params.email}</p>
          <p>{params.body}</p>
        </div>
      ))}
    </div>
  );
}
