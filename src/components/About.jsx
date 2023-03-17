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
        cardback={"cardback"}
      />
      <Card
        name={"Advaith"}
        date={"Boss Man"}
        link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        button={true}
        bg={"cardback"}
        cardback={"cardback"}
      />
      <Card
        name={"Joshua"}
        date={"Lead Designer"}
        link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        button={true}
        bg={"cardback"}
        cardback={"cardback"}
      />
      <Card
        name={"Anand"}
        date={"Lead Designer"}
        link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        button={true}
        bg={"cardback"}
        cardback={"cardback"}
      />
    </div>
  );
}
