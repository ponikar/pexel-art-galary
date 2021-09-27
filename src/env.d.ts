interface ImportMetaEnv extends Readonly<Record<string, string>> {
  // more env variables...
  readonly VITE_PEXEL_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
