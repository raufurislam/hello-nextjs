import Image from "next/image";
import nextImg from "@/assets/image-optization-learning.avif";

export default function GalleryPage() {
  return (
    <div className="text-center">
      <h1>Regular Image Tag</h1>
      <img
        src="https://images.pexels.com/photos/31656834/pexels-photo-31656834.jpeg"
        alt="Regular Image Tag"
        width={500}
        height={500}
        className="mx-auto"
      />

      <h1>NextJs Image Components</h1>
      <Image
        src="https://images.pexels.com/photos/31656834/pexels-photo-31656834.jpeg"
        alt="NextJs Image Components"
        width={500}
        height={500}
        className="mx-auto"
      />

      <h1>NextJs Image Components Local</h1>
      <Image
        src={nextImg}
        alt="NextJs Image Components Local"
        width={500}
        height={500}
        className="mx-auto"
      />

      <h1>NextJs Image Components Public</h1>
      <Image
        src="/image-optization-learning.avif"
        alt="NextJs Image Components Public"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
}
