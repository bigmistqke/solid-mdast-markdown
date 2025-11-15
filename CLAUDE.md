# Development Guidelines

## Core Principles

1. **No temporary .ts files** - Do not create temporary TypeScript/JavaScript files for testing or debugging (only for writing node scripts to manipulate the source)
2. **Add debugging logic where needed** - Use proper debugging utilities in the source code
3. **Introspection through specific tests** - If you need introspection, craft a specific test for it and add debug calls in `src/index.tsx`, do not remove these afterwards
4. **Never use console.log directly** - Always use the debug utility (`createDebug`) instead of direct console.log calls
5. **Use <Show/> for control flow** - Use SolidJS `<Show/>` component instead of ternary operators for conditional rendering
