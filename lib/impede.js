"use strict";

function impede(ms, chain = { ref: Promise.resolve() }) {
  return target => function () {
    return chain.ref = chain.ref
      .then(() => new Promise(_ => setTimeout(_, ms)))
      .then(() => target.apply(this, arguments));
  };
}

module.exports = impede;
