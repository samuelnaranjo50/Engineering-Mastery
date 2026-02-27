const Calculator = require('./calculator');

describe("Calculator test", () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

	test('Tripple AAA Architecture Addition test', ()=>{

        // Arrange
        const a = 4
        const b = 5

        // Act
		const result = calc.add(a,b);

        // Assert
		expect(result).toBe(9);
        expect(calc.getHistory()).toContain('Added 4 + 5 = 9');
	})

    test('Calculator Division by zero', ()=>{

        // Arrange & Assert
        expect(() => calc.divide(10, 0)).toThrow("Cannot divide by zero");
	})
    test('State Management: Should clear history correctly', () => {
    calc.add(1, 2);
    calc.clearHistory();
    expect(calc.getHistory().length).toBe(0);
  });
})