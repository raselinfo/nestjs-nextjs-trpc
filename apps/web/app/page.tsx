import Image from "next/image";
import { trpc } from "./trpc";
import ClientSide from "./ClientSide";

export default async function Home() {
  const response = await trpc.hello.query({
    name: "Rasel hossain",
  });
  console.log(response);
  return (
    <>
      <h1>Server side{response} </h1>
      <ClientSide />
    </>
  );
}
