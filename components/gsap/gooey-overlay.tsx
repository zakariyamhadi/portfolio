"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GooeyOverlay = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas: any = canvasRef.current;
    const gl = canvas?.getContext("webgl");

    const devicePixelRatio = Math.min(window.devicePixelRatio, 2);

    function resizeCanvas() {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "0% 0%",
          end: "100% 100%",
          scrub: true,
        },
      })
      .to(containerRef.current, { opacity: 1, duration: 0.5 });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen z-10">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="text-overlay absolute inset-0 flex items-center justify-center">
        <p>
          <a href="https://linkedin.com/in/ksenia-kondrashova/" target="_blank">
            LinkedIn
          </a>{" "}
          |
          <a href="https://codepen.io/ksenia-k" target="_blank">
            {" "}
            CodePen
          </a>{" "}
          |
          <a href="https://twitter.com/uuuuuulala" target="_blank">
            {" "}
            Twitter (X)
          </a>
        </p>
      </div>
    </div>
  );
};

export default GooeyOverlay;
