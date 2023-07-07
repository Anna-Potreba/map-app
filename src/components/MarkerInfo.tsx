
import { memo } from "react";
export const MarkerInfo = memo(function MarkerInfo({ name, descriptions, y }: {name: string, descriptions: string, y: number}) {
    // можно сделать с помощью css, но не с компонентом <text/> 
    const cutText = (title: string): string => {
        return title.length > 20 ? `${title.slice(0, 20)}…` : title
    }
    return (
        <>
            <text
                textAnchor="middle"
                y={y}
                style={{
                    fontFamily: "system-ui", fill: "#5D5A6D", overflow: "hidden",
                }}
            >
                {name}
            </text>
            <text
                textAnchor="middle"
                y={y + 20}
                style={{
                    width: "100%",
                    maxWidth: "30px",
                    display: "block",
                    fontFamily: "system-ui", fill: "#5D5A6D", overflow: "hidden",
                }}
            >
                {cutText(descriptions)}
            </text>
        </>
    )
});