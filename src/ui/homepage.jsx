"use client";

import Spell from "@ui/spell";
import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import MusicToggle from "../ui/MusicToggle";
import GuideModal from "./guide-model";

export default function Homepage() {
  const [showSpell, setShowSpell] = useState(false);

  return showSpell ? (
    <Spell />
  ) : (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6 bg-cover bg-[url(/bg.png)] bg-center bg-no-repeat">
      <MusicToggle />
      <GuideModal />

      <div className="lg:text-[200px] text-8xl pt-24 pb-12 lg:pb-0 lg:pt-0 font-bold flex justify-center">
        <div className="text-[rgb(158,227,26)]">
          A<span className="text-[rgb(27,232,164)]"> B</span>
          <span className="text-[rgb(251,211,1)]"> C</span>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image src="/tiger.png" alt="Tiger" width={300} height={300} />
      </div>

      <button
        onClick={() => setShowSpell(true)}
        className="px-6 lg:px-10 pt-6 pb-4 text-2xl bg-amber-300 rounded-2xl text-yellow-900 flex gap-6 cursor-pointer"
      >
        BẮT ĐẦU
        <FaPlay className="text-2xl lg:text-3xl" />
      </button>
    </div>
  );
}
