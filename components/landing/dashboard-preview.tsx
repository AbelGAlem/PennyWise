import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section className="hidden md:block max-w-5xl mx-auto pb-20 px-4">
      <div className="relative">
        <div className="relative bg-gray-900 rounded-2xl p-1 md:p-4 shadow-2xl">
          {/* Todo: Make this a video preview instead*/}
          <Image
            src="/dashboard.png"
            alt="PennyWise Dashboard Preview"
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
