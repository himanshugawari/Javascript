//throwing Errors and Exceptions
//and
//using Try...Catch to handle thrown Errors and Exceptions
//Error Types:
// EvalError, InternalError, RangeError, ReferenceError,
// SyntaxError, TypeError, URIError

try {
  // throw 'Gawari'; // user created error/exception
  // throw {
  //   name: 'Gwari',
  //   msg: 'Here comes Gawari',
  // }; // user created error/exception
  throw new Error('Blahblahblah'); // built in exception
  console.log('Hello');
} catch (error) {
  //   console.log('Caught', error.name, error.msg);
  console.log('Caught', error);
} finally {
  console.log('Finally here');
}
console.log('ends');
