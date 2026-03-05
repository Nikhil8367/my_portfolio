import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    
    // Disable stroke
    ctx.strokeStyle = "transparent";
    ctx.lineWidth = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    for (let i = 0; i < 400; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1 + 0.5,
        vx: 0,
        vy: 0,
        opacity: Math.random() * 0.5 + 0.5
      });
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Fill entire canvas with black
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const dx = (mouseX - centerX) / centerX * 1.0;
      const dy = (mouseY - centerY) / centerY * 1.0;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.vx += dx * 0.02;
        star.vy += dy * 0.02;
        star.vx *= 0.96;
        star.vy *= 0.96;

        star.x += star.vx;
        star.y += star.vy;

        // Wrapping
        if (star.x < 0) star.x = canvas.width;
        else if (star.x > canvas.width) star.x = 0;

        if (star.y < 0) star.y = canvas.height;
        else if (star.y > canvas.height) star.y = 0;

        // Draw only circle - no stroke
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 6.28318530718);
        ctx.fill();
        ctx.closePath();
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas id="starCanvas" ref={canvasRef} style={{ display: "block" }}></canvas>;
}
