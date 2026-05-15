// Ambient declarations for side-effect asset imports (e.g. global stylesheets
// imported via the "@/" path alias). Next.js ships CSS types for relative
// imports, but path-aliased side-effect imports need this explicit declaration.
declare module "*.css";
