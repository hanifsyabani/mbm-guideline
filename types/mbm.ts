export type GlossaryTerm = {
  term: string;
  definition: string;
  format?: string;
  keywords?: string[];
};

export type Breakdown = {
  label: string;
  value: string;
};

export type FormatExample = {
  label: string;
  text: string;
  note?: string;
  image?: string;
  breakdown: Breakdown[];
};

export type FormatGroup = {
  id: string;
  title: string;
  description: string;
  patterns: string[];
  examples: FormatExample[];
};

export type CompareItem = {
  status: "Salah" | "Benar" | "Catatan";
  text: string;
};

export type SpecialCase = {
  title: string;
  description: string;
  items: CompareItem[];
};

export type ProgramPoint =
  | string
  | {
      text: string;
      children?: ProgramPoint[];
    };

export type ProgramBlock = {
  title: string;
  images?: string[];
  points: ProgramPoint[];
};

export type RuleItem = {
  title: string;
  points?: string[];
  wrong?: string;
  right?: string;
  right2?: string;
};

export type SourceShot = {
  src: string;
  title: string;
  alt: string;
};
