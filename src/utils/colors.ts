import { ColorCodeType } from "./interfaces";

interface Colors {
	[name: string]: ColorCodeType;
}

export const colors: Colors = {
	//BASIC COLORS
	red: "rgba(212, 44, 31, 1)",
	blue: "rgba(52, 64, 235, 1)",
	orange: "rgba(235, 116, 52, 1)",
	transparent: "rgba(0, 0, 0, 0)",

	//BORDERS & LINES
	fieldBorder: "rgba(207, 212, 217, 1)",
	cardBorder: "rgba(238, 238, 238, 1)",

	//FONTS
	titleFont: "rgba(34, 37, 41, 1)",
	numberFont: "rgba(76, 76, 76, 1)",
};
