import { redirect } from "next/navigation";


const Success: NextPage<{}> = async () => {
    redirect("/");

    return (
    <main className="flex min-h-screen justify-center p-10">
    ServerComponent
    </main>
  );
};

export default Success;
