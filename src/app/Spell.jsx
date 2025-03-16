"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const eggs = [
  {
    id: 1,
    img: "/2.png",
    letter: "A",
    example: "Công <span class='text-green-500'>a</span>n",
    imgex: "/congan.png",
  },
  {
    id: 2,
    img: "/3.png",
    letter: "Ă",
    example: "Mặt tr<span class='text-green-500'>ă</span>ng",
    imgex: "/mattrang.png",
  },
  {
    id: 3,
    img: "/5.png",
    letter: "Â",
    example: "Cái c<span class='text-green-500'>â</span>n",
    imgex: "/caican.png",
  },
  {
    id: 4,
    img: "/6.png",
    letter: "B",
    example: "<span class='text-green-500'>B</span>út chì",
    imgex: "/butchi.png",
  },
  {
    id: 5,
    img: "/10.png",
    letter: "C",
    example: "<span class='text-green-500'>C</span>á chép",
    imgex: "/cachep.png",
  },
  {
    id: 6,
    img: "/7.png",
    letter: "D",
    example: "<span Con class='text-green-500'>D</span>iều",
    imgex: "/condieu.png",
  },
  {
    id: 7,
    img: "/8.png",
    letter: "Đ",
    example: "Cái <span class='text-green-500'>Đ</span>èn",
    imgex: "/caiden.png",
  },
  {
    id: 8,
    img: "/9.png",
    letter: "E",
    example: "<span class='text-green-500'>E</span>m bé",
    imgex: "/embe.png",
  },
  {
    id: 9,
    img: "/2.png",
    letter: "Ê",
    example: "Con D<span class='text-green-500'>ê</span>",
    imgex: "/conde.png",
  },
  {
    id: 10,
    img: "/3.png",
    letter: "G",
    example: "<span class='text-green-500'>G</span>à mái",
    imgex: "/gamai.png",
  },
  {
    id: 11,
    img: "/5.png",
    letter: "H",
    example: "<span class='text-green-500'>H</span>ổ trắng",
    imgex: "/hotrang.png",
  },
  {
    id: 12,
    img: "/6.png",
    letter: "I",
    example: "Bút b<span class='text-green-500'>i</span>",
    imgex: "/butbi.png",
  },
  {
    id: 13,
    img: "/10.png",
    letter: "K",
    example: "Cây <span class='text-green-500'>K</span>éo",
    imgex: "/caykeo.png",
  },
  {
    id: 14,
    img: "/7.png",
    letter: "L",
    example: "Con <span class='text-green-500'>L</span>ợn",
    imgex: "/conlon.png",
  },
  {
    id: 15,
    img: "/8.png",
    letter: "M",
    example: "<span class='text-green-500'>M</span>èo mun",
    imgex: "/meomun.png",
  },
  {
    id: 16,
    img: "/9.png",
    letter: "N",
    example: "<span class='text-green-500'>N</span>ai vàng",
    imgex: "/naivang.png",
  },
  {
    id: 17,
    img: "/2.png",
    letter: "O",
    example: "Quả b<span class='text-green-500'>ó</span>ng",
    imgex: "/quabong.png",
  },
  {
    id: 18,
    img: "/3.png",
    letter: "Ô",
    example: "Cái <span class='text-green-500'>ô</span>",
    imgex: "/caio.png",
  },
  {
    id: 19,
    img: "/5.png",
    letter: "Ơ",
    example: "Trái m<span class='text-green-500'>ơ</span>",
    imgex: "/traimo.png",
  },
  {
    id: 20,
    img: "/6.png",
    letter: "P",
    example: "<span class='text-green-500'>P</span>hi công",
    imgex: "/phicong.png",
  },
  {
    id: 21,
    img: "/10.png",
    letter: "Q",
    example: "Cái <span class='text-green-500'>Q</span>uạt",
    imgex: "/caiquat.png",
  },
  {
    id: 22,
    img: "/7.png",
    letter: "R",
    example: "<span class='text-green-500'>R</span>ong biển",
    imgex: "/rongbien.png",
  },
  {
    id: 23,
    img: "/8.png",
    letter: "S",
    example: "<span class='text-green-500'>S</span>ư tử",
    imgex: "/sutu.png",
  },
  {
    id: 24,
    img: "/9.png",
    letter: "T",
    example: "<span class='text-green-500'>T</span>hợ mộc",
    imgex: "/thomoc.png",
  },
  {
    id: 25,
    img: "/2.png",
    letter: "U",
    example: "Cái T<span class='text-green-500'>ủ</span>",
    imgex: "/caitu.png",
  },
  {
    id: 26,
    img: "/3.png",
    letter: "Ư",
    example: "Hạt m<span class='text-green-500'>ư</span>a",
    imgex: "/hatmua.png",
  },
  {
    id: 27,
    img: "/5.png",
    letter: "V",
    example: "Con <span class='text-green-500'>V</span>oi",
    imgex: "/convoi.png",
  },
  {
    id: 28,
    img: "/6.png",
    letter: "X",
    example: "<span class='text-green-500'>X</span>e đạp",
    imgex: "/xedap.png",
  },
  {
    id: 29,
    img: "/10.png",
    letter: "Y",
    example: "<span class='text-green-500'>Y</span> tá",
    imgex: "/yta.png",
  },
];

