import FlippableCard from "./flippable-card";
import "../index.css";

export default function Schedule() {
  return (
    <div className="h-full w-full flex flex-wrap gap-5 justify-center pt-20 ">
      <FlippableCard />
      <FlippableCard />
      <FlippableCard />
      <FlippableCard />
    </div>
  );
}
