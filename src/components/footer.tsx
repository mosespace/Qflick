import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/craft";
import { Github, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className='grid gap-6'>
          <div className='flex flex-col gap-6 not-prose'>
            <Link
              className=' flex items-end dark:invert hover:opacity-75 transition-all marker:items-end'
              href='/'
            >
              <Image
                src='/logo.svg'
                alt='Logo'
                width={120}
                height={27.27}
                className='dark:invert hover:opacity-75 transition-all'
              ></Image>
            </Link>
            <p>
              <Balancer>
                Qflick is a streaming platform for all people who like to watch
                millions of movies, series and animations just for free.
                Beautifully designed where you can watch netflix movies or shows
                for free.
              </Balancer>
            </p>
          </div>
          <div className='flex gap-4 flex-col md:flex-row mb-4 md:mb-0'>
            <Link href='/privacy-policy'>Privacy Policy</Link>
            <Link href='/terms-of-service'>Terms of Service</Link>
            <Link href='/cookie-policy'>Cookie Policy</Link>
          </div>
        </Container>
        <Container className='border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center'>
          <div className='flex gap-2'>
            <Button variant='outline' className='rounded-full' size='icon'>
              <Github className='size-4' />
            </Button>
            <Button variant='outline' className='rounded-full' size='icon'>
              <Twitter className='size-4' />
            </Button>
            <Button variant='outline' className='rounded-full' size='icon'>
              <Facebook className='size-4' />
            </Button>
          </div>
          <p className='text-muted-foreground'>
            © <Link href='https://github.com/brijr/components'>Qflick</Link>.
            All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
