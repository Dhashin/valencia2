import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
	children,
	maxWidth,
	centerButton,
	inverted,
	equiDist,
	leftAligned,
	rightAligned,
	itemPageMobile,
	...otherProps
}) => (
	<button
		className={`${inverted ? "inverted" : ""} 
    ${centerButton ? "center-button" : ""}
    ${maxWidth ? "maxWidth" : ""}
    ${leftAligned ? "left-aligned" : ""}
	${rightAligned ? "right-aligned" : ""}
	${itemPageMobile ? "item-page-mobile" : ""}
    ${equiDist ? "equiDist" : ""}
     custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
