'use client';

import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

export default function BalatroShader({
  color1 = '#de443b',
  color2 = '#006bb4',
  color3 = '#162325',
  pixelation = 745,
  mouseInteraction = true,
  rotate = true,
}) {
  const containerRef = useRef(null);

  // Helper to convert hex to RGB 0-1
  const hexToRgb = (hex) => {
    const clean = hex.replace('#', '');
    const num = parseInt(clean, 16);
    return [
      ((num >> 16) & 255) / 255,
      ((num >> 8) & 255) / 255,
      (num & 255) / 255,
    ];
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, antialias: true });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.position = 'absolute';
    gl.canvas.style.top = '0';
    gl.canvas.style.left = '0';

    const geometry = new Triangle(gl);

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform float uPixelation;
      uniform float uRotate;
      varying vec2 vUv;

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        
        // Pixelation
        if (uPixelation > 0.0) {
          float d = max(1.0, 1000.0 - uPixelation);
          uv = floor(uv * (uResolution.xy / d)) / (uResolution.xy / d);
        }

        vec2 p = (uv - 0.5) * 2.0;
        p.x *= uResolution.x / uResolution.y;

        float t = uTime * 0.4;
        
        // Vortex swirl
        float r = length(p);
        float a = atan(p.y, p.x);
        
        if (uRotate > 0.5) {
          a += sin(r * 3.5 - t * 1.5) * 1.8 + t * 0.5;
        }

        vec2 sw = vec2(cos(a), sin(a)) * r;
        
        // Fluid noise waves
        float f = sin(sw.x * 4.0 + t) * cos(sw.y * 4.0 - t);
        f += sin(sw.x * 8.0 - t * 2.0 + uMouse.x * 2.0) * 0.5;
        f += cos(sw.y * 8.0 + t * 2.0 + uMouse.y * 2.0) * 0.5;

        // Color blending
        vec3 col = mix(uColor3, uColor1, smoothstep(-0.6, 0.3, f));
        col = mix(col, uColor2, smoothstep(0.1, 0.9, f));

        // Specular sheen
        col += vec3(0.2) * pow(clamp(f + 0.5, 0.0, 1.0), 4.0);

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    const c3 = hexToRgb(color3);

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [container.offsetWidth, container.offsetHeight] },
        uMouse: { value: [0, 0] },
        uColor1: { value: c1 },
        uColor2: { value: c2 },
        uColor3: { value: c3 },
        uPixelation: { value: pixelation },
        uRotate: { value: rotate ? 1.0 : 0.0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleResize = () => {
      if (!container) return;
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      program.uniforms.uResolution.value = [
        container.offsetWidth,
        container.offsetHeight,
      ];
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      if (!mouseInteraction) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      program.uniforms.uMouse.value = [x, y];
    };

    container.addEventListener('mousemove', handleMouseMove);

    let animId;
    const animate = (t) => {
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      if (gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas);
      }
    };
  }, [color1, color2, color3, pixelation, mouseInteraction, rotate]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
      }}
    />
  );
}
