export const N = 128; // grid cells per side
export const CS = 4; // cell size in meters
export const WORLD = N * CS; // 512 m
export const HALF = WORLD / 2;
export const G = 9.81;
export const SEA_LEVEL = 0;
export const SHORE_I = 26; // first land column
export const SRC_I = 22; // ocean source columns i < SRC_I
export const FLOOD_DEPTH = 0.1; // m, threshold for "flooded"
export const SAFE_ELEV = 9; // m, elevation considered safe for pedestrians
export const SUB_DT = 0.05; // fixed simulation substep (s)

export const clamp = (v: number, lo: number, hi: number): number =>
  v < lo ? lo : v > hi ? hi : v;

export const idx = (i: number, j: number): number => j * N + i;

export const cellToWorldX = (i: number): number => (i + 0.5) * CS - HALF;
export const cellToWorldZ = (j: number): number => (j + 0.5) * CS - HALF;

export const worldToCell = (w: number): number =>
  clamp(Math.round((w + HALF) / CS - 0.5), 0, N - 1);
