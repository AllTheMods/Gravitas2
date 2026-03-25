// priority 10

// -- IG ore generation config --------------------------------------------------
// Each mineral has a `variants` array. Each variant produces one TFC cluster_vein.
//   suffix   — appended to vein name: ig_<id>_<suffix>
//   rarity   — 1-in-N chunk probability (lower = more common; TFC metals range ~7–120)
//   size     — approximate ore block count per vein
//   density  — fill fraction 0.0–1.0
//   minY/maxY — Y bounds
//   weights  — [poor, normal, rich] relative spawn weights
//
// Two-variant ores split at roughly Y 40–80:
//   surface: shallower, poor-dominant (70/25/5), lower density
//   deep:    richer ore body (35/40/25), higher density
//   rich:    precious metals use (15/25/60) deep, like TFC native silver
//
// Raise globalMult to spawn more veins globally; lower it to spawn fewer.
global.igMineralData = {
  globalMult: 1.0,
  minerals: [
    // -- Copper ----------------------------------------------------------------
    {
      id: "chalcopyrite", value: "Chalcopyrite",
      formations: ["IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 55,  size: 30, density: 0.50, minY: -64, maxY: 80,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 70,  size: 25, density: 0.30, minY: 40,  maxY: 256, weights: [70, 25, 5]  },
      ],
    },
    {
      id: "cuprite", value: "Cuprite",
      formations: ["SEDIMENTARY", "IGNEOUS_EXTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 55,  size: 30, density: 0.45, minY: -64, maxY: 80,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 50,  size: 25, density: 0.30, minY: 40,  maxY: 256, weights: [70, 25, 5]  },
      ],
    },
    // Used to make Osmium, so super rare in the overworld
    {
      id: "chalcocite", value: "Chalcocite",
      formations: ["IGNEOUS_EXTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 580,  size: 18, density: 0.45, minY: -64, maxY: 80,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 560,  size: 20, density: 0.30, minY: 30,  maxY: 200, weights: [70, 25, 5]  },
      ],
    },
    // -- Lead / Silver ---------------------------------------------------------
    // DISABLED - We already have 2 galenas
    {
      id: "galena", value: "Galena",
      // formations: ["METAMORPHIC"],
      formations: [],
      variants: [
        { suffix: "deep",    rarity: 35,  size: 25, density: 0.50, minY: -64, maxY: 70,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 50,  size: 18, density: 0.30, minY: 50,  maxY: 128, weights: [70, 25, 5]  },
      ],
    },
    {
      id: "acanthite", value: "Acanthite",
      formations: ["IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 70,  size: 22, density: 0.55, minY: -64, maxY: 80,  weights: [15, 25, 60] },
        { suffix: "surface", rarity: 90,  size: 18, density: 0.30, minY: 40,  maxY: 212, weights: [70, 25, 5]  },
      ],
    },
    // -- Iron sulfide ----------------------------------------------------------
    // DISABLED - We already have 2 pyrites
    {
      id: "pyrite", value: "Pyrite",
      // formations: ["METAMORPHIC", "SEDIMENTARY"],
      formations: [],
      variants: [
        { suffix: "deep",    rarity: 30,  size: 25, density: 0.50, minY: -64, maxY: 60,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 45,  size: 20, density: 0.30, minY: 40,  maxY: 112, weights: [70, 25, 5]  },
      ],
    },
    // -- Industrial minerals ---------------------------------------------------
    {
      id: "apatite", value: "Apatite",
      formations: ["METAMORPHIC", "IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 80,  size: 25, density: 0.45, minY: -64, maxY: 80,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 95,  size: 20, density: 0.30, minY: 40,  maxY: 212, weights: [70, 25, 5]  },
      ],
    },
    // DISABLED - We already have 2 Bauxites
    {
      id: "bauxite", value: "Bauxite",
      // formations: ["SEDIMENTARY"],
      formations: [],
      variants: [
        { suffix: "deep",    rarity: 70,  size: 22, density: 0.45, minY: -64, maxY: 70,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 80,  size: 22, density: 0.35, minY: 40,  maxY: 180, weights: [70, 25, 5]  },
      ],
    },
    {
      id: "fluorite", value: "Fluorite",
      formations: ["IGNEOUS_INTRUSIVE", "IGNEOUS_EXTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 185,  size: 18, density: 0.45, minY: -64, maxY: 80,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 200,  size: 16, density: 0.30, minY: 40,  maxY: 220, weights: [70, 25, 5]  },
      ],
    },
    {
      id: "pyrolusite", value: "Pyrolusite",
      formations: ["SEDIMENTARY"],
      variants: [
        { suffix: "deep",    rarity: 85,  size: 22, density: 0.40, minY: -64, maxY: 60,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 95,  size: 20, density: 0.30, minY: 40,  maxY: 112, weights: [70, 25, 5]  },
      ],
    },
    // -- Titanium --------------------------------------------------------------
    {
      id: "ilmenite", value: "Ilmenite",
      formations: ["IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 170,  size: 22, density: 0.45, minY: 5,   maxY: 80,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 185,  size: 18, density: 0.30, minY: 50,  maxY: 140, weights: [70, 25, 5]  },
      ],
    },
    {
      id: "anatase", value: "Anatase",
      formations: ["IGNEOUS_INTRUSIVE", "IGNEOUS_EXTRUSIVE", "METAMORPHIC"],
      variants: [
        { suffix: "deep",    rarity: 170, size: 18, density: 0.40, minY: 20,  maxY: 80,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 185, size: 16, density: 0.25, minY: 50,  maxY: 180, weights: [70, 25, 5]  },
      ],
    },
    // -- Chromium --------------------------------------------------------------
    // DISABLED - We already have 2 Chromites
    {
      id: "chromite", value: "Chromite",
      // formations: ["IGNEOUS_INTRUSIVE"],
      formations: [],
      variants: [
        { suffix: "deep", rarity: 70, size: 22, density: 0.50, minY: -64, maxY: 24, weights: [35, 40, 25] },
      ],
    },
    // -- Cobalt ----------------------------------------------------------------
    {
      id: "cobaltite", value: "Cobaltite",
      formations: ["IGNEOUS_INTRUSIVE", "METAMORPHIC"],
      variants: [
        { suffix: "deep", rarity: 90, size: 20, density: 0.50, minY: -64, maxY: 72, weights: [35, 40, 25] },
      ],
    },
    // -- Nickel ----------------------------------------------------------------
    {
      id: "millerite", value: "Millerite",
      formations: ["IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 65,  size: 25, density: 0.50, minY: -64, maxY: 70,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 85,  size: 16, density: 0.30, minY: 40,  maxY: 120, weights: [70, 25, 5]  },
      ],
    },
    // -- Molybdenum / Tungsten -------------------------------------------------
    {
      id: "molybdenite", value: "Molybdenite",
      formations: ["IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 180,  size: 20, density: 0.45, minY: -64, maxY: 80,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 200, size: 16, density: 0.30, minY: 40,  maxY: 212, weights: [70, 25, 5]  },
      ],
    },
    {
      id: "scheelite", value: "Scheelite",
      formations: ["SEDIMENTARY", "IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 210,  size: 20, density: 0.45, minY: -32, maxY: 70,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 230, size: 16, density: 0.30, minY: 50,  maxY: 160, weights: [70, 25, 5]  },
      ],
    },
    {
      id: "wolframite", value: "Wolframite",
      formations: ["IGNEOUS_EXTRUSIVE", "IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 210,  size: 20, density: 0.45, minY: 0,   maxY: 80,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 230, size: 16, density: 0.30, minY: 50,  maxY: 192, weights: [70, 25, 5]  },
      ],
    },
    // -- Vanadium / Zinc -------------------------------------------------------
    {
      id: "vanadinite", value: "Vanadinite",
      formations: ["IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 105,  size: 20, density: 0.45, minY: -32, maxY: 70,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 85,  size: 18, density: 0.30, minY: 50,  maxY: 140, weights: [70, 25, 5]  },
      ],
    },
    {
      id: "smithsonite", value: "Smithsonite",
      formations: ["SEDIMENTARY"],
      variants: [
        { suffix: "deep", rarity: 185, size: 18, density: 0.40, minY: 30, maxY: 70, weights: [35, 40, 25] },
      ],
    },
    // -- Lead / Platinum (native) ---------------------------------------------------------
    {
      id: "lead", value: "Lead",
      formations: ["SEDIMENTARY"],
      variants: [
        { suffix: "deep", rarity: 420, size: 16, density: 0.35, minY: 0, maxY: 50, weights: [35, 40, 25] },
      ],
    },
    {
      id: "platinum", value: "Platinum",
      formations: ["IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep", rarity: 380, size: 14, density: 0.45, minY: 10, maxY: 80, weights: [15, 25, 60] },
      ],
    },
    // -- Zirconium -------------------------------------------------------------
    {
      id: "zircon", value: "Zircon",
      formations: ["IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 175,  size: 22, density: 0.45, minY: -64, maxY: 80,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 180,  size: 18, density: 0.30, minY: 40,  maxY: 200, weights: [70, 25, 5]  },
      ],
    },
    // -- Radioactives ----------------------------------------------------------
    // DISABLED - We already have 2 Uranninites
    {
      id: "uraninite", value: "Uraninite",
      // formations: ["IGNEOUS_INTRUSIVE"],
      formations: [],
      variants: [
        { suffix: "deep", rarity: 210, size: 18, density: 0.40, minY: -64, maxY: 32, weights: [35, 40, 25] },
      ],
    },
    {
      id: "thorianite", value: "Thorianite",
      formations: ["IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 310, size: 18, density: 0.40, minY: -32, maxY: 70,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 340, size: 14, density: 0.25, minY: 50,  maxY: 128, weights: [70, 25, 5]  },
      ],
    },
    {
      id: "monazite", value: "Monazite",
      formations: ["SEDIMENTARY", "IGNEOUS_EXTRUSIVE"],
      variants: [
        { suffix: "deep",    rarity: 300, size: 18, density: 0.40, minY: 12,  maxY: 70,  weights: [35, 40, 25] },
        { suffix: "surface", rarity: 340, size: 16, density: 0.30, minY: 50,  maxY: 120, weights: [70, 25, 5]  },
      ],
    },
    {
      id: "thorite", value: "Thorite",
      formations: ["IGNEOUS_INTRUSIVE"],
      variants: [
        { suffix: "deep", rarity: 520, size: 18, density: 0.40, minY: 0, maxY: 80, weights: [35, 40, 25] },
      ],
    },
    // -- Disabled (no TFC ore blocks registered, or TFC/coal overlap) ----------
    { id: "cryolite",    formations: [] },
    { id: "hematite",    formations: [] },
    { id: "magnetite",   formations: [] },
    { id: "cassiterite", formations: [] },
    { id: "sphalerite",  formations: [] },
    { id: "copper",      formations: [] },
    { id: "gypsum",      formations: [] },
    { id: "silver",      formations: [] },
    { id: "gold",        formations: [] },
    { id: "unobtania",   formations: [] },
    { id: "lignite",     formations: [] },
    { id: "bituminous",  formations: [] },
    { id: "anthracite",  formations: [] },
  ],
}
