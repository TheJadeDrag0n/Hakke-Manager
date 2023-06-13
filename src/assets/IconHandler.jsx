import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function IconHandler({
  fileLocation,
  color = "#000",
  size = 16,
  width = size,
  height = size,
}) {
  const [svgData, setSvgData] = useState(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(fileLocation);
        const text = await response.text();
        const parser = new DOMParser();
        const svg = parser.parseFromString(
          text,
          "image/svg+xml"
        ).documentElement;

        const pathOutput = [];

        const viewBox = svg.getAttribute("viewBox");
        const paths = svg.querySelectorAll("path");
        for (let i = 0; i < paths.length; i++) {
          const d = paths[i].getAttribute("d");
          const fillRule = paths[i].getAttribute("fill-rule");
          const clipRule = paths[i].getAttribute("clip-rule");

          pathOutput.push({
            d: d,
            fillRule: fillRule === null ? "nonzero" : fillRule,
            clipRule: clipRule === null ? "nonzero" : clipRule,
          });
        }
        setSvgData({ viewBox: viewBox, paths: pathOutput });
      } catch (error) {
        console.error(error);
      }
    };

    fetchSvg();
  }, []);
  return (
    <>
      {svgData ? (
        <svg viewBox={svgData.viewBox} width={width} height={height}>
          {svgData.paths.map((path, index) => (
            <path
              key={index}
              fill={color}
              d={path.d}
              fillRule={path.fillRule}
              clipRule={path.clipRule}
            />
          ))}
        </svg>
      ) : (
        ""
      )}
    </>
  );
}

IconHandler.propTypes = {
  fileLocation: PropTypes.string.isRequired,
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default IconHandler;
