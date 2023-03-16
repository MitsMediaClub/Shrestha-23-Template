import "../index.css";
import Card from "./Card";

export default function Schedule({ props }) {
  return (
    <div className="h-full w-full flex flex-wrap gap-5 justify-center sm:pl-16">
      <Card
        name={"Adrin"}
        date={"Lead Developer"}
        link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        button={true}
        bg={"cardback"}
      />
      <Card
        name={"Advaith"}
        date={"Boss Man"}
        link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        button={true}
        bg={"cardback"}
      />
      <Card
        name={"Joshua"}
        date={"Lead Designer"}
        link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        button={true}
        bg={"cardback"}
      />
      <Card
        name={"Anand"}
        date={"Lead Designer"}
        link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        button={true}
        bg={"cardback"}
      />
      <h1 className="hidden">Adrin</h1>
      <h1 className="hidden">Advaith</h1>
      <h1 className="hidden">Metopher</h1>
      <h1 className="hidden">Siddarth</h1>
      <h1 className="hidden">Amal</h1>
      <h1 className="hidden">Rohit</h1>
      <h1 className="hidden">VJ</h1>
      <h1 className="hidden">Abdu</h1>
    </div>
  );
}
