import React from 'react'

const Gap = () => {
    const svg = (
      <svg
        width={31}
        height={31}
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          opacity="0.1"
          width={31}
          height={31}
          fill="url(#pattern0_1_1279)"
        />
        <defs>
          <pattern
            id="pattern0_1_1279"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#image0_1_1279" transform="scale(0.00833333)" />
          </pattern>
          <image
            id="image0_1_1279"
            width={120}
            height={120}
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
  return (
    <div className="flex h-[191px]  justify-center   items-center">
      <div className=" lg:w-[854px]  flex  gap-[20px] items-center ">
        <div className="relative">
          <span className=" w-[12px] absolute border-[#CFD5DE] border-[0.7px]  top-[-6px] z-50  h-[12px] bg-white rounded-[4px] "></span>
          <div className=" lg:w-[350px] w-[150px] border-[0.7px] border-[#CFD5DE] "></div>
        </div>
        <div>{svg}</div>
        <div className="relative">
          <span className=" w-[12px] absolute right-0 border-[0.7px]  border-[#CFD5DE] top-[-6px] z-50  h-[12px] bg-white rounded-[4px] "></span>
          <div className=" lg:w-[350px] w-[150px] border-[0.7px] border-[#CFD5DE] "></div>
        </div>
      </div>
    </div>
  );
}

export default Gap