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
        <div className="flex justify-center items-start w-full pt-16 gap-10 sm:flex-col sm:pb-5">
          <div
            onMouseEnter={() => {
              const card = document.getElementById("Adrin");
              card.classList.toggle("opacity-0");
              card.classList.toggle("opacity-100");
            }}
            onMouseLeave={() => {
              const card = document.getElementById("Adrin");
              card.classList.toggle("opacity-0");
              card.classList.toggle("opacity-100");
            }}
            className="flex flex-col gap-1 w-[200px] relative"
          >
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
            <div
              id="Adrin"
              className="wBE absolute bottom-[83px] left-0 w-full h-12 transition-opacity ease-in-out duration-700 opacity-0 hover:opacity-100 flex justify-center items-center gap-5"
            >
              <a href="https://github.com/Adrin7113">
                <img
                  src="/github.svg"
                  alt="Github Logo"
                  className="w-6 h-6 hover:scale-110 transition-all ease-in-out"
                />
              </a>
              <a href="https://www.linkedin.com/in/adrin-jose-c-t-101a70249/">
                <img
                  src="/linkedin.svg"
                  alt="Linkedin Logo"
                  className="w-6 h-6 hover:scale-110 transition-all ease-in-out"
                />
              </a>
            </div>
          </div>
          <div
            onMouseEnter={() => {
              const card = document.getElementById("Advaith");
              card.classList.toggle("opacity-0");
              card.classList.toggle("opacity-100");
            }}
            onMouseLeave={() => {
              const card = document.getElementById("Advaith");
              card.classList.toggle("opacity-0");
              card.classList.toggle("opacity-100");
            }}
            className="flex flex-col gap-1 w-[200px] relative"
          >
            <img
              src="/Advaith.png"
              alt="ADVAITH NARAYANAN"
              className=" w-[200px] h-[200px]"
            />
            <h1 className="text-white drummer text-xl">ADVAITH NARAYANAN</h1>
            <h1 className="text-white quicksand text-sm">DEVOPS ENGINEER</h1>
            <div
              id="Advaith"
              className="wBE absolute bottom-[83px] left-0 w-full h-12 transition-opacity ease-in-out duration-700 opacity-0 hover:opacity-100 flex justify-center items-center gap-5"
            >
              <a href="https://github.com/Glitchyi">
                <img
                  src="/github.svg"
                  alt="Github Logo"
                  className="w-6 h-6 hover:scale-110 transition-all ease-in-out"
                />
              </a>
              <a href="https://www.linkedin.com/in/advaith-narayanan-a72152214/">
                <img
                  src="/linkedin.svg"
                  alt="Linkedin Logo"
                  className="w-6 h-6 hover:scale-110 transition-all ease-in-out"
                />
              </a>
            </div>
          </div>
          <div
            onMouseEnter={() => {
              const card = document.getElementById("Anandu");
              card.classList.toggle("opacity-0");
              card.classList.toggle("opacity-100");
            }}
            onMouseLeave={() => {
              const card = document.getElementById("Anandu");
              card.classList.toggle("opacity-0");
              card.classList.toggle("opacity-100");
            }}
            className="flex flex-col gap-1 w-[200px] relative"
          >
            <img
              src="/Anandu.png"
              alt="ANANDA KRISHNAN M"
              className=" w-[200px] h-[200px]"
            />
            <h1 className="text-white drummer text-xl">ANANDA KRISHNAN</h1>
            <h1 className="text-white quicksand text-sm">UI/UX DESIGNER</h1>
            <div
              id="Anandu"
              className="wBE absolute bottom-[83px] left-0 w-full h-12 transition-opacity ease-in-out duration-700 opacity-0 hover:opacity-100 flex justify-center items-center gap-5"
            >
              <a href="mailto:anandakrishnan3537@gmail.com">
                <img
                  src="/mail.svg"
                  alt="Mail Logo"
                  className="w-6 h-6 hover:scale-110 transition-all ease-in-out"
                />
              </a>
              <a href="https://www.linkedin.com/in/ananda-krishnan-96a86324a/">
                <img
                  src="/linkedin.svg"
                  alt="Linkedin Logo"
                  className="w-6 h-6 hover:scale-110 transition-all ease-in-out"
                />
              </a>
            </div>
          </div>
          <div
            onMouseEnter={() => {
              const card = document.getElementById("Joshua");
              card.classList.toggle("opacity-0");
              card.classList.toggle("opacity-100");
            }}
            onMouseLeave={() => {
              const card = document.getElementById("Joshua");
              card.classList.toggle("opacity-0");
              card.classList.toggle("opacity-100");
            }}
            className="flex flex-col gap-1 w-[200px] items-start justify-center relative"
          >
            <img
              src="/Joshua.png"
              alt="JOSHUA VARGHESE"
              className=" w-[200px] h-[200px]"
            />
            <div>
              <h1 className="text-white drummer text-xl">JOSHUA</h1>
              <h1 className="text-white drummer text-xl">VARGHESE</h1>
            </div>
            <h1 className="text-white quicksand text-sm">UI/UX ENGINEER</h1>
            <div
              id="Joshua"
              className="wBE absolute bottom-[83px] left-0 w-full h-12 transition-opacity ease-in-out duration-700 opacity-0 hover:opacity-100 flex justify-center items-center gap-5"
            >
              <a href=" https://github.com/infinitytmbots">
                <img
                  src="/github.svg"
                  alt="Github Logo"
                  className="w-6 h-6 hover:scale-110 transition-all ease-in-out"
                />
              </a>
              <a href="https://www.linkedin.com/in/joshuavarghese1/">
                <img
                  src="/linkedin.svg"
                  alt="Linkedin Logo"
                  className="w-6 h-6 hover:scale-110 transition-all ease-in-out"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /*
  https://github.com/Adrin7113
  https://github.com/Glitchyi
  https://github.com/infinitytmbots
  mailto:anandakrishnan3537@gmail.com
  https://www.linkedin.com/in/adrin-jose-c-t-101a70249/
  https://www.linkedin.com/in/advaith-narayanan-a72152214/
  https://www.linkedin.com/in/joshuavarghese1/
  https://www.linkedin.com/in/ananda-krishnan-96a86324a/
  */
}
