"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page() {
  const cardArray = [
    {
      title: "Siamese",
      img: "https://live.staticflickr.com/5013/5444670579_e0d4f4d5ff.jpg",
      text: "Siamese cats are known for their sleek bodies, striking blue almond-shaped eyes, and short coats with color points on the ears, face, paws, and tail.",
      origin: "Thailand",
    },
    {
      title: "Maine Coon",
      img: "https://live.staticflickr.com/8353/29039134436_083a4b3a89.jpg",
      text: "Maine Coons are one of the largest domesticated cat breeds. They are known for their friendly, sociable nature and luxurious, long fur that requires regular grooming.",
      origin: "United States",
    },
    {
      title: "Persian",
      img: "https://live.staticflickr.com/4105/5003909750_2933a1ea88.jpg",
      text: "Persian cats are known for their long, luxurious fur, flat faces, and sweet, gentle personalities. They require regular grooming to prevent matting.",
      origin: "Iran (Persia)",
    },
    {
      title: "Sphynx",
      img: "https://live.staticflickr.com/8031/8059521908_cac295f4f9.jpg",
      text: "Sphynx cats are hairless, with wrinkled skin and big ears. Despite their lack of fur, they are known for their warmth and affectionate nature.",
      origin: "Canada",
    },
    {
      title: "Bengal",
      img: "https://live.staticflickr.com/65535/29826602587_daf9f5e211.jpg",
      text: "Bengal cats have a distinctive leopard-like appearance with a sleek coat covered in marbled or spotted markings. They are energetic, playful, and love to climb.",
      origin: "United States",
    },
  ];
  return (
    <Swiper
      loop
      navigation
      pagination={{ type: "fraction" }}
      modules={[Navigation]}
      className="w-full min-h-32"
    >
      {cardArray.map((item, index) => (
        <SwiperSlide key={index} className="pb-7">
          <div className="flex flex-col gap-1 mx-16 my-4 rounded-lg bg-violet-800 shadow-md overflow-clip">
            <figure className="aspect-video">
              <img
                src={item.img}
                alt={item.title}
                className="aspect-video object-cover"
              />
            </figure>
            <div className="p-4 flex flex-col gap-2">
              <p className="text-xl text-white font-semibold">{item.title}</p>
              <p className="italic text-xs font-semibold text-violet-100">
                Origin: {item.origin}
              </p>
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
