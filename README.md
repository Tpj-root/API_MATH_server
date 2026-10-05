# API_MATH_server

Yes. Let's make it **very simple**: React frontend is not needed for the API itself. We can build a local **Node.js + Express math API server**, with a small reusable math library.

Project:

```text
math-api/
├── package.json
├── server.js
└── math/
    └── math.js
```

### 1. `package.json`

```json
{
  "name": "math-api",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "dependencies": {
    "express": "^4.21.2"
  }
}
```

### 2. `math/math.js`

This is your own reusable math library.

```js
// Addition
export function add(a, b) {
  return a + b;
}

// Subtraction
export function sub(a, b) {
  return a - b;
}

// Multiplication
export function mul(a, b) {
  return a * b;
}

// Division
export function div(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

// Square root
export function sqrt(a) {
  return Math.sqrt(a);
}

// Power
export function pow(a, b) {
  return Math.pow(a, b);
}

// Sine
export function sin(a) {
  return Math.sin(a);
}

// Cosine
export function cos(a) {
  return Math.cos(a);
}

// Tangent
export function tan(a) {
  return Math.tan(a);
}

// Absolute value
export function abs(a) {
  return Math.abs(a);
}
```

So your 10 functions are:

```text
add
sub
mul
div
sqrt
pow
sin
cos
tan
abs
```

---

### 3. `server.js`

```js
import express from "express";

import {
  add,
  sub,
  mul,
  div,
  sqrt,
  pow,
  sin,
  cos,
  tan,
  abs
} from "./math/math.js";

const app = express();

app.use(express.json());

const PORT = 8000;


// ----------------------------------------
// HOME
// ----------------------------------------

app.get("/", (req, res) => {
  res.json({
    name: "My Math API",
    version: "1.0.0",
    functions: [
      "add",
      "sub",
      "mul",
      "div",
      "sqrt",
      "pow",
      "sin",
      "cos",
      "tan",
      "abs"
    ]
  });
});


// ----------------------------------------
// ADD
// ----------------------------------------

app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    operation: "add",
    a,
    b,
    result: add(a, b)
  });
});


// ----------------------------------------
// SUBTRACT
// ----------------------------------------

app.get("/sub", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    operation: "sub",
    a,
    b,
    result: sub(a, b)
  });
});


// ----------------------------------------
// MULTIPLY
// ----------------------------------------

app.get("/mul", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    operation: "mul",
    a,
    b,
    result: mul(a, b)
  });
});


// ----------------------------------------
// DIVIDE
// ----------------------------------------

app.get("/div", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  try {
    res.json({
      operation: "div",
      a,
      b,
      result: div(a, b)
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});


// ----------------------------------------
// SQRT
// ----------------------------------------

app.get("/sqrt", (req, res) => {
  const a = Number(req.query.a);

  res.json({
    operation: "sqrt",
    a,
    result: sqrt(a)
  });
});


// ----------------------------------------
// POWER
// ----------------------------------------

app.get("/pow", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    operation: "pow",
    a,
    b,
    result: pow(a, b)
  });
});


// ----------------------------------------
// SIN
// ----------------------------------------

app.get("/sin", (req, res) => {
  const a = Number(req.query.a);

  res.json({
    operation: "sin",
    a,
    result: sin(a)
  });
});


// ----------------------------------------
// COS
// ----------------------------------------

app.get("/cos", (req, res) => {
  const a = Number(req.query.a);

  res.json({
    operation: "cos",
    a,
    result: cos(a)
  });
});


// ----------------------------------------
// TAN
// ----------------------------------------

app.get("/tan", (req, res) => {
  const a = Number(req.query.a);

  res.json({
    operation: "tan",
    a,
    result: tan(a)
  });
});


// ----------------------------------------
// ABS
// ----------------------------------------

app.get("/abs", (req, res) => {
  const a = Number(req.query.a);

  res.json({
    operation: "abs",
    a,
    result: abs(a)
  });
});


// ----------------------------------------
// START SERVER
// ----------------------------------------

app.listen(PORT, "0.0.0.0", () => {
  console.log("=================================");
  console.log("       MY MATH API SERVER");
  console.log("=================================");
  console.log(`Server: http://localhost:${PORT}`);
  console.log("");
  console.log("Available APIs:");
  console.log("  /add");
  console.log("  /sub");
  console.log("  /mul");
  console.log("  /div");
  console.log("  /sqrt");
  console.log("  /pow");
  console.log("  /sin");
  console.log("  /cos");
  console.log("  /tan");
  console.log("  /abs");
  console.log("=================================");
});
```

### 4. Create and run

```bash
mkdir math-api
cd math-api

mkdir math
```

Create the three files above, then:

```bash
npm install
```

Start:

```bash
npm start
```

or development mode:

```bash
npm run dev
```

You should get:

```text
=================================
       MY MATH API SERVER
=================================
Server: http://localhost:8000
```

### 5. Test the API

Add:

```text
http://localhost:8000/add?a=10&b=20
```

Result:

```json
{
  "operation": "add",
  "a": 10,
  "b": 20,
  "result": 30
}
```

Division:

```text
http://localhost:8000/div?a=100&b=5
```

```json
{
  "operation": "div",
  "a": 100,
  "b": 5,
  "result": 20
}
```

Square root:

```text
http://localhost:8000/sqrt?a=25
```

```json
{
  "operation": "sqrt",
  "a": 25,
  "result": 5
}
```

Power:

```text
http://localhost:8000/pow?a=2&b=10
```

```json
{
  "operation": "pow",
  "a": 2,
  "b": 10,
  "result": 1024
}
```

For trigonometry, JavaScript `Math.sin()`, `Math.cos()`, and `Math.tan()` use **radians**, not degrees.

This gives you the basic architecture:

```text
Client
  │
  │ HTTP GET
  ▼
Express API Server
  │
  ├── /add
  ├── /sub
  ├── /mul
  ├── /div
  ├── /sqrt
  ├── /pow
  ├── /sin
  ├── /cos
  ├── /tan
  └── /abs
        │
        ▼
   math/math.js
        │
        ▼
      result
```