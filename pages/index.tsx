import dynamic from "next/dynamic";

import Intro from "../components/Intro";
import Projets from "../components/Projets";
import Blob from "../components/Blob";

const Description = dynamic(() => import("../components/Description"), {
  ssr: false
});

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="mt-16">
        <div className="absolute left-96 -z-10">
          <Blob width={"48"} height={"48"} />
        </div>
        <div className="absolute right-0 -z-10">
          <Blob width={"96"} height={"96"} />
        </div>
        <Description />
        <div className="absolute left-24 -z-10">
          <Blob width={"72"} height={"72"} />
        </div>
        <Intro />
        <div className="absolute left-0 -z-10">
          <Blob width={"96"} height={"96"} />
        </div>
        <Projets />
      </div>
    </main>
  );
}
