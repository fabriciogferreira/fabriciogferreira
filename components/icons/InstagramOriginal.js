import React from "react";

// function _extends() {
//   return _extends =
//     Object.assign ?
//       Object.assign.bind() :
//       function (target) {
//         for (var i = 1; i < arguments.length; i++) {
//           var source = arguments[i];
//           for (var key in source) {
//             if (Object.prototype.hasOwnProperty.call(source, key)) {
//               target[key] = source[key];
//             }
//           }
//         }
//         return target;
//       },
//     _extends.apply(null, arguments);
// }

const InstagramOriginal = (props) => {
  let { size = "1rem", ...rest } = props;
  rest = { ...rest, style: { ...(rest.style || {}), width: size, height: size } };

  return (
    <svg
      {...rest}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="instagram-grad" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fd5" />
          <stop offset="0.328" stopColor="#ff543f" />
          <stop offset="0.348" stopColor="#fc5245" />
          <stop offset="0.504" stopColor="#e64771" />
          <stop offset="0.643" stopColor="#d53e91" />
          <stop offset="0.761" stopColor="#cc39a4" />
          <stop offset="0.841" stopColor="#c837ab" />
        </radialGradient>
      </defs>
      <path
        fill="url(#instagram-grad)"
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"
      />
      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
      <path
        fill="#fff"
        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
      />
      <path
        fill="#fff"
        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
      />
    </svg>
  );
};

export default InstagramOriginal;
