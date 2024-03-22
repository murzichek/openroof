"use client";
import dynamic from "next/dynamic";
import Footer from "./Components/Footer";

const MapsApp = dynamic(() => import("./Components/MapsApp"), {
  ssr: false,
});


export default function Home() {
  return (
    <main className="w-full h-full">
      <MapsApp />
      <Footer />
    </main>
  );
}