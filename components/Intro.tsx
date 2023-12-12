import dynamic from 'next/dynamic'

const CircleButtonWithNoSSR = dynamic(() => import('./CircleIcons'), { ssr: false })

function Intro() {
  return (
    <div className="mx-8 flex justify-center border-t-4 align-middle lg:mx-48">
      <CircleButtonWithNoSSR />
    </div>
  );
}

export default Intro;
