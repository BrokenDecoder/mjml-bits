'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRightIcon } from '@/components/Icons';
import ComparisonSlider from '@/components/ComparisonSlider';
import FoldText from '@/components/FoldText';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const statsRef = useRef(null);
  const sliderSectionRef = useRef(null);
  const sliderCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          actionsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          statsRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=0.4'
        );

      // Genie 3D Unfold + Scale Effect for Comparison Slider Card (Forward & Backward scroll)
      if (sliderCardRef.current) {
        gsap.fromTo(
          sliderCardRef.current,
          {
            opacity: 0,
            scale: 0.72,
            rotateX: 38,
            y: 90,
            transformPerspective: 1100,
            transformOrigin: '50% 100%',
          },
          {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sliderSectionRef.current,
              start: 'top 82%',
              end: 'top 25%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const plainEmailMock = (
    <div className="comparison-card-mock mock-plain">
      <div className="mock-plain-email">
        <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '8px', fontWeight: 600 }}>TRANSACTIONAL EMAIL</div>
        <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px', color: '#0f172a' }}>Standard Notification</h3>
        <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#475569', margin: '0 0 16px' }}>
          Your weekly report is ready. Basic tables, generic blue buttons, and unstyled Outlook fallbacks.
        </p>
        <div style={{ background: '#2563eb', color: '#fff', padding: '8px 14px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, display: 'inline-block' }}>
          View Report
        </div>
      </div>
    </div>
  );

  const proEmailMock = (
    <div className="comparison-card-mock mock-pro" style={{ background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, #09090e 100%)' }}>
      <div className="mock-pro-email">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '10px', background: 'rgba(168, 85, 247, 0.25)', color: '#d8b4fe', padding: '2px 8px', borderRadius: '4px', fontWeight: 700, letterSpacing: '0.05em' }}>
            MJML BITS PRO
          </span>
          <span style={{ fontSize: '11px', color: '#94a3b8' }}>Verified Outlook 2021+</span>
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 8px', color: '#ffffff', letterSpacing: '-0.02em' }}>
          Creative Campaign Pulse
        </h3>
        <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#cbd5e1', margin: '0 0 18px' }}>
          Dynamic VML gradients, glassmorphism cards, responsive column flow, and bulletproof Outlook tables.
        </p>
        <div style={{ background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', color: '#fff', padding: '10px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' }}>
          <span>Explore Template</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="hero-section hero-centered">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="hero-title">
              <FoldText
                text="MJML components for"
                splitBy="word"
                hinge="top"
                trigger="mount"
                duration={0.7}
                stagger={0.08}
                ease="power3.out"
                perspective={800}
                creaseShading={0.4}
                fontSize="inherit"
                fontWeight={800}
                color="#ffffff"
              />{' '}
              <span className="text-gradient">creative emails</span>
            </h1>

            <p ref={descRef} className="hero-desc">
              Highly customizable email components &amp; backgrounds that drop
              into your project and instantly make it stand out
            </p>

            <div ref={actionsRef} className="hero-actions">
              <Link href="/docs" className="btn-primary">
                <span>Browse Components</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div ref={statsRef} className="hero-stats">
              170+ COMPONENTS &nbsp;·&nbsp; FREE FOREVER
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Slider Showcase Section */}
      <section
        ref={sliderSectionRef}
        style={{ padding: '0 24px 120px', position: 'relative', zIndex: 2 }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '12px' }}>
              <FoldText
                text="Standard Email vs. MJML Bits"
                splitBy="word"
                hinge="top"
                trigger="scroll"
                duration={0.65}
                stagger={0.06}
                ease="power3.out"
                perspective={700}
                creaseShading={0.5}
                fontSize="inherit"
                fontWeight={800}
                color="#ffffff"
              />
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto' }}>
              Drag the slider to compare standard plain templates with expressive, modern MJML Bits components.
            </p>
          </div>

          <div ref={sliderCardRef} style={{ willChange: 'transform, opacity' }}>
            <ComparisonSlider
              beforeImage={plainEmailMock}
              afterImage={proEmailMock}
              beforeLabel="Standard MJML"
              afterLabel="MJML Bits Design"
              defaultPosition={50}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
