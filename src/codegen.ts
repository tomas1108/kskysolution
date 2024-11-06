export default (async () => {
  return {
    documents: ['src/gql/**/*.{ts,tsx}'],
    schema: [
      {
        [`https://x417txp6ye.execute-api.ap-southeast-1.amazonaws.com/dev/graphql`]:
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYW5vbnltb3VzIl0sIngtaGFzdXJhLXJvbGUiOiJhbm9ueW1vdXMiLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJhbm9ueW1vdXMiLCJ4LWhhc3VyYS11c2VyLWlkIjoiMWM5YTg0MGEtNGUzOC00NDlmLTk2NjEtOTJmOWIwZWViODZiIn0sInN1YiI6IjFjOWE4NDBhLTRlMzgtNDQ5Zi05NjYxLTkyZjliMGVlYjg2YiIsImlhdCI6MTcyMjg3OTY5OSwiZXhwIjoyMDM4MjM5Njk5fQ.UUFpuBkG42Xk0nnCdRhmUQqITIswtjfRV4W4iKc_4g4`
            }
          }
      }
    ],
    overwrite: true,
    hooks: {
      afterAllFileWrite: 'prettier --write'
    },
    generates: {
      './src/types/generated.d.ts': {
        plugins: [
          'typescript',
          'typescript-operations',
          'typescript-react-apollo'
        ],
        config: {
          preset: 'client',
          presetConfig: {
            gqlTagName: 'gql'
          },
          skipTypename: false,
          noExport: true,
          declarationKind: 'interface',
          constEnums: false,
          namingConvention: {
            typeNames: 'change-case#pascalCase'
          }
        }
      },
      './src/types/generated.ts': {
        plugins: [
          'typescript',
          'typescript-operations',
          'typescript-react-apollo'
        ],
        config: {
          preset: 'client',
          presetConfig: {
            gqlTagName: 'gql'
          },
          skipTypename: false,
          noExport: false,
          declarationKind: 'interface',
          constEnums: true,
          namingConvention: {
            typeNames: 'change-case#pascalCase'
          }
        }
      }
    }
  };
})();
