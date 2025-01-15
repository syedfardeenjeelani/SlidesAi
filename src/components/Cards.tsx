import React, { useState } from "react";

const Cards = () => {
  const [isYearly, setIsYearly] = useState(false);
  const cardsData = [
    {
      plan: "Free",
      description: "To grow referrals and leads of business looking",
      price: 0,
      button: {
        text: "Get Started for Free",
        style: "default",
      },
      featureIcon: (
        <svg
          width={20}
          height={21}
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6667 5.23047L7.49999 14.3971L3.33333 10.2305"
            stroke="#F17878"
            strokeWidth="2.46154"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "Data Sources: Up to 3 Accounts",
        "1 Workspace",
        "1 User",
        "Analytics Dashboard",
        "Google Add-on",
        "Reporting",
      ],
      icon: (
        <svg
          width={60}
          height={60}
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width={60}
            height={60}
            rx={30}
            fill="url(#paint0_linear_1_3477)"
          />
          <g filter="url(#filter0_d_1_3477)">
            <rect
              x="6.25"
              y="6.25"
              width={48}
              height={48}
              rx={24}
              fill="white"
            />
            <rect
              x="5.75"
              y="5.75"
              width={49}
              height={49}
              rx="24.5"
              stroke="#FDE3E3"
            />
            <g clipPath="url(#clip0_1_3477)">
              <path
                d="M37.813 30.8859L30.3169 38.3086L22.8208 30.8859C22.3264 30.4048 21.9369 29.8267 21.6769 29.1877C21.417 28.5488 21.2922 27.863 21.3103 27.1735C21.3285 26.4839 21.4893 25.8056 21.7825 25.1813C22.0757 24.5569 22.4951 24 23.0142 23.5457C23.5333 23.0913 24.1408 22.7494 24.7986 22.5413C25.4564 22.3333 26.1501 22.2636 26.8361 22.3368C27.5221 22.4099 28.1855 22.6243 28.7846 22.9664C29.3837 23.3085 29.9054 23.771 30.3169 24.3246C30.7302 23.775 31.2526 23.3166 31.8512 22.9781C32.4499 22.6397 33.112 22.4284 33.7961 22.3575C34.4801 22.2866 35.1715 22.3577 35.8268 22.5662C36.4822 22.7748 37.0874 23.1163 37.6047 23.5695C38.122 24.0226 38.5401 24.5777 38.8329 25.1998C39.1258 25.822 39.287 26.4979 39.3066 27.1852C39.3261 27.8726 39.2036 28.5565 38.9466 29.1943C38.6896 29.8321 38.3037 30.41 37.813 30.8919"
                stroke="#F17878"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_1_3477"
              x="4.17587"
              y="4.71294"
              width="52.1483"
              height="52.1483"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.537063" />
              <feGaussianBlur stdDeviation="0.537063" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0784314 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_3477"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_3477"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_3477"
              x1={30}
              y1={0}
              x2={30}
              y2={60}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F17878" stopOpacity="0.1" />
              <stop offset={1} stopColor="#F17878" stopOpacity={0} />
            </linearGradient>
            <clipPath id="clip0_1_3477">
              <rect
                width={24}
                height={24}
                fill="white"
                transform="translate(18.25 18.25)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      badge: null,
    },
    {
      plan: "Starter",
      description: "To grow referrals and leads of business looking",
      price: 19,
      button: {
        text: "Get Starter",
        style: "primary",
      },
      featureIcon: (
        <svg
          width={20}
          height={21}
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4102 5.69238L7.38461 14.718L3.28204 10.6155"
            stroke="#1B91F0"
            strokeWidth="2.46154"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "Data Sources: Up to 10 Accounts",
        "1 Workspace",
        "1 User",
        "Analytics Dashboard",
        "Google Add-on",
        "Reporting",
      ],
      icon: (
        <svg
          width={60}
          height={60}
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width={60}
            height={60}
            rx={30}
            fill="url(#paint0_linear_1_3489)"
          />
          <g filter="url(#filter0_d_1_3489)">
            <rect
              x="6.25"
              y="6.25"
              width={48}
              height={48}
              rx={24}
              fill="white"
            />
            <rect
              x="5.75"
              y="5.75"
              width={49}
              height={49}
              rx="24.5"
              stroke="#E0EEFE"
            />
            <g clipPath="url(#clip0_1_3489)">
              <path
                d="M22.2501 31.25C24.0332 31.4619 25.6931 32.2675 26.9628 33.5372C28.2326 34.807 29.0382 36.4669 29.2501 38.25C30.134 37.7404 30.8734 37.0138 31.3983 36.1389C31.9233 35.264 32.2164 34.2697 32.2501 33.25C33.9292 32.6593 35.3955 31.584 36.4634 30.16C37.5314 28.736 38.1532 27.0273 38.2501 25.25C38.2501 24.4544 37.934 23.6913 37.3714 23.1287C36.8088 22.5661 36.0457 22.25 35.2501 22.25C33.4728 22.3469 31.7641 22.9687 30.3401 24.0367C28.9161 25.1046 27.8408 26.5709 27.2501 28.25C26.2304 28.2837 25.236 28.5768 24.3612 29.1018C23.4863 29.6267 22.7597 30.3661 22.2501 31.25Z"
                stroke="#1B91F0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.2495 32.25C24.2087 32.8376 23.3672 33.7226 22.8327 34.7916C22.2982 35.8606 22.0951 37.0648 22.2495 38.25C23.4347 38.4044 24.6389 38.2013 25.7079 37.6668C26.7769 37.1323 27.6619 36.2908 28.2495 35.25"
                stroke="#1B91F0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32.2501 27.25C32.2501 27.5152 32.3554 27.7696 32.543 27.9571C32.7305 28.1446 32.9849 28.25 33.2501 28.25C33.5153 28.25 33.7697 28.1446 33.9572 27.9571C34.1447 27.7696 34.2501 27.5152 34.2501 27.25C34.2501 26.9848 34.1447 26.7304 33.9572 26.5429C33.7697 26.3554 33.5153 26.25 33.2501 26.25C32.9849 26.25 32.7305 26.3554 32.543 26.5429C32.3554 26.7304 32.2501 26.9848 32.2501 27.25Z"
                stroke="#1B91F0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_1_3489"
              x="4.17587"
              y="4.71294"
              width="52.1483"
              height="52.1483"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.537063" />
              <feGaussianBlur stdDeviation="0.537063" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0784314 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_3489"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_3489"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_3489"
              x1={30}
              y1={0}
              x2={30}
              y2={60}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1B91F0" stopOpacity="0.101961" />
              <stop offset={1} stopColor="#1B91F0" stopOpacity={0} />
            </linearGradient>
            <clipPath id="clip0_1_3489">
              <rect
                width={24}
                height={24}
                fill="white"
                transform="translate(18.25 18.25)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      badge: "Most Popular",
    },
    {
      plan: "Professional",
      description: "To grow referrals and leads of business looking",
      price: 39,
      button: {
        text: "Get Professional",
        style: "default",
      },
      featureIcon: (
        <svg
          width={20}
          height={21}
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6666 5.23047L7.49998 14.3971L3.33331 10.2305"
            stroke="#F6B51E"
            strokeWidth="2.46154"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "Data Sources: Up to 3 Accounts",
        "1 Workspace",
        "1 User",
        "Analytics Dashboard",
        "Google Add-on",
        "Reporting",
      ],
      icon: (
        <svg
          width={60}
          height={60}
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width={60}
            height={60}
            rx={30}
            fill="url(#paint0_linear_1_3561)"
          />
          <g filter="url(#filter0_d_1_3561)">
            <rect
              x="6.25"
              y="6.25"
              width={48}
              height={48}
              rx={24}
              fill="white"
            />
            <rect
              x="5.75"
              y="5.75"
              width={49}
              height={49}
              rx="24.5"
              stroke="#FFEFCC"
            />
            <g clipPath="url(#clip0_1_3561)">
              <path
                d="M21.25 27.25C21.25 26.7196 21.4607 26.2109 21.8358 25.8358C22.2109 25.4607 22.7196 25.25 23.25 25.25H37.25C37.7804 25.25 38.2891 25.4607 38.6642 25.8358C39.0393 26.2109 39.25 26.7196 39.25 27.25V36.25C39.25 36.7804 39.0393 37.2891 38.6642 37.6642C38.2891 38.0393 37.7804 38.25 37.25 38.25H23.25C22.7196 38.25 22.2109 38.0393 21.8358 37.6642C21.4607 37.2891 21.25 36.7804 21.25 36.25V27.25Z"
                stroke="#F6B51E"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.25 25.25V23.25C26.25 22.7196 26.4607 22.2109 26.8358 21.8358C27.2109 21.4607 27.7196 21.25 28.25 21.25H32.25C32.7804 21.25 33.2891 21.4607 33.6642 21.8358C34.0393 22.2109 34.25 22.7196 34.25 23.25V25.25"
                stroke="#F6B51E"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30.25 30.25V30.2578"
                stroke="#F6B51E"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.25 31.25C24.0416 32.6567 27.124 33.3894 30.25 33.3894C33.376 33.3894 36.4584 32.6567 39.25 31.25"
                stroke="#F6B51E"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_1_3561"
              x="4.17587"
              y="4.71294"
              width="52.1483"
              height="52.1483"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.537063" />
              <feGaussianBlur stdDeviation="0.537063" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0784314 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_3561"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_3561"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_3561"
              x1={30}
              y1={0}
              x2={30}
              y2={60}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F6B51E" stopOpacity="0.1" />
              <stop offset={1} stopColor="#F6B51E" stopOpacity={0} />
            </linearGradient>
            <clipPath id="clip0_1_3561">
              <rect
                width={24}
                height={24}
                fill="white"
                transform="translate(18.25 18.25)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      badge: null,
    },
    {
      plan: "Team",
      description: "To grow referrals and leads of business looking",
      price: 99,
      button: {
        text: "Get Team",
        style: "default",
      },
      featureIcon: (
        <svg
          width={20}
          height={21}
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6667 5.23047L7.50004 14.3971L3.33337 10.2305"
            stroke="#7F56D9"
            strokeWidth="2.46154"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "Data Sources: Up to 3 Accounts",
        "1 Workspace",
        "1 User",
        "Analytics Dashboard",
        "Google Add-on",
        "Reporting",
      ],
      icon: (
        <svg
          width={60}
          height={60}
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width={60}
            height={60}
            rx={30}
            fill="url(#paint0_linear_1_3603)"
          />
          <g filter="url(#filter0_d_1_3603)">
            <rect
              x="6.25"
              y="6.25"
              width={48}
              height={48}
              rx={24}
              fill="white"
            />
            <rect
              x="5.75"
              y="5.75"
              width={49}
              height={49}
              rx="24.5"
              stroke="#EDE6FF"
            />
            <g clipPath="url(#clip0_1_3603)">
              <path
                d="M22.2501 39.25V24.25C22.2501 23.25 23.2501 22.25 24.2501 22.25H29.2501C30.2501 22.25 31.2501 23.25 31.2501 24.25V39.25"
                stroke="#7F56D9"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M34.2501 26.25H36.2501C37.2501 26.25 38.2501 27.25 38.2501 28.25V39.25"
                stroke="#7F56D9"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.2501 39.25H39.2501"
                stroke="#7F56D9"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_1_3603"
              x="4.17587"
              y="4.71294"
              width="52.1483"
              height="52.1483"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.537063" />
              <feGaussianBlur stdDeviation="0.537063" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0784314 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_3603"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_3603"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_3603"
              x1={30}
              y1={0}
              x2={30}
              y2={60}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7F56D9" stopOpacity="0.101961" />
              <stop offset={1} stopColor="#7F56D9" stopOpacity={0} />
            </linearGradient>
            <clipPath id="clip0_1_3603">
              <rect
                width={24}
                height={24}
                fill="white"
                transform="translate(18.25 18.25)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      badge: null,
    },
  ];

  return (
    <>
      <div className=" mb-[32px]">
        <div className="flex w-[250px] h-[42px] items-center p-1 bg-[#F9FAFB] rounded-full shadow-sm border-[#E3E8EF] border-[0.7px]">
          <div className="relative flex">
            <div
              style={{ boxShadow: "0px 2px 6px 0px #1F293714" }}
              className={`absolute h-[36px]   bg-white rounded-[25px] transition-all duration-300 ease-in-out transform ${
                isYearly
                  ? "translate-x-full w-[145px] left-[-3vw]"
                  : "translate-x-0 w-[100px] "
              }`}
            />

            <button
              className={`relative   px-6 py-2 rounded-full text-[16px] font-semibold transition-colors duration-300 ${
                !isYearly ? "text-[#1B91F0]" : "text-[#697586]  text-center "
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`z-30 w-[146px] gap-1 flex items-center  h-[34px] rounded-[25px] text-[16px] font-semibold transition-colors duration-300 ${
                isYearly
                  ? "text-[#1B91F0] px-2"
                  : "text-[#697586] justify-center  "
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
              {isYearly && (
                <span className="w-[70px] bg-[#FDE3E3] rounded-[19px] border-[0.7px] border-[#FDE3E3] h-[20px] text-[#E54545] font-semibold text-[12px] ">
                  Save 20%
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="flex  mb-[16px] gap-[16px] ">
        {cardsData.map((el, index) => {
          return (
            <div
              style={{
                background: el.badge
                  ? "linear-gradient(180deg, #EDF4FF 0%, rgba(237, 244, 255, 0) 33.17%)"
                  : undefined,
              }}
              className={`w-[284px] flex flex-col h-[558px] rounded-[16px]  ${
                el.badge ? "relative" : " bg-[#FFFFFF] "
              } py-[20px] px-[16px]  border-[1.5px] border-[#E3E8EF] `}
            >
              {el.badge && (
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #39A3F7 0%, #3B8BCB 100%)",
                  }}
                  className=" h-[4px] absolute top-[-0.8px] left-[0.4vw]  w-[95.5%] rounded-tr-[14.85px] rounded-tl-[14.85px] "
                ></div>
              )}
              <div className="flex justify-between">
                {el.icon}
                {el.badge && (
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, #39A3F7 0%, #3B8BCB 100%)",
                    }}
                    className=" w-[96px] h-[28px] rounded-[16px] text-xs font-medium text-white animate-bounce flex items-center justify-center  "
                  >
                    {el.badge}
                  </span>
                )}
              </div>
              <h1 className="text-[#121B26] font-bold text-[20px] mb-[4px]  ">
                {el.plan}
              </h1>
              <p className=" text-[#697586] text-[14px] leading-[22px] w-[222px] mb-[20px] ">
                {el.description}
              </p>
              <div className=" text-[#121B26] font-bold text-[30px] mb-[16px]">
                ${el.price}
                <span className="text-[#697586] text-[14px] ">
                  {isYearly ? " /year" : " /month"}
                </span>
              </div>
              <button className=" w-[256px] rounded-[12.32px] h-[56px] hover:border-[1px] font-semibold border-[1.23px] border-[#1B91F0] hover:text-white text-[#1B91F0] hover:bg-[#1B91F0] ">
                {el.button.text}
              </button>
              {/* <div className=" w-[251px] h-[218px] flex flex-col gap-3 ">
                <span className=" text-[#697586] font-semibold ">Features</span>
                <div className=" flex flex-col  h-[22px] w-[269px] gap-[10px] border border-red-800 ">
                  <div className="flex gap-[10px] ">
                    <div>
                      {el.featureIcon}
                    </div>
                      <span className=" text-[#697586] text-sm">
                        {el.features}
                      </span>
                  </div>
                </div>
              </div> */}
              <div className="w-[251px] mt-[26px] h-[218px] flex flex-col gap-3">
                <span className="text-[#697586] font-semibold">Features</span>
                <div className="flex flex-col gap-[10px]">
                  {el.features.map((feature, index) => (
                    <div key={index} className="flex gap-[10px] items-start">
                      <div className="flex-shrink-0">{el.featureIcon}</div>
                      <span className="text-[#697586] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
