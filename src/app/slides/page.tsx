"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page() {
  const cardArray = [
    {
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero!",
    },
    {
      title: "pnpm Package Manager",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero!",
    },
    {
      title: "Frontend Development",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero!",
    },
    {
      title: "Youtube",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero!",
    },
    {
      title: "NextJS",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero!",
    },
    {
      title: "Tailwindcss",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero!",
    },
  ];
  return (
    <Swiper
      loop
      navigation
      pagination={{ type: "fraction" }}
      modules={[Navigation, Pagination]}
      className="w-full min-h-32 shadow-md"
    >
      {cardArray.map((item, index) => (
        <SwiperSlide key={index} className="pb-7">
          <div className="flex flex-col gap-1 mx-16 my-4">
            <p className="text-2xl text-red-900 font-semibold">{item.title}</p>
            <p className="italic text-sm">{item.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
