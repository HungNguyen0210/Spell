"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { eggs } from "./data";

const Spell = () => {
  const [crackedEggs, setCrackedEggs] = useState({});
  const [isClient, setIsClient] = useState(false);
  const [selectedExamples, setSelectedExamples] = useState({});
  const [currentLetter, setCurrentLetter] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [learnedEggs, setLearnedEggs] = useState([]); // Danh sách trứng đã học

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCrack = (id, letter, index) => {
    // Kiểm tra nếu chưa học trứng trước đó
    if (index > 0 && !learnedEggs.includes(eggs[index - 1].id)) {
      setShowModal(true);
      return;
    }

    setCrackedEggs((prev) => ({ ...prev, [id]: "cracked" }));
    setTimeout(() => {
      setCrackedEggs((prev) => ({ ...prev, [id]: "hidden" }));
      setCurrentLetter(letter);
    }, 800);
  };

  const handleShowExample = (id, letter) => {
    setSelectedExamples((prev) => ({
      ...prev,
      [id]: eggs.find((e) => e.letter === letter)?.example || "",
    }));
    setCurrentLetter(null);
    setLearnedEggs((prev) => [...prev, id]); // Đánh dấu quả trứng đã học
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!isClient) return null;

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Modal cảnh báo */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-opacity-50">
          <div className="bg-white p-6 rounded-3xl shadow-lg text-center relative lg:max-w-xl lg:h-64 max-w-[300px]">
            <button
              onClick={closeModal}
              className="absolute lg:top-3 top-2 right-4 cursor-pointer text-black lg:text-gray-300 lg:hover:text-black"
            >
              <IoIosCloseCircleOutline className="lg:text-5xl text-4xl" />
            </button>

            <p className="text-2xl lg:text-5xl pt-6 lg:pt-12 font-semibold text-red-500">
              Bé hãy học xong từ trước đó trước khi chọn trứng này!
            </p>
          </div>
        </div>
      )}

      {/* Ô nền chứa trứng */}
      <div className="w-full lg:max-w-7xl max-w-[340px] h-[550px] bg-[#f6f4d3] rounded-3xl flex justify-center items-center p-6">
        <Swiper
          spaceBetween={10}
          breakpoints={{
            375: { slidesPerView: 1 },
            1024: { slidesPerView: 3.3 },
          }}
          className="w-full h-full"
        >
          {eggs.map((egg, index) => (
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
                    className="text-[250px] font-bold absolute top-16 left-8 text-black cursor-pointer"
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
                      onClick={() => handleCrack(egg.id, egg.letter, index)}
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
