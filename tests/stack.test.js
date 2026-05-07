const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});
//ett enhetstest som gör ett test på filen stack.js med hjälp av Jest

test('kontrollera att rätt siffra hamnar överst på stacken', () => {
    stack.push(10); // lägger till 10
    
    //förväntar oss att 99 ska komma överst, vilket är fel
    expect(stack.peek()).toBe(99); 
});