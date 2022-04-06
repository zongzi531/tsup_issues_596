import t from '@babel/types'
import type { Visitor } from '@babel/traverse'

export const visitor: Visitor = {
    Program: path => {
        path.node.body.forEach(statement => {
            if (t.isImportDeclaration(statement)) {
                console.log(statement)
            }
        })
    }
}