const Spell = () => {
  const [crackedEggs, setCrackedEggs] = useState({});
  const [isClient, setIsClient] = useState(false);
  const [selectedExamples, setSelectedExamples] = useState({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCrack = (id, letter) => {
    setCrackedEggs((prev) => ({ ...prev, [id]: "cracked" }));
    setTimeout(() => {
      setCrackedEggs((prev) => ({ ...prev, [id]: "hidden" }));
    }, 800);
  };

  const handleShowExample = (id, letter) => {
    setSelectedExamples((prev) => ({
      ...prev,
      [id]: eggs.find((e) => e.letter === letter)?.example || "",
    }));
  };

  if (!isClient) return null;

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Ô nền chứa trứng và nội dung */}
      <div className="w-full max-w-7xl h-[550px] bg-[#f6f4d3] rounded-3xl flex justify-center items-center p-6">
        <Swiper
          spaceBetween={10}
          breakpoints={{
            375: { slidesPerView: 1.1 },
            1024: { slidesPerView: 3.3 },
          }}
          className="w-full h-full"
        >
          {eggs.map((egg) => (
            <SwiperSlide key={egg.id} className="flex justify-center">
              <div className="relative w-[300px] h-[300px] flex flex-col items-center">
                {selectedExamples[egg.id] ? (
                  <div className="flex flex-col items-center absolute top-0 left-0 w-full h-full">
                    <div className="w-[400px] h-[400px] flex justify-center items-center">
                      <Image
                        src={egg.imgex}
                        alt={egg.letter}
                        width={400}
                        height={400}
                        className="max-w-[400px] max-h-[400px] w-full h-full object-contain"
                      />
                    </div>
                    <span
                      className="text-5xl font-bold text-black text-center mt-2"
                      dangerouslySetInnerHTML={{
                        __html: selectedExamples[egg.id],
                      }}
                    />
                  </div>
                ) : crackedEggs[egg.id] === "hidden" ? (
                  <span
                    className="text-[200px] font-bold absolute top-16 left-8 text-black cursor-pointer"
                    onClick={() => handleShowExample(egg.id, egg.letter)}
                  >
                    {egg.letter}
                  </span>
                ) : (
                  <>
                    <Image
                      src={egg.img}
                      alt={egg.letter}
                      width={350}
                      height={350}
                      className="cursor-pointer pt-14 lg:pt-14 transition-transform active:scale-90"
                      onClick={() => handleCrack(egg.id, egg.letter)}
                    />
                    {crackedEggs[egg.id] === "cracked" && (
                      <Image
                        src="/cracked.png"
                        alt="Cracked Egg"
                        width={200}
                        height={200}
                        className="absolute top-48 left-12"
                      />
                    )}
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Spell;
