#!/usr/bin/env node
/**
 * Download ALL Framer CDN modules (static + dynamic imports) and rewrite to local paths.
 * Run: node scripts/download-framer-cdn.mjs
 * Output: public/framer/*.mjs
 */

import { mkdir, writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const BASE_CDN = "https://framerusercontent.com/sites/6y0lNUvU8IY7HiXPBmCimU/";
const OUTPUT_DIR = "public/framer";

// Seed with all known modules (static imports + page bundles from script_main)
const SEED_MODULES = [
  // Core bundles
  "script_main.CnpS4C0Y.mjs",
  "react.DJ7UgqC4.mjs",
  "rolldown-runtime.D1deASqF.mjs",
  "motion.D2KMUwms.mjs",
  "framer.BLOKjrOc.mjs",
  "ypR5VEWEl.BoRLEnJo.mjs",
  "BvyOYDKED.DPX9IITB.mjs",
  "fDRzSjw63.BYT-T-5s.mjs",
  "ypR5VEWEl.DLYPVSQ5.mjs",
  "fDRzSjw63.DrDgtLRP.mjs",
  "qc681ydU9sW8y55dBm32tCKv5bbyitIyFTMaje3UMUM.BzVCdypr.mjs",
  "q5ePSxRPK.Cgx9HqdK.mjs",
  "Grain.CFBfvn0b.mjs",
  "fN1_sGlJp.CHV48JVL.mjs",
  "zdCt3kT_M.BdETTeu5.mjs",
  "zgy6bak25.DLRokvtf.mjs",
  "r23DRHX7m.-Xi0yJj9.mjs",
  "fN1_sGlJp.BdGA3VX5.mjs",
  "shared-lib.CFi5o8rJ.mjs",
  "gd6AWaps9.Cl5NzHfB.mjs",
  "HLpRTFhim.BDD5ComK.mjs",
  "dh9XiRY81.0HVBQ2zv.mjs",
  "QVvVvmpct.BpWsKYxp.mjs",
  "gd6AWaps9.DubcaPRP.mjs",
  "qNTzVcuJS.uY3sMc4l.mjs",
  "nCOD2Sdie.DJuT2m3E.mjs",
  "oFAZmwcVJ.5ar1Q0fv.mjs",
  "oFAZmwcVJ.B4UofNI3.mjs",
  "mxo_rwZbG.BEIDHbqO.mjs",
  // Page bundles (dynamic imports from script_main)
  "ScACVNdGwy8TIip6mAZBfcspvAW8d9jwhfR_YElDSxE.BIOqJAc3.mjs", // why-china
  "Yo0aHylnXZIcxxC27puZA-NvnZbhAWN5qoX65qSySJ4.BwVlP6jJ.mjs", // 404
  "BbLQsMDfmyu3I1n22YPDrdOsObBDhvs8tn3HySvOWBI.BXRcy52Y.mjs", // confirmed
  "4qr0OBDWo1ROCugXYYElgDqnmXXzBZbhU01qRWjKjCQ.BDfZYYKR.mjs", // thankyou
  "G16j_Gz-8M8cvISyanv2m5krb1dXyFX_esQMEKEUrvI.BiQ2LPQU.mjs", // our-model
  "QBiJEczUy8qESlLbccY9jvzF45WzW2fGq2tj6FPFrNE.Bq7vWFS7.mjs", // brands
  "p7TYfvDj8_R6Yhahg7jZJAuWCRPwWt-nxqNwvP1PsWo.BDSwWAso.mjs", // resources
  "TmS4QFpRv5ATPG8klURAS6_SO75u3sjYwMU6boatSAE.BbI3VtS2.mjs", // contact
  "K1P3RSsyjQac_xeASTwrDVH3aBznM9pTKRb2P38Lm8Y.DkijFPHl.mjs", // resources/:id
  "7EZs_6A5BwOnIbEqH84NPJozKd4tM_fLf8IqElWw1KY.DpLUll_K.mjs", // legal/:id
  // Collection utils
  "g4HDCRMww9Hn5D2l7_t5wOyIpySkMUKJJwUGe2zS9ss.BeIBn_f8.mjs",
  "yYg6WGmT22N0YV-Lire-E06xtJ6HQmV-i3BwuGKjtwQ.BRKNetBf.mjs",
  // Snippet module
  "gb8GNoUl_BDFcQZ_O8RCH3yK7NbCK1ujlnmAmr-eOvA.Rx_GK8G4.mjs",
];

const downloaded = new Set();
const queue = [...SEED_MODULES];
let total = 0;
let skipped = 0;

/** Rewrite all CDN import/export URLs in content to local /framer/ paths */
function rewriteImports(content) {
  const cdnBase = "https://framerusercontent.com/sites/6y0lNUvU8IY7HiXPBmCimU/";
  return (
    content
      // from "https://...CDN.../file.mjs"
      .replace(
        new RegExp(
          `from\\s+["'](${cdnBase.replace(/\//g, "\\/")}([^"']+))["']`,
          "g",
        ),
        (_, _full, file) => {
          enqueue(file);
          return `from "/framer/${file}"`;
        },
      )
      // import("https://...CDN.../file.mjs")
      .replace(
        new RegExp(
          `import\\(["'](${cdnBase.replace(/\//g, "\\/")}([^"']+))["']\\)`,
          "g",
        ),
        (_, _full, file) => {
          enqueue(file);
          return `import("/framer/${file}")`;
        },
      )
      // general string references "https://...CDN.../file.mjs"
      .replace(
        new RegExp(
          `["'](${cdnBase.replace(/\//g, "\\/")}([^"']+\\.mjs))["']`,
          "g",
        ),
        (_, _full, file) => {
          enqueue(file);
          return `"/framer/${file}"`;
        },
      )
  );
}

function enqueue(filename) {
  if (!downloaded.has(filename) && !queue.includes(filename)) {
    queue.push(filename);
    console.log(`  🔍 Found: ${filename}`);
  }
}

/** Extract ALL CDN module references from content (static + dynamic) */
function findAllImports(content) {
  const cdnBase = "https://framerusercontent.com/sites/6y0lNUvU8IY7HiXPBmCimU/";
  const regex = new RegExp(
    `${cdnBase.replace(/\//g, "\\/")}([^\\s"'\`]+\\.mjs)`,
    "g",
  );
  let match;
  while ((match = regex.exec(content)) !== null) {
    enqueue(match[1]);
  }
}

/** Extract ALL local relative module references from content (static + dynamic) */
function findRelativeImports(content) {
  // Regex to find relative imports like './filename.mjs'
  // This covers both `from "./..."` and `import("./...")`
  const regex = /(?:from|import)\s*\(?["']\.\/([^"']+\.mjs)["']\)?/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    enqueue(match[1]); // Enqueue the filename (e.g., "filename.mjs")
  }
}

