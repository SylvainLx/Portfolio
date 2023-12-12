function Blob({ width, height }: { width?: string; height?: string }) {
  return (
    <div
      className={`h-24 w-24 md:w-${width} md:h-${height} overflow-hidden blur-xl  md:blur-3xl`}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#A5FB89"
          d="M69.7,-39.6C83,-17.2,81.4,14.5,67.3,35.2C53.2,55.9,26.6,65.6,0.7,65.2C-25.2,64.8,-50.4,54.2,-59.5,36.4C-68.6,18.5,-61.7,-6.5,-49.1,-28.5C-36.5,-50.4,-18.3,-69.2,5,-72.1C28.2,-75,56.4,-61.9,69.7,-39.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

export default Blob;
