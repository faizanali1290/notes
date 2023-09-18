//! what is a  createPortal
//  createPortal lets you render some children into a different part of the DOM.
// react  portal provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component now
// we can render a component  that is not under this root elment 

// firt we create a element in index.html
// and next get the element id
//  import reactDOM.createPortal(<component>,id)
// ReactDOM.createPortal(child, container)


//! what is flushSync 

// flushSync lets you force React to flush any updates inside the provided callback synchronously. This ensures that the DOM is updated immediately.

// sometime we want to update the state imegediately in react 
// the execution can outside  dom such alert confrom us sa ply kuch karna cahata ho to used flushSync ka used karay