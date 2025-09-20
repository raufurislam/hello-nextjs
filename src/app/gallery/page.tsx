import Image from "next/image";
import nextImg from "@/assets/image-optization-learning.avif";

export default function GalleryPage() {
  return (
    <div className="text-center">
      <h1>Regular Image Tag</h1>
      <img
        src="https://images.unsplash.com/photo-1758221941243-f0c18fabcf1f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={500}
        height={500}
        className="mx-auto"
      />

      <h1>NextJs Image Components</h1>
      <Image
        src="https://images.unsplash.com/photo-1758221941243-f0c18fabcf1f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={500}
        height={500}
        className="mx-auto"
      />

      <h1>NextJs Image Components Local</h1>
      <Image
        src={nextImg}
        alt=""
        width={500}
        height={500}
        className="mx-auto"
      />

      <h1>NextJs Image Components Public</h1>
      <Image
        src="/image-optization-learning.avif"
        alt=""
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
}
