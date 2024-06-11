import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Button } from "./ui/button";

export default function MovieCard() {
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
    // {
    //   id: "6",
    //   title: "Maama Nyabo High",
    //   resolution: "4K",
    //   country: "Japan",
    //   thumbnail: "/demo.jpg",
    //   short_description:
    //     "'You're lucky if you can die a normal death after running into a Curse.'",
    //   description:
    //     "Jujutsu Kaisen follows the story of Yuji Itadori, an ordinary boy who crosses paths with Megumi Fushiguro, a Jujutsu Sorcerer searching for a powerful Cursed Object known as Ryomen Sukuna's finger.",
    // },
  ];

  return (
    <div className='container mx-auto p-4'>
      <div className='text-center my-8'>
        <Button
          className='text-red-600 bg-qYellow hover:bg-qYellow/90 text-lg font-bold'
          variant='ringHover'
        >
          NOW SHOWING
        </Button>
        <Button
          className='text-gray-400 text-lg font-bold ml-4'
          variant='linkHover1'
        >
          COMING SOON
        </Button>
      </div>
      <div className='grid grid-cols-1 mx-auto max-w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {movies.map((movie) => {
          return (
            <Link
              key={movie.id}
              href={`/movies/${movie.id}`}
              passHref
              className='border border-qYellow/20 rounded-lg p-2 shadow-lg'
            >
              <div className='w-full h-[40vh]'>
                <Image
                  className='w-full h-full object-cover rounded-lg '
                  src={movie.thumbnail}
                  alt='All Of Us Are Dead'
                  width={1080}
                  height={1080}
                />
              </div>
              <div className='py-4'>
                <div className='flex justify-between'>
                  <p className='text-gray-400 text-sm'>18 Dec 2022</p>
                  <p className='text-gray-400 text-sm flex items-center gap-1'>
                    <Clock className='size-4' /> 105 Minutes 🍿
                  </p>
                </div>
                <h3 className='font-bold pt-2 line-clamp-1 text-white mb-2'>
                  {movie.title}
                </h3>

                <Button
                  className='mt-2 bg-qPrimary w-full !from-qYellow'
                  variant='gooeyLeft'
                >
                  Watch / Download
                </Button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
