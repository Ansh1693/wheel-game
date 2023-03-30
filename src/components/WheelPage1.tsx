import React from "react";

interface offer {
  name: string;
  index: number;
}
interface offers {
  items: offer[];
}
const list: Array<offer> = [
  {
    name: "HOTCHOCOLATE",
    index: 1,
  },
  {
    name: "20",
    index: 2,
  },
  {
    name: "30",
    index: 3,
  },
  {
    name: "40",
    index: 4,
  },
  {
    name: "50",
    index: 5,
  },
  {
    name: "60",
    index: 6,
  },
];

const WheelPage = () => {
  React.useEffect(() => {
    const wheel = document.getElementById("wheel");
    const button = document.getElementById("onSpin");

    let value: number = Math.ceil(Math.random() * 6000);
    const handleClick = () => {
      wheel!.classList.add("transition-wheel");
      let value2: number = value % 60;
      value += 7200 + (60 - value2);
      wheel!.style.transform = `rotate(${value}deg)`;
      value2 = 360 - (value % 360);
      value2 /= 60;
      value2 -= 1 % 5;
      if (value2 === 0) value2 = 6;
      console.log(value, value2);
    };

    button?.addEventListener("click", () => {
      handleClick();
    });

    wheel?.addEventListener("transitionend", () => {
      wheel.classList.remove("transition-wheel");
      const actualDeg: number = value % 360;
      wheel!.style.transform = `rotate(${actualDeg}deg)`;
    });
  }, []);

  const WheelItem: React.FunctionComponent<offers> = (props) => {
    // console.log(props)
    return (
      <div
        className="relative w-full h-full transition-wheel rounded-full wheel-shadow"
        id="wheel"
      >
        {props.items.map((prop) => (
          <div
            className="absolute top-0 left-0 w-full h-full odd:bg-gradient-to-r translate-x-4  odd:from-[#E50101] odd:to-[#FF6F6F] even:bg-gradient-to-l even:from-[#EFEFD1] even:to-[#F1F1F1]"
            style={{
              clipPath: "url(#sector)",
              transform: `rotate(${60 * prop.index}deg)`,
            }}
            key={prop.index}
          >
            <span className="absolute right-[15%] top-[30%] rotate-[60deg] text-center ">
              {prop.name}
            </span>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="w-96 h-96 m-10">
      <div className="h-full w-full relative">
        <div
          className="absolute top-1/2 left-1/2 z-10 h-16 -translate-x-1/2 -translate-y-1/2"
          id="onSpin"
        >
          <svg
            width="95"
            height="122"
            viewBox="0 0 95 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <g filter="url(#filter0_d_20_89)">
              <mask
                id="path-1-outside-1_20_89"
                maskUnits="userSpaceOnUse"
                x="5.39893"
                y="-0.580566"
                width="84"
                height="110"
                fill="black"
              >
                <rect
                  fill="white"
                  x="5.39893"
                  y="-0.580566"
                  width="84"
                  height="110"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M58.7108 37.9698L47.4234 18.4194L36.1357 37.9703C24.0186 42.5351 15.3989 54.2355 15.3989 67.9492C15.3989 85.6361 29.737 99.9742 47.4239 99.9742C65.1108 99.9742 79.4489 85.6361 79.4489 67.9492C79.4489 54.235 70.8285 42.5342 58.7108 37.9698Z"
                />
              </mask>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M58.7108 37.9698L47.4234 18.4194L36.1357 37.9703C24.0186 42.5351 15.3989 54.2355 15.3989 67.9492C15.3989 85.6361 29.737 99.9742 47.4239 99.9742C65.1108 99.9742 79.4489 85.6361 79.4489 67.9492C79.4489 54.235 70.8285 42.5342 58.7108 37.9698Z"
                fill="black"
              />
              <path
                d="M47.4234 18.4194L55.3854 13.8225L47.4234 0.0318775L39.4613 13.8225L47.4234 18.4194ZM58.7108 37.9698L50.7487 42.5667L52.3928 45.4144L55.47 46.5735L58.7108 37.9698ZM36.1357 37.9703L39.3768 46.5738L42.4537 45.4147L44.0977 42.5672L36.1357 37.9703ZM39.4613 23.0163L50.7487 42.5667L66.6728 33.3729L55.3854 13.8225L39.4613 23.0163ZM44.0977 42.5672L55.3854 23.0163L39.4613 13.8225L28.1736 33.3734L44.0977 42.5672ZM24.5927 67.9492C24.5927 58.1869 30.7238 49.8337 39.3768 46.5738L32.8945 29.3668C17.3134 35.2366 6.20515 50.2841 6.20515 67.9492H24.5927ZM47.4239 90.7804C34.8146 90.7804 24.5927 80.5585 24.5927 67.9492H6.20515C6.20515 90.7137 24.6594 109.168 47.4239 109.168V90.7804ZM70.2551 67.9492C70.2551 80.5585 60.0332 90.7804 47.4239 90.7804V109.168C70.1884 109.168 88.6427 90.7137 88.6427 67.9492H70.2551ZM55.47 46.5735C64.1236 49.833 70.2551 58.1866 70.2551 67.9492H88.6427C88.6427 50.2834 77.5335 35.2355 61.9515 29.3661L55.47 46.5735Z"
                fill="white"
                mask="url(#path-1-outside-1_20_89)"
              />
            </g>
            <path
              d="M42.7653 50.6627C39.8693 50.6473 37.0498 53.4361 38.337 56.8991H33.4796C32.6668 56.8991 31.8873 57.222 31.3126 57.7967C30.7379 58.3714 30.415 59.1509 30.415 59.9637V63.0283C30.415 63.4347 30.5764 63.8244 30.8638 64.1118C31.1512 64.3991 31.5409 64.5606 31.9473 64.5606H45.738V59.9637H48.8026V64.5606H62.5932C62.9996 64.5606 63.3894 64.3991 63.6767 64.1118C63.9641 63.8244 64.1255 63.4347 64.1255 63.0283V59.9637C64.1255 59.1509 63.8026 58.3714 63.2279 57.7967C62.6532 57.222 61.8737 56.8991 61.0609 56.8991H56.2035C57.9963 51.8885 51.2542 48.3489 48.1437 52.67L47.2703 53.8345L46.3968 52.6393C45.4315 51.2756 44.0984 50.678 42.7653 50.6627ZM42.6734 53.8345C44.0371 53.8345 44.7266 55.4894 43.7613 56.4547C42.796 57.4201 41.1411 56.7306 41.1411 55.3668C41.1411 54.9604 41.3025 54.5707 41.5899 54.2833C41.8772 53.996 42.267 53.8345 42.6734 53.8345ZM51.8671 53.8345C53.2309 53.8345 53.9204 55.4894 52.9551 56.4547C51.9897 57.4201 50.3349 56.7306 50.3349 55.3668C50.3349 54.9604 50.4963 54.5707 50.7836 54.2833C51.071 53.996 51.4608 53.8345 51.8671 53.8345ZM31.9473 66.0929V78.3513C31.9473 79.164 32.2702 79.9435 32.8449 80.5182C33.4196 81.093 34.1991 81.4158 35.0119 81.4158H59.5286C60.3414 81.4158 61.1209 81.093 61.6956 80.5182C62.2703 79.9435 62.5932 79.164 62.5932 78.3513V66.0929H48.8026V78.3513H45.738V66.0929H31.9473Z"
              fill="#F1F1EB"
            />
            <defs>
              <filter
                id="filter0_d_20_89"
                x="0.0759625"
                y="0.0317383"
                width="94.6959"
                height="121.395"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="6.12918" />
                <feGaussianBlur stdDeviation="3.06459" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_20_89"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_20_89"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <WheelItem items={list} />

        <svg height="0" width="0">
          <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="sector">
              <path
                fill="none"
                stroke="#111"
                stroke-width="1"
                className="sector"
                d="M0.5,0.5 l0.5,0 A0.5,0.5 0 0,0 0.75,.066987298 z"
              ></path>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default WheelPage;
