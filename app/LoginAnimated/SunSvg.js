import * as React from "react";
import { SvgXml } from "react-native-svg";

export default ({ width = 180, height = 180, color = "#FFFFFF" }) => {
  const xml = `<svg width="182" height="182" viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M90.9948 140.348C117.964 140.348 139.827 118.487 139.827 91.5189C139.827 64.5511 117.964 42.6893 90.9948 42.6893C64.0255 42.6893 42.1625 64.5511 42.1625 91.5189C42.1625 118.487 64.0255 140.348 90.9948 140.348Z" fill="#FBE493" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M90.9948 157.607V181" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M90.9948 1V24.3925" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M157.617 91H181" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 91H24.3835" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M138.104 43.9036L154.638 27.3607" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.3519 154.639L43.8957 138.107" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.8957 43.9036L27.3519 27.3607" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M154.638 154.639L138.104 138.107" stroke="#002346" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
        `;

  return <SvgXml xml={xml} width={width} height={height} />;
};
