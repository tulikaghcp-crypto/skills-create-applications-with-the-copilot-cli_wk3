const calculator = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    test('should handle zero', () => {
      expect(calculator.add(0, 5)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(calculator.add(2.5, 3.5)).toBe(6);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract two negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should subtract negative from positive', () => {
      expect(calculator.subtract(10, -5)).toBe(15);
    });

    test('should handle zero', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
      expect(calculator.subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(calculator.subtract(10.5, 4.2)).toBe(6.3);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply two negative numbers', () => {
      expect(calculator.multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative numbers', () => {
      expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test('should handle zero', () => {
      expect(calculator.multiply(0, 5)).toBe(0);
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should multiply decimal numbers', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by one', () => {
      expect(calculator.multiply(42, 1)).toBe(42);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide two negative numbers', () => {
      expect(calculator.divide(-20, -5)).toBe(4);
    });

    test('should divide positive by negative', () => {
      expect(calculator.divide(20, -5)).toBe(-4);
    });

    test('should divide numbers resulting in decimal', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide decimal numbers', () => {
      expect(calculator.divide(10.5, 2.5)).toBeCloseTo(4.2, 1);
    });

    test('should throw error on division by zero', () => {
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => {
        calculator.divide(0, 0);
      }).toThrow('Division by zero is not allowed');
    });

    test('should divide zero by non-zero number', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });
  });

  describe('Example Operations from Calculator Image', () => {
    test('should calculate 2 + 3 = 5', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should calculate 10 - 4 = 6', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should calculate 45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should calculate 20 / 5 = 4', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });
  });

  describe('Modulo', () => {
    test('should calculate modulo of two positive numbers', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo of larger numbers', () => {
      expect(calculator.modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo with exact division', () => {
      expect(calculator.modulo(20, 5)).toBe(0);
    });

    test('should handle negative modulo', () => {
      expect(calculator.modulo(-10, 3)).toBe(-1);
    });

    test('should handle modulo with negative divisor', () => {
      expect(calculator.modulo(10, -3)).toBe(1);
    });

    test('should throw error on modulo by zero', () => {
      expect(() => {
        calculator.modulo(10, 0);
      }).toThrow('Modulo by zero is not allowed');
    });

    test('should handle modulo with decimal numbers', () => {
      expect(calculator.modulo(10.5, 3)).toBeCloseTo(1.5, 1);
    });
  });

  describe('Power', () => {
    test('should calculate power with positive numbers', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power with larger exponents', () => {
      expect(calculator.power(5, 2)).toBe(25);
    });

    test('should handle power of zero exponent', () => {
      expect(calculator.power(10, 0)).toBe(1);
    });

    test('should handle power with negative exponent', () => {
      expect(calculator.power(2, -3)).toBeCloseTo(0.125, 3);
    });

    test('should handle negative base with even exponent', () => {
      expect(calculator.power(-2, 2)).toBe(4);
    });

    test('should handle negative base with odd exponent', () => {
      expect(calculator.power(-2, 3)).toBe(-8);
    });

    test('should handle fractional exponent', () => {
      expect(calculator.power(4, 0.5)).toBe(2);
    });

    test('should handle power with decimal base and exponent', () => {
      expect(calculator.power(2.5, 2)).toBe(6.25);
    });

    test('should handle base of one', () => {
      expect(calculator.power(1, 100)).toBe(1);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root of perfect square', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root of another perfect square', () => {
      expect(calculator.squareRoot(25)).toBe(5);
    });

    test('should calculate square root of zero', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should calculate square root of non-perfect square', () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should calculate square root of decimal number', () => {
      expect(calculator.squareRoot(2.25)).toBe(1.5);
    });

    test('should calculate square root of large number', () => {
      expect(calculator.squareRoot(10000)).toBe(100);
    });

    test('should throw error on negative number', () => {
      expect(() => {
        calculator.squareRoot(-9);
      }).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error on negative decimal', () => {
      expect(() => {
        calculator.squareRoot(-4.5);
      }).toThrow('Cannot calculate square root of a negative number');
    });

    test('should handle square root of one', () => {
      expect(calculator.squareRoot(1)).toBe(1);
    });
  });

  describe('Example Operations from Extended Calculator Image', () => {
    test('should calculate 5 % 2 = 1', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate 2 ^ 3 = 8', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate √16 = 4', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });
  });
});
