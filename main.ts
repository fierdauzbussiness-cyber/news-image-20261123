// news-image-20261123 — entry program (Node 22, standard library only).
//
// The entry is the PNG beside this file: a hand-drawn newspaper-style
// infographic summing up Monday 23 November 2026 in six verified stories:
// COP31 collapsing in Antalya with no climate deal; Ukraine sinking the
// Russian corvette Merkury off Benghazi with seven sea drones; Asian chip
// stocks sliding in the AI rout; Democrats clinching their largest US House
// majority since 1992; a Delta weight-and-balance outage delaying 1,600+
// flights; and South Korea's education minister quitting over AI exam-
// cheating chaos. The image is drawn at build time (1024x1024 PNG, well
// under the 1 MiB cap), so this program only has to place the exact bytes
// at the output path.
//
// Deterministic by construction: the same input file is copied, byte for
// byte, on every run, so two runs always write identical output. Nothing
// here reads the network, the clock, or any environment besides the output
// directory below.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
