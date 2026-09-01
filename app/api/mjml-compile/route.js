import mjml2html from 'mjml-browser';

export async function POST(req) {
  try {
    const { mjml } = await req.json();

    if (typeof mjml !== 'string') {
      return new Response(JSON.stringify({ error: 'Missing or invalid MJML code' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const compileResult = mjml2html(mjml, {
      validationLevel: 'soft',
      minify: false,
    });

    const result = await Promise.resolve(compileResult);
    let outputHtml = result?.html || '';

    // Inject sleek dark custom scrollbar styles so iframe doesn't show default OS white scrollbar
    const customScrollbarStyle = `
      <style>
        ::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.4);
          border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(168, 85, 247, 0.4) transparent;
        }
      </style>
    `;

    if (outputHtml.includes('</head>')) {
      outputHtml = outputHtml.replace('</head>', `${customScrollbarStyle}</head>`);
    } else if (outputHtml.includes('</body>')) {
      outputHtml = outputHtml.replace('</body>', `${customScrollbarStyle}</body>`);
    } else {
      outputHtml += customScrollbarStyle;
    }

    return new Response(
      JSON.stringify({
        html: outputHtml,
        errors: result?.errors || [],
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || 'Failed to transpile MJML' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
