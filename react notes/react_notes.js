// ! what is component
// A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

// !what is forwardRef
// useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref. In React, the "forwardRef" function is a feature that allows you to pass a ref through a component to one of its child components. Refs in React provide a way to directly access and interact with the underlying DOM elements or React components.
// ?useImperativeHandle(ref, createHandle, dependencies?)

// The useImperativeHandle hook is used in conjunction with forwardRef to allow a parent component to access and interact with specific functions or values exposed by a child component.

// !useDebugValue
// useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools.
// ? it only used inside coutome hook

//! what is differece between useLayoutEffect and useInsersationEffect
// the main difference between is that the useLayouLayoutEffect render after DOM mutation and UseInsersationEffect is render before DOM mutation

//!what is useDeferredValue
//!it work asynchronously
// useDeferredValue is a React Hook that lets you defer updating a part of the UI.

// const deferredValue = useDeferredValue(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => setData(data));

//     setIsLoading(false);
//   });
