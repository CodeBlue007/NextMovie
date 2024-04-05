declare global {
  namespace NodeJS {
    interface ProcessEnv {
      OMDB_API_KEY: string
    }
  }
}
