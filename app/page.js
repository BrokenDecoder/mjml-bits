'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRightIcon } from '@/components/Icons';
import ComparisonSlider from '@/components/ComparisonSlider';
import FoldText from '@/components/FoldText';
import ComponentsGallerySection from '@/components/ComponentsGallerySection';

gsap.registerPlugin(ScrollTrigger);

const COMPARISON_PRESETS = [
  {
    id: 'pulse',
    title: 'Standard Email vs. MJML Bits Pulse',
    desc: 'Drag the slider to compare standard plain templates with expressive, modern MJML Bits components.',
    beforeLabel: 'Standard MJML',
    afterLabel: 'MJML Bits Design',
    before: (
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
    ),
    after: (
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
    ),
  },
  {
    id: 'cyber-dark',
    title: 'Plain Invoice vs. Cyber Aura Receipt',
    desc: 'Unmatched visual depth for receipt and transaction confirmation emails.',
    beforeLabel: 'Boring Invoice',
    afterLabel: 'Cyber Receipt Pro',
    before: (
      <div className="comparison-card-mock mock-plain">
        <div className="mock-plain-email">
          <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '8px', fontWeight: 600 }}>INVOICE #9201</div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px', color: '#0f172a' }}>Payment Receipt: $49.00</h3>
          <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#475569', margin: '0 0 16px' }}>
            Thank you for your payment. Attached is the plain text summary for your reference.
          </p>
          <div style={{ background: '#475569', color: '#fff', padding: '8px 14px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, display: 'inline-block' }}>
            Download PDF
          </div>
        </div>
      </div>
    ),
    after: (
      <div className="comparison-card-mock mock-pro" style={{ background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.15) 0%, #09090e 100%)' }}>
        <div className="mock-pro-email" style={{ borderColor: 'rgba(56, 189, 248, 0.45)', boxShadow: '0 20px 50px rgba(0,0,0,0.7), 0 0 40px rgba(56, 189, 248, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '10px', background: 'rgba(56, 189, 248, 0.25)', color: '#7dd3fc', padding: '2px 8px', borderRadius: '4px', fontWeight: 700, letterSpacing: '0.05em' }}>
              RECEIPT VERIFIED
            </span>
            <span style={{ fontSize: '11px', color: '#94a3b8' }}>Real-time Token</span>
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 8px', color: '#ffffff', letterSpacing: '-0.02em' }}>
            Instant Pro License: $49.00
          </h3>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#cbd5e1', margin: '0 0 18px' }}>
            Instant key injection, encrypted verification badge, and interactive dark-mode header banner.
          </p>
          <div style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', color: '#fff', padding: '10px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)' }}>
            <span>Access Workspace</span>
            <span>→</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'launch-pulse',
    title: 'Newsletter Digest vs. Nebula Product Launch',
    desc: 'Transform text-heavy newsletters into hyper-engaging email experiences.',
    beforeLabel: 'Standard Newsletter',
    afterLabel: 'Nebula Launch Kit',
    before: (
      <div className="comparison-card-mock mock-plain">
        <div className="mock-plain-email">
          <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '8px', fontWeight: 600 }}>MONTHLY NEWS</div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px', color: '#0f172a' }}>Product Update Issue #4</h3>
          <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#475569', margin: '0 0 16px' }}>
            Check out what we shipped this month across our core platform and dashboard tools.
          </p>
          <div style={{ background: '#0284c7', color: '#fff', padding: '8px 14px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, display: 'inline-block' }}>
            Read Online
          </div>
        </div>
      </div>
    ),
    after: (
      <div className="comparison-card-mock mock-pro" style={{ background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.18) 0%, #09090e 100%)' }}>
        <div className="mock-pro-email" style={{ borderColor: 'rgba(236, 72, 153, 0.45)', boxShadow: '0 20px 50px rgba(0,0,0,0.7), 0 0 40px rgba(236, 72, 153, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '10px', background: 'rgba(236, 72, 153, 0.25)', color: '#f472b6', padding: '2px 8px', borderRadius: '4px', fontWeight: 700, letterSpacing: '0.05em' }}>
              PRODUCT LAUNCH
            </span>
            <span style={{ fontSize: '11px', color: '#94a3b8' }}>Dynamic Hero Partial</span>
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 8px', color: '#ffffff', letterSpacing: '-0.02em' }}>
            Next-Gen Email Engine 2.0
          </h3>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#cbd5e1', margin: '0 0 18px' }}>
            Fluid responsive typography, multi-variant Dark Mode toggles, and animated VML hero containers.
          </p>
          <div style={{ background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', color: '#fff', padding: '10px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)' }}>
            <span>Explore Release</span>
            <span>→</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const statsRef = useRef(null);
  const sliderSectionRef = useRef(null);
  const sliderCardRef = useRef(null);

  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const activePreset = COMPARISON_PRESETS[activePresetIndex];

  // GSAP Hero entrance & Scroll-driven Genie Entrance for Slider Card
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

      // Scroll-Linked 3D Genie Lamp Unfold & Stretch Effect on Scroll-In
      if (sliderCardRef.current && sliderSectionRef.current) {
        gsap.fromTo(
          sliderCardRef.current,
          {
            opacity: 0,
            scaleX: 0.35,
            scaleY: 0.6,
            rotateX: 52,
            rotateZ: -4,
            y: 140,
            transformPerspective: 1200,
            transformOrigin: '50% 100%',
            filter: 'blur(8px) brightness(1.4)',
          },
          {
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            rotateX: 0,
            rotateZ: 0,
            y: 0,
            filter: 'blur(0px) brightness(1)',
            duration: 1.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sliderSectionRef.current,
              start: 'top 85%',
              end: 'top 30%',
              scrub: 1.2,
            },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Handler for when user slides handle fully to the right
  const handleSlideRightComplete = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    // Wait 5 seconds after completing right slide before exiting and swapping to next component
    timerRef.current = setTimeout(() => {
      if (!sliderCardRef.current) return;
      setIsTransitioning(true);

      // Genie Exit Animation (sucking into lamp)
      gsap.to(sliderCardRef.current, {
        opacity: 0,
        scaleX: 0.4,
        scaleY: 0.5,
        rotateX: 50,
        y: -70,
        filter: 'blur(6px) brightness(1.5)',
        duration: 0.85,
        ease: 'power3.in',
        onComplete: () => {
          // Switch to next preset component
          setActivePresetIndex((prev) => (prev + 1) % COMPARISON_PRESETS.length);

          // Genie Entrance Animation for next component
          gsap.fromTo(
            sliderCardRef.current,
            {
              opacity: 0,
              scaleX: 0.4,
              scaleY: 0.6,
              rotateX: -45,
              y: 90,
              filter: 'blur(6px)',
            },
            {
              opacity: 1,
              scaleX: 1,
              scaleY: 1,
              rotateX: 0,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.95,
              ease: 'power3.out',
              onComplete: () => {
                setIsTransitioning(false);
              },
            }
          );
        },
      });
    }, 5000);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

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
        style={{ padding: '0 24px 100px', position: 'relative', zIndex: 2 }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '12px' }}>
              <FoldText
                text={activePreset.title}
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
                key={activePreset.id}
              />
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto' }}>
              {activePreset.desc}
            </p>
          </div>

          <div
            ref={sliderCardRef}
            style={{
              willChange: 'transform, opacity, filter',
              transformPerspective: 1200,
              transformOrigin: '50% 100%',
            }}
          >
            <ComparisonSlider
              key={activePreset.id}
              beforeImage={activePreset.before}
              afterImage={activePreset.after}
              beforeLabel={activePreset.beforeLabel}
              afterLabel={activePreset.afterLabel}
              defaultPosition={50}
              onSlideRightComplete={handleSlideRightComplete}
            />
          </div>
        </div>
      </section>

      {/* ── Browse All Components Section on Home Page ── */}
      <ComponentsGallerySection />
    </div>
  );
}
