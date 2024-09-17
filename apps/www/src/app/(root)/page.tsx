import Mail from "@/app/@mail/page";
import Chat from "@/app/@chat/page";
import Photos from "@/app/@photos/page";
import Main from "@/app/(root)/_components/Main/Main";

export default function Home() {
  return (
    <section className="flex flex-col justify-between p-4 mx-auto container">
      <Main
        mailApp={<Mail />}
        chatApp={<Chat />}
        photosApp={<Photos/>}
      />
    </section>
  );
}
