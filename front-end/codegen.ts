import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config();

const config: CodegenConfig = {
  schema: process.env.REACT_APP_GRAPHQL_URI,
  documents: ["src/**/*.ts", "src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
