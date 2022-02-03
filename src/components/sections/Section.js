import React from "react";

const ScrollToButton = React.forwardRef(({ id, children }, sectionRef) => (
  <section ref={sectionRef} id={id}>
    {children}
  </section>
));

export default ScrollToButton;