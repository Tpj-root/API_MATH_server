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