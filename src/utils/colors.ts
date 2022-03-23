type ColorCodeType = `rgba(${number}, ${number}, ${number}, ${number})`;

interface Colors {
	[name: string]: ColorCodeType;
}

export const colors: Colors = {
	//BASIC COLORS
	red: "rgba(212, 44, 31, 1)",
	transparent: "rgba(0, 0, 0, 0)",

	//BORDERS & LINES
	fieldBorder: "rgba(207, 212, 217, 1)",
	cardBorder: "rgba(238, 238, 238, 1)",

	//FONTS
	titleFont: "rgba(34, 37, 41, 1)",
	numberFont: "rgba(76, 76, 76, 1)",
	buttonFont: "rgba(255, 255, 255, 1)",
	labelFont: "rgba(132, 132, 132, 1)",

	//BUTTONS
	buttonBackground: "rgba(25, 25, 25, 1)",
	buttonTextHover: "rgba(255, 255, 255, 1)",
};
