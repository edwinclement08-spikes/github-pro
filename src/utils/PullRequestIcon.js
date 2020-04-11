import React from 'react';

export default function PullRequestIcon(props) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" style={{enableBackground: 'new 0 0 48 48'}} xmlSpace="preserve" width={48} height={48} {...props}>
      <line style={{fill: 'none', stroke: '#CFD8DC', strokeWidth: 2, strokeMiterlimit: 10}} x1={12} y1={39} x2={12} y2={9} />
      <path style={{fill: 'none', stroke: '#CFD8DC', strokeWidth: 2, strokeMiterlimit: 10}} d="M21,8h7c4.418,0,8,3.582,8,8v22" />
      <circle style={{fill: '#0097A7'}} cx={12} cy={8} r={4} />
      <circle style={{fill: '#00BCD4'}} cx={36} cy={40} r={4} />
      <circle style={{fill: '#00BCD4'}} cx={12} cy={40} r={4} />
      <polygon style={{fill: '#CFD8DC'}} points="24,9 28,9 28,7 24,7 24,4 19,8 24,12 " />
    </svg>
  );
}
