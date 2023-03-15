import { useParams } from "react-router-dom";
const Links = [
  [
    "/src/assets/Description/Adaptune/1.png",
    "/src/assets/Description/Adaptune/2.png",
    "/src/assets/Description/Adaptune/3.png",
  ],
  [],
  [],
  [],
  [],
];

const Description = () => {
  const { no } = useParams();
  const imageList = Links[no];
  const [one, two, three] = imageList;
  return (
    <div className="h-full flex  flex-col items-center gap-5 overflow-y-auto pb-0 radial  sm:w-full sm:overflow-x-hidden sm:scrollbar overflow-x-hidden">
      <img src={one} alt="" className="w-1/2 " />
      <img src={two} alt="" className="w-1/2 " />
      <img src={three} alt="" className="w-1/2 " />
    </div>
  );
};

export default Description;
