import Mail from "@/app/@mail/page";
import Main from "@/app/_components/Main/Main";
import Chat from "@/app/@chat/page";

export default function Home() {
  return (
    <section className="title flex flex-col justify-between p-4 mx-auto container">
      <Main
        mailApp={<Mail />}
        chatApp={<Chat />}
        photosApp={<div>Photos App</div>}
      />
    </section>
  );
}
