import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\frontity-wc-theme\src\index.js</pre>
    </>
  );
};

export default {
  name: "frontity-wc-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
