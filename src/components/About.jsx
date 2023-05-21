import "../index.css";

export default function Schedule({ props }) {
  return (
    <div className="">
      <div className="w-screen h-[550px] flex flex-col p-20 pb-0 items-center">
        <h1 className="text-white text-5xl drummer font-bold">About Us</h1>
        <h1 className="text-white text-2xl quicksand pt-5">
          Meet our team of <span className="text-[#14CAF4]">creators</span> and{" "}
          <span className="text-[#14CAF4]">designers</span>.
        </h1>
        <div className="flex justify-center items-start w-full pt-16 gap-10">
          <div className="flex flex-col gap-1 w-[200px]">
            <img
              src="/Adrin.png"
              alt="ADRIN JOSE C T"
              className=" w-[200px] h-[200px]"
            />
            <div>
              <h1 className="text-white drummer text-xl">ADRIN</h1>
              <h1 className="text-white drummer text-xl">JOSE</h1>
            </div>
            <h1 className="text-white quicksand text-sm">
              FULL STACK DEVELOPER
            </h1>
          </div>
          <div className="flex flex-col gap-1 w-[200px]">
            <img
              src="/Advaith.png"
              alt="ADVAITH NARAYANAN"
              className=" w-[200px] h-[200px]"
            />
            <h1 className="text-white drummer text-xl">ADVAITH NARAYANAN</h1>
            <h1 className="text-white quicksand text-sm">DEVOPS ENGINEER</h1>
          </div>
          <div className="flex flex-col gap-1 w-[200px]">
            <img
              src="/Anandu.png"
              alt="ANANDA KRISHNAN M"
              className=" w-[200px] h-[200px]"
            />
            <h1 className="text-white drummer text-xl">ANANDA KRISHNAN</h1>
            <h1 className="text-white quicksand text-sm">DESIGN LEAD</h1>
          </div>
          <div className="flex flex-col gap-1 w-[200px] items-start justify-center">
            <img
              src="/Joshua.png"
              alt="JOSHUA VARGHESE"
              className=" w-[200px] h-[200px]"
            />
            <div>
              <h1 className="text-white drummer text-xl">JOSHUA</h1>
              <h1 className="text-white drummer text-xl">VARGHESE</h1>
            </div>
            <h1 className="text-white quicksand text-sm">PROJECT MANAGER</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