async function fetchAndSave(filename) {
  if (downloaded.has(filename)) return;
  downloaded.add(filename);

  const outPath = path.join(OUTPUT_DIR, filename);

  if (existsSync(outPath)) {
    console.log(`⏭  Skip (exists): ${filename}`);
    skipped++;
    // Still parse existing file for new deps
    try {
      const existing = await readFile(outPath, "utf-8");
      findAllImports(existing); // Scan for CDN imports
      findRelativeImports(existing); // Scan for relative imports
    } catch (e) {
      console.warn(
        `  ⚠️  Error reading existing file ${filename}: ${e.message}`,
      );
    }
    return;
  }

  const url = BASE_CDN + filename;
  console.log(`⬇️  Downloading: ${filename}`);

  let content;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (!res.ok) {
      console.warn(`  ⚠️  ${res.status} ${res.statusText} — skipping`);
      return;
    }
    content = await res.text();
  } catch (e) {
    console.warn(`  ⚠️  Network error: ${e.message}`);
    return;
  }

  // Find any additional deps BEFORE rewriting
  findAllImports(content);
  findRelativeImports(content); // Scan for relative imports in newly downloaded content

  // Rewrite CDN paths → local
  const rewritten = rewriteImports(content);

  await writeFile(outPath, rewritten, "utf-8");
  total++;
  console.log(`  ✅ Saved (${total})`);
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  console.log(`📁 Output: ${OUTPUT_DIR}/\n`);

  // Process queue; findAllImports/enqueue may add items while running
  let i = 0;
  while (i < queue.length) {
    await fetchAndSave(queue[i++]);
  }

  console.log(`\n🎉 Done!`);
  console.log(`   Downloaded: ${total} files`);
  console.log(`   Skipped (already existed): ${skipped} files`);
  console.log(`   Total processed: ${downloaded.size} unique modules`);
}

main().catch(console.error);
