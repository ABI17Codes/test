import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const twTurbopackEntry = require.resolve('@tailwindcss/turbopack');
const twRequire = createRequire(twTurbopackEntry);

const { compile, Polyfills } = twRequire('@tailwindcss/node');
const { Scanner } = twRequire('@tailwindcss/oxide');

async function buildCss() {
  const rootDir = process.cwd();
  const inputPath = path.join(rootDir, 'src', 'app', 'tailwind-source.css');
  const outputPath = path.join(rootDir, 'src', 'app', 'globals.css');

  const cssInput = fs.readFileSync(inputPath, 'utf8');

  const compiler = await compile(cssInput, {
    from: inputPath,
    base: path.dirname(inputPath),
    shouldRewriteUrls: true,
    onDependency: () => {},
    polyfills: Polyfills.All,
  });

  const scanner = new Scanner({
    sources: [
      {
        base: path.join(rootDir, 'src'),
        pattern: '**/*',
        negated: false,
      },
    ],
  });

  const candidates = [...scanner.scan()];
  const compiledCss = compiler.build(candidates);

  fs.writeFileSync(outputPath, compiledCss, 'utf8');
  console.log(`[Tailwind v4] Compiled ${candidates.length} candidates -> src/app/globals.css (${(compiledCss.length / 1024).toFixed(1)} KB)`);
}

buildCss().catch((err) => {
  console.error('Failed to compile Tailwind CSS:', err);
  process.exit(1);
});
