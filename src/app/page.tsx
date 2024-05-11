// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Page from "./slides/page";

export default function Home() {
  return (
    <main className="w-full h-screen bg-violet-500 flex flex-col justify-center items-center">
      <div className="p-4 text-violet-300 max-w-[450px]">
        <Page />
      </div>
    </main>
  );
}
