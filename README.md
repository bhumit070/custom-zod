# Custom Zod

A lightweight, TypeScript-first schema declaration and validation library inspired by [Zod](https://zod.dev/).

This library allows you to easily build validation schemas for strings and numbers, complete with runtime parsing and strict TypeScript type inference out of the box!

## 🚀 Features

- **String Validation**: Specify exact requirements (min/max length).
- **Number Validation**: Validate minimum/maximum values, integers, and floats.
- **Type Inference**: Extract perfectly typed TypeScript definitions from your schemas using `z.infer`.
- **Zero Dependencies**: A small and clean validation core, fully written in modern TypeScript.

## 📦 Getting Started

### Installation

If you are using this as a local module or package, simply ensure you have dependencies installed:

```bash
pnpm install --frozen-lockfile
```

## 📖 Usage 

Import the custom `z` object into your files to start defining schemas:

```typescript
import z from './src/index.js';
```

### String Validation

You can validate strings and chain rules like `min` and `max` length bounds:

```typescript
const stringSchema = z.string().min(3).max(10);

// Returns the validated string if successful
const result = stringSchema.parse("hello"); 

// Throws an Error: "Value must be at least 3 characters long"
stringSchema.parse("hi"); 
```

### Number Validation

You can validate numeric values and enforce specific boundaries or types (integer/float):

```typescript
const numberSchema = z.number().min(18).max(100).integer();

// Returns the validated number
const result = numberSchema.parse(25);

// Throws an Error: "Value must be an integer"
numberSchema.parse(25.5);
```

### TypeScript Type Inference

Just like the original Zod library, you can statically infer the TypeScript type from any schema you create! This prevents you from ever needing to declare types twice.

```typescript
const userAgeSchema = z.number().min(1).max(120);

// Automatically inferred as `number`!
type UserAge = z.infer<typeof userAgeSchema>;

const validAge: UserAge = 25; 
```

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/) for unit testing. The test suite thoroughly covers all parser functionalities and error bounds. 

Run the test suite via pnpm:

```bash
pnpm test
```
