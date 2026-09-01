export const docsData = {
  introduction: {
    slug: 'introduction',
    title: 'Introduction',
    category: 'Getting Started',
    subtitle: 'Expressive email components and partials designed for bulletproof responsiveness.',
    body: [
      'MJML Bits is an open-source library of standalone MJML partials and templates engineered for developer speed, rich visual aesthetics, and flawless cross-client rendering.',
      'Unlike generic web component libraries, every component in MJML Bits is tailored specifically to the nuances and constraints of HTML email engines (like Outlook Word engine, Gmail Web/App, Apple Mail, and Yahoo).',
    ],
    markdownContent: `# MJML Bits — Introduction

MJML Bits is an open-source collection of expressive email UI components for adding modern aesthetics and bulletproof responsiveness.

## Quick Start
1. Choose a component or partial from the docs or catalog.
2. Customize attributes and props for your brand.
3. Compile with the MJML engine into production-ready inlined HTML.

## Key Principles
- **Free & Open-Source**: Unrestricted usage in personal or commercial campaigns.
- **Client-Proof**: Tested across Outlook, Apple Mail, Gmail, Yahoo.
- **Purely Modular**: Drop-in partials with zero unnecessary runtime overhead.`,
    steps: [
      {
        num: '01',
        title: 'Install or Import',
        desc: 'Import the modular partial directly into your MJML build workflow or React Email template.',
      },
      {
        num: '02',
        title: 'Configure Attributes',
        desc: 'Customize colors, padding, typography, and layout properties via standard MJML attributes.',
      },
      {
        num: '03',
        title: 'Compile & Send',
        desc: 'Compile with the MJML engine into responsive, table-based inlined HTML ready for any ESP.',
      },
    ],
    sections: [
      {
        title: 'Core Design Philosophy',
        content: 'Emails should look modern and dynamic while guaranteeing that layout and typography never break. We believe in providing standalone, robust primitives that seamlessly integrate into any existing MJML or template workflow.',
      },
    ],
  },

  installation: {
    slug: 'installation',
    title: 'Installation & Setup',
    category: 'Getting Started',
    subtitle: 'How to install the MJML toolchain, configure your bundler, and use partials.',
    body: [
      'MJML Bits components can be used directly with the official MJML CLI, through Node.js build scripts, or in automated CI/CD email compilation pipelines.',
    ],
    markdownContent: `# Installation & Setup

## Prerequisites
- Node.js >= 18.0.0
- npm, pnpm, or yarn

## Installing MJML
Install the core MJML package in your project:

\`\`\`bash
npm install mjml
# or
pnpm add mjml
\`\`\`

## Using Partials
Include any partial inside your root \`.mjml\` file using \`<mj-include>\`:

\`\`\`xml
<mjml>
  <mj-body>
    <mj-include path="./components/header.mjml" />
    <mj-include path="./components/hero.mjml" />
    <mj-include path="./components/footer.mjml" />
  </mj-body>
</mjml>
\`\`\``,
    steps: [
      {
        num: '01',
        title: 'Install Dependencies',
        desc: 'Install mjml in your local repository or globally for CLI usage.',
      },
      {
        num: '02',
        title: 'Structure Partials',
        desc: 'Organize your MJML partials in a dedicated components directory.',
      },
      {
        num: '03',
        title: 'Automate Compilation',
        desc: 'Add an npm script to transpile MJML into minified, production HTML.',
      },
    ],
    sections: [
      {
        title: 'Command Line Usage',
        code: `# Compile a single file to HTML
npx mjml index.mjml -o index.html

# Watch directory for changes
npx mjml -w emails/*.mjml -o dist/`,
      },
      {
        title: 'Node.js Programmatic API',
        code: `import mjml2html from 'mjml';

const mjmlCode = \`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text font-size="20px" color="#ffffff">Hello World</mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
\`;

const { html, errors } = mjml2html(mjmlCode, {
  minify: true,
  keepComments: false,
});

console.log(html);`,
      },
    ],
  },

  compatibility: {
    slug: 'compatibility',
    title: 'MJML & Email Client Compatibility',
    category: 'Getting Started',
    subtitle: 'Tested matrix across desktop, mobile, and webmail clients with fallback strategies.',
    body: [
      'Email clients render HTML and CSS using vastly different rendering engines (e.g. Outlook uses Microsoft Word, Apple Mail uses WebKit, Gmail uses custom web view sanitized CSS).',
      'All MJML Bits components are pre-configured with defensive table structures, MSO conditional comments, and VML fallbacks.',
    ],
    markdownContent: `# Email Client Compatibility Matrix

## Supported Clients
- **Apple Mail (macOS / iOS)**: Full CSS support, modern typography, retina images.
- **Gmail (Web, iOS, Android)**: Full responsive fluid layouts, standard CSS classes.
- **Microsoft Outlook (2016, 2019, 2021, Office 365)**: VML vector shapes, bulletproof ghost tables.
- **Yahoo & AOL Mail**: Native media query support and flexbox fallbacks.
- **ProtonMail / Fastmail**: Modern privacy-focused webmail compatibility.`,
    steps: [
      {
        num: '01',
        title: 'Ghost Tables',
        desc: 'Conditional Outlook MSO tags ensure multi-column grids do not collapse in legacy desktop clients.',
      },
      {
        num: '02',
        title: 'Fluid Breakpoints',
        desc: 'Percentage-based column widths guarantee fluid resizing across mobile screens.',
      },
      {
        num: '03',
        title: 'VML Vector Fallbacks',
        desc: 'Background gradients and rounded corners are rendered using VML for Microsoft Outlook.',
      },
    ],
    sections: [
      {
        title: 'Outlook Desktop Support',
        content: 'To support Windows Outlook, MJML automatically generates XML conditional wrappers (<!--[if mso]>). You never have to manually craft messy nested table wrappers.',
      },
      {
        title: 'Gmail CSS Inlining',
        content: 'While modern Gmail supports <style> tags in the <head>, class stripping can occur in specific mobile web view contexts. MJML automatically inlines crucial layout rules to guarantee visual fidelity.',
      },
    ],
  },

  'client-support': {
    slug: 'client-support',
    title: 'Email Client Support Guide',
    category: 'Getting Started',
    subtitle: 'Detailed breakdown of supported rendering engines and best practices for deliverability.',
    body: [
      'Building emails is vastly different from building web applications. Understanding client quirks ensures your design renders consistently across all inboxes.',
    ],
    markdownContent: `# Client Support Guide

### WebKit (Apple Mail, iOS Mail)
The most capable email engine. Supports CSS transforms, advanced border radii, modern font-face declarations, and SVG icons.

### Blink / Gecko (Gmail Web, Thunderbird)
High compatibility with inline CSS, embedded <style> blocks, and media queries. Dark mode adjustments are supported via \`prefers-color-scheme\`.

### Microsoft Word Engine (Outlook on Windows)
Does not support flexbox, CSS grid, background-size, or max-width. Requires table layouts and VML for background images.`,
    steps: [
      {
        num: '01',
        title: 'Dark Mode Optimization',
        desc: 'Use meta tags (color-scheme: light dark) and targeted media queries to handle inverted colors.',
      },
      {
        num: '02',
        title: 'Web Safe Fonts',
        desc: 'Always provide robust font stacks with Arial, Helvetica, or sans-serif fallbacks.',
      },
      {
        num: '03',
        title: 'Image Alt Tags & Retinas',
        desc: 'Provide width attributes and descriptive alt tags to support image-blocking modes.',
      },
    ],
    sections: [
      {
        title: 'Testing Recommendations',
        content: 'We recommend testing production templates with tools like Litmus, Email on Acid, or Testi@ before launching major campaigns.',
      },
    ],
  },

  architecture: {
    slug: 'architecture',
    title: 'Architecture & Partials',
    category: 'Guides & Architecture',
    subtitle: 'Modular template structure, mj-include patterns, and maintainable email architectures.',
    body: [
      'Maintaining large email design systems requires decomposing monolithic templates into reusable, isolated partials.',
      'MJML Bits encourages a component-driven architecture where headers, hero blocks, product cards, and footers live in their own dedicated files.',
    ],
    markdownContent: `# Architecture & Partials

## Folder Structure Pattern
\`\`\`
emails/
├── components/
│   ├── header.mjml
│   ├── hero-card.mjml
│   ├── feature-grid.mjml
│   └── footer.mjml
├── styles/
│   └── theme.mjml
└── newsletter.mjml
\`\`\`

## Clean Composition
Use \`<mj-include>\` to assemble your full layout while keeping partials completely isolated and version-controlled.`,
    steps: [
      {
        num: '01',
        title: 'Atomic Partials',
        desc: 'Split templates into reusable sub-units: headers, banners, cards, and footers.',
      },
      {
        num: '02',
        title: 'Shared Attributes',
        desc: 'Define typography and colors once in <mj-attributes> and share across all partials.',
      },
      {
        num: '03',
        title: 'Compile Once',
        desc: 'Bundle and inline with the MJML compiler directly before deployment or transmission.',
      },
    ],
    sections: [
      {
        title: 'Passing Props to Partials',
        content: 'When using template engines (Handlebars, Liquid, EJS, or React Email) on top of MJML, you can inject dynamic variables into partials prior to compilation.',
      },
    ],
  },

  styling: {
    slug: 'styling',
    title: 'Custom Styling & Attributes',
    category: 'Guides & Architecture',
    subtitle: 'Mastering mj-attributes, inline styles, custom CSS classes, and dark mode.',
    body: [
      'MJML provides a clean attribute system via <mj-attributes> and <mj-class> to maintain design system consistency without repetitive inline styling.',
    ],
    markdownContent: `# Custom Styling & Attributes

## Setting Global Attributes
\`\`\`xml
<mj-head>
  <mj-attributes>
    <mj-all font-family="Plus Jakarta Sans, Arial, sans-serif" color="#ffffff" />
    <mj-text font-size="16px" line-height="1.6" />
    <mj-class name="primary-btn" background-color="#9333ea" color="#ffffff" border-radius="8px" />
    <mj-class name="accent-text" color="#c084fc" font-weight="600" />
  </mj-attributes>
</mj-head>
\`\`\`

## Applying Classes
\`\`\`xml
<mj-button mj-class="primary-btn" href="https://example.com">
  Get Started
</mj-button>
\`\`\``,
    steps: [
      {
        num: '01',
        title: 'Define mj-all',
        desc: 'Set universal typography, line heights, and default font-family in the head tag.',
      },
      {
        num: '02',
        title: 'Create mj-class Tokens',
        desc: 'Create reusable button styles, headings, and badge presets.',
      },
      {
        num: '03',
        title: 'Scoped Overrides',
        desc: 'Override attributes per-element when one-off bespoke adjustments are necessary.',
      },
    ],
    sections: [
      {
        title: 'Dark Mode with CSS Variables & Media Queries',
        code: `<mj-style>
  :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }
  @media (prefers-color-scheme: dark) {
    .dark-bg { background-color: #08080c !important; }
    .dark-text { color: #ffffff !important; }
  }
</mj-style>`,
      },
    ],
  },

  pipeline: {
    slug: 'pipeline',
    title: 'Build & Inlining Pipeline',
    category: 'Guides & Architecture',
    subtitle: 'Setting up automated compilation, minification, and ESP integration.',
    body: [
      'Learn how to integrate the MJML compiler into your modern build tools (Vite, Next.js, Webpack, or GitHub Actions CI).',
    ],
    markdownContent: `# Build & Inlining Pipeline

## Compilation Workflow
1. **Source MJML**: Write clean, modular XML with partial imports.
2. **Template Interpolation**: Insert dynamic ESP tags (SendGrid, Mailchimp, Postmark, AWS SES).
3. **MJML Transpilation**: Compile to HTML with embedded Outlook VML.
4. **Minification & Asset Inlining**: Compress HTML payload under the 102KB Gmail clipping threshold.`,
    steps: [
      {
        num: '01',
        title: 'Transpile MJML',
        desc: 'Execute mjml2html to transform your declarative XML into cross-client HTML tables.',
      },
      {
        num: '02',
        title: 'Check Payload Size',
        desc: 'Ensure total compiled HTML size is under 102KB to prevent Gmail message clipping.',
      },
      {
        num: '03',
        title: 'Deploy to ESP',
        desc: 'Push compiled templates to your ESP via API or transactional template managers.',
      },
    ],
    sections: [
      {
        title: 'Preventing Gmail 102KB Clipping',
        content: 'Gmail clips any email whose HTML source exceeds 102KB. Always minify HTML, strip redundant comments, and host large images on a CDN.',
      },
    ],
  },
};
