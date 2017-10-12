const ReactFauxDOM = require('react-faux-dom');

function getRfd() {
  return ReactFauxDOM;
}

function getFactory() {
  try {
    return require('react-faux-dom/lib/factory');
  } catch(e) {
    return getRfd;
  }
}

module.exports = getFactory();
