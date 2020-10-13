
function Jedi(firstName, lastName, lightsaber, level){
    this.firstName = firstName;
    this.lastName = lastName;
    this.lightsaber = lightsaber;
    this.level = level;
  };
  const lukeSkywalker = new Jedi('Luke', 'Skywalker', 'Green', 'Master'); 

  
 
  
  function normalFunction(){};

  const normalFunctionPrototypeProperty = normalFunction.prototype;
  let normalFunctionInternalPrototype = Object.getPrototypeOf(normalFunction);
   normalFunction.prototype.helloWorld = 'hello world';
  
  
  console.log (normalFunctionPrototypeProperty);