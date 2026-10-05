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