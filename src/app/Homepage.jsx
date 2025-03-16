import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Homepage() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="text-[200px] font-bold flex justify-center ">
          <div className="text-[rgb(158,227,26)]">
            A<span className="text-[rgb(27,232,164)]"> B</span>
            <span className="text-[rgb(251,211,1)]"> C</span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image src="/tiger.png" alt="Tiger" width={300} height={300}/>
        </div>

        <button className="px-10 pt-6 pb-4 text-2xl bg-amber-300 rounded-2xl text-yellow-900 flex gap-6 cursor-pointer">
          BẮT ĐẦU
          <FaPlay fontSize={30}/>
        </button>
      </div>
    </div>
  );
}
