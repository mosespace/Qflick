"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const HeroSection = () => {
  const movies = [
    {
      id: "1",
      title: "Floating Wonders",
      resolution: "4K",
      country: "Japan",
      thumbnail: "/demo-4.jpg",
      short_description:
        "'You're lucky if you can die a normal death after running into a Curse.'",
      description:
        "Jujutsu Kaisen follows the story of Yuji Itadori, an ordinary boy who crosses paths with Megumi Fushiguro, a Jujutsu Sorcerer searching for a powerful Cursed Object known as Ryomen Sukuna's finger.",
    },
    {
      id: "2",
      title: "Red Fight",
      resolution: "4K",
      country: "Japan",
      thumbnail: "/demo-2.jpg",
      short_description:
        "'You're lucky if you can die a normal death after running into a Curse.'",
      description:
        "Jujutsu Kaisen follows the story of Yuji Itadori, an ordinary boy who crosses paths with Megumi Fushiguro, a Jujutsu Sorcerer searching for a powerful Cursed Object known as Ryomen Sukuna's finger.",
    },
    {
      id: "3",
      title: "Mangu Mobile",
      resolution: "4K",
      country: "Japan",
      thumbnail: "/demo-3.jpg",
      short_description:
        "'You're lucky if you can die a normal death after running into a Curse.'",
      description:
        "Jujutsu Kaisen follows the story of Yuji Itadori, an ordinary boy who crosses paths with Megumi Fushiguro, a Jujutsu Sorcerer searching for a powerful Cursed Object known as Ryomen Sukuna's finger.",
    },
    {
      id: "4",
      title: "Fast Ranger",
      resolution: "4K",
      country: "Japan",
      thumbnail: "/demo-5.jpg",
      short_description:
        "'You're lucky if you can die a normal death after running into a Curse.'",
      description:
        "Jujutsu Kaisen follows the story of Yuji Itadori, an ordinary boy who crosses paths with Megumi Fushiguro, a Jujutsu Sorcerer searching for a powerful Cursed Object known as Ryomen Sukuna's finger.",
    },
    {
      id: "5",
      title: "Love at High",
      resolution: "4K",
      country: "Japan",
      thumbnail: "/demo-6.jpg",
      short_description:
        "'You're lucky if you can die a normal death after running into a Curse.'",
      description:
        "Jujutsu Kaisen follows the story of Yuji Itadori, an ordinary boy who crosses paths with Megumi Fushiguro, a Jujutsu Sorcerer searching for a powerful Cursed Object known as Ryomen Sukuna's finger.",
    },
  ];

  return (
    <div className='relative overflow-x-hidden w-full h-[70vh]'>
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-pagination",
          type: "bullets",
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 6000 }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Image
              src={movie.thumbnail}
              alt={movie.title}
              width={3840}
              height={2160}
              className='w-full h-full object-cover object-top'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-qBlack via-qBlack/90 to-transparent flex items-center px-[8rem] py-10'>
              <div className='px-8 max-w-5xl'>
                <div className='text-white max-w-md'>
                  <div className='mb-2'>
                    <span className='text-white px-2 py-1 rounded text-xs font-bold'>
                      Dark Fantasy
                    </span>
                    <span className='bg-qYellow text-black px-2 py-1 rounded ml-2 text-xs font-bold'>
                      {movie.resolution}
                    </span>
                    <span className='bg-qYellow text-black px-2 py-1 rounded ml-2 text-xs font-bold'>
                      {movie.country}
                    </span>
                  </div>
                  <h1 className='text-4xl font-bold mb-4'>{movie.title}</h1>
                  <p className='mb-4'>{movie.description}</p>
                  <p className='mb-6'>{movie.short_description}</p>
                  <button className='flex items-center gap-2 bg-qPrimary text-white px-4 py-2 rounded text-sm font-bold'>
                    <Play fill='#fff' className='size-4' />
                    WATCH TRAILER
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='custom-prev'>
          <ChevronLeft className='text-white' />
        </div>
        <div className='custom-next'>
          <ChevronRight className='text-white' />
        </div>
      </Swiper>
      <div className='custom-pagination'></div>
      <style jsx>{`
        .custom-prev,
        .custom-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          cursor: pointer;
        }
        .custom-prev {
          left: 100px;
        }
        .custom-next {
          right: 100px;
        }
        .swiper-pagination-bullet {
          background-color: #fff;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #ffcc00;
        }
        .custom-pagination {
          position: absolute;
          bottom: 20px;
          left: 50%;
          alignItems:center,
          transform: translateX(-50%);
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
