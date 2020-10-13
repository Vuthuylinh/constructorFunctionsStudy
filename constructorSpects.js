describe('Jedi Constructor', () => {
    const lukeSkywalker = new Jedi('Luke', 'Skywalker', 'Green', 'Master');
      
    it('is a function', () => {
      expect(typeof Jedi).toEqual('function');
    });
  
    it('the lukeSkywalker instance has a firstName and lastName property', () => {
      
      expect(lukeSkywalker.firstName).toBe('Luke');
      expect(lukeSkywalker.lastName).toBe('Skywalker');
    });
  
    it('the lukeSkywalker instance has a lightsaber property', () => {    
      expect(lukeSkywalker.lightsaber).toEqual('Green');
    });
  
    it('the lukeSkywalker instance has a level property', () => {    
      expect(lukeSkywalker.level).toEqual('Master');
    });
  
    it('the lukeSkywalker instance is an instance of Jedi', () => {
      expect(lukeSkywalker instanceof Jedi).toBe(true);
      expect(Object.getPrototypeOf(lukeSkywalker) === Jedi.prototype).toBe(true);
    });
  
  });


describe('normalFunction', () => {
  
    it('is a function', () => {
      expect(typeof normalFunction).toEqual('function');
    });
  
    it('assigns the normalFunction.prototype object to the global variable normalFunctionPrototypeProperty', () => {    
      expect(normalFunctionPrototypeProperty).toEqual(normalFunction.prototype);
    });
  
    it('assigns the internal [[Prototype]] of the normalFunction function object to the global variable normalFunctionInternalPrototype', () => {    
      expect(normalFunctionInternalPrototype).toEqual(Object.getPrototypeOf(normalFunction));
    });
  
    it('adds the property helloWorld to the normalFunction.prototype object and assigns the property the string "hello world"', () => {
        expect(normalFunction.prototype.helloWorld).toBe('hello world');
    });
  
    
  });