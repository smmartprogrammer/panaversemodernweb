import Link from 'next/link';
import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  // Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    {/* <Hero /> */}

    <div className="relative">
      <About />

      <div className="gradient-03 z-0" />
      <Explore />
      <Link href="#about">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img src="/panaverse.webp
        " alt="panaverselogo" className="w-[50px] h-[50px] object-contain "
            />
          </div>
        </footer>
      </Link>

    </div>
    <div className="relative">
      <GetStarted />

      <div className="gradient-04 z-0" />
      <WhatsNew />
      <Link href="#about">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img src="/panaverse.webp
        " alt="panaverselogo" className="w-[50px] h-[50px] object-contain "
            />
          </div>
        </footer>
      </Link>

    </div>

    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Link href="#about">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img src="/panaverse.webp
        " alt="panaverselogo" className="w-[50px] h-[50px] object-contain "
            />
          </div>
        </footer>
      </Link>

      <Feedback />
    </div>
    <World />
    <Link href="#about">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img src="/panaverse.webp
        " alt="panaverselogo" className="w-[50px] h-[50px] object-contain "
          />
        </div>
      </footer>
    </Link>

    <Footer />
    <Link href="#about">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img src="/panaverse.webp
        " alt="panaverselogo" className="w-[50px] h-[50px] object-contain "
          />
        </div>
      </footer>
    </Link>

  </div>
);

export default Page;
