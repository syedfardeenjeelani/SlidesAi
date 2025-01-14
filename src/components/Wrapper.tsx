import React from 'react'

const Wrapper = ({
  height,
  children,
  one,
  two,
  three,
  four,
  onePosition,
  twoPosition,
  threePosition,
  fourPosition,
}: any) => {
  const rightAngleSvg = (
    <svg
      width={13}
      height={13}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 -1.11759e-07V12H13" stroke="black" />
    </svg>
  );
  return (
    <>
      <div className={`${height} flex border-[0.7px]  border-[#CFD5DE]`}>
        <div className="w-[113px] border-r-[0.7px]  border-[#CFD5DE] "></div>
        <div className="w-[79vw]   relative ">
          {one && (
            <span
              className={`absolute  ${
                onePosition
                  ? "right-[-5px] bottom-0 rotate-[-90deg] "
                  : "bottom-0"
              } `}
            >
              {rightAngleSvg}
            </span>
          )}
          {two && (
            <span className=" w-[12px] absolute top-[-5px] z-50 left-[-6px] h-[12px] bg-white rounded-[4px]  "></span>
          )}
          {children}
          {three && (
            <span
              className={`w-[12px]   absolute h-[12px] ${
                threePosition ? " left-[-6px] bottom-[-5px] " : "right-[-6px] bottom-[-5px]"
              } bg-white rounded-[4px] `}
            ></span>
          )}
          {four && (
            <span className="absolute  top-0 right-0 rotate-[-180deg] ">
              {rightAngleSvg}
            </span>
          )}
        </div>
        <div className="w-[113px] border-l-[0.7px]  border-[#CFD5DE]"></div>
      </div>
    </>
  );
};

export default Wrapper