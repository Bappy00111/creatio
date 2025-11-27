import Image from "next/image";
import heroImg from '../../public/home-image/asset 71.svg'

export default function HeroImage() {
  return (
    <div className="
      w-full
      h-[300px]      /* mobile height */
      sm:h-[350px]   /* small devices */
      md:h-[450px]   /* medium devices */
      lg:h-[600px]   /* large & up */
      relative
    ">
      <Image
        src={heroImg}   // আপনার ইমেজ path
        alt="Hero"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}
