// src/index.ts
import t from "@babel/types";
var visitor = {
  Program: (path) => {
    path.node.body.forEach((statement) => {
      if (t.isImportDeclaration(statement)) {
        console.log(statement);
      }
    });
  }
};
export {
  visitor
};
