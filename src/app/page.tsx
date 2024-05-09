// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Page from "./slides/page";

export default function Home() {
  return (
    <main className="w-full h-screen bg-red-300 flex flex-col justify-center items-center">
      <div className="p-4 bg-red-600 text-red-300 max-w-[500px]">
        <Page />
      </div>
    </main>
  );
}
