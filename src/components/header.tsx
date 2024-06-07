"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { ArrowRightIcon, Search } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true); // Show the div when scrolled 200 pixels
    } else {
      setScrolled(false); // Hide the div when scrolled back to top
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={cn("py-3 bg-gradient-to-r from-qPrimary to-current", {
        "lg:fixed z-50 top-0 inset-x-0 w-full": scrolled,
      })}
    >
      <section className='max-w-7xl mx-auto'>
        <div className='flex flex-col gap-6 not-prose'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <Link
                className=' flex items-end dark:invert hover:opacity-75 transition-all marker:items-end'
                href='/'
              >
                <Image
                  src='/logo-white.svg'
                  alt='Logo'
                  width={90}
                  height={8}
                  className='dark:invert hover:opacity-75 transition-all'
                ></Image>
              </Link>
            </div>

            <div className='flex items-center gap-3'>
              <h3 className='font-semibold text-white'>WatchList</h3>

              <div className='input-wrapper'>
                <button className='icon'>
                  <Search className='w-[25] text-white h-[25]' />
                </button>

                <input
                  className='placeholder-white input'
                  placeholder='search..'
                  name='text'
                  type='text'
                />
              </div>

              <Button
                className='bg-qSecondary hover:bg-qPrimary'
                variant='expandIcon'
                Icon={ArrowRightIcon}
                iconPlacement='right'
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
