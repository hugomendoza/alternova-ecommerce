---
trigger: glob
globs: src/**/*.ts, src/**/*.tsx
---

# General Code Style & Formatting

- Use PascalCase for React component file names (e.g., UserCard.tsx, not user-card.tsx).
- Prefer named exports for components.

# Styling & UI

- Use Tailwind CSS for styling.
- Use Shadcn UI for components.

# State Management & Logic

- Use Zustand for state management.

# General Code Style & Formatting

- Use English for all code and documentation.
- Always declare the type of each variable and function (parameters and return value).
- Avoid using any.
- Create necessary types.
- Don't leave blank lines within a function.

# Naming Conventions

- Use PascalCase for classes.
- Use camelCase for variables, functions, and methods.
- Use kebab-case for file and directory names.
- Use UPPERCASE for environment variables.
- Avoid magic numbers and define constants.

# Functions & Logic

- Keep functions short and single-purpose (<20 lines).
- Avoid deeply nested blocks by:
- Using early returns.
- Extracting logic into utility functions.
- Use higher-order functions (map, filter, reduce) to simplify logic.
- Use arrow functions for simple cases (<3 instructions), named functions otherwise.
- Use default parameter values instead of null/undefined checks.
- Use RO-RO (Receive Object, Return Object) for passing and returning multiple parameters.

# Data Handling

- Avoid excessive use of primitive types; encapsulate data in composite types.
- Avoid placing validation inside functions—use classes with internal validation instead.
- Prefer immutability for data:
- Use readonly for immutable properties.
- Use as const for literals that never change.
