import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>A QRCode Generator</h1>
      <Link href="/qr-generator"> See more</Link>
    </div>
  );
}
