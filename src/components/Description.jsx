import { useParams } from "react-router-dom";
const Links = [
  [
    "https://images.pexels.com/photos/15903178/pexels-photo-15903178.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/6908071/pexels-photo-6908071.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14435483/pexels-photo-14435483.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ],
];

const Description = () => {
  const { no } = useParams();
  const imageList = Links[no];
  const [one, two, three] = imageList;
  return (
    <div>
      <img src={one} alt="" />
      <img src={two} alt="" />
      <img src={three} alt="" />
    </div>
  );
};

export default Description;
