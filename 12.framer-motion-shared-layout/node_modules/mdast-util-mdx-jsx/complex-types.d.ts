import {Node} from 'unist'
import {Parent, Literal, BlockContent, PhrasingContent} from 'mdast'
import {Program} from 'estree-jsx'

export interface MDXJsxAttributeValueExpression extends Literal {
  type: 'mdxJsxAttributeValueExpression'
  data?: {estree?: Program} & Literal['data']
}

export interface MDXJsxAttribute extends Node {
  type: 'mdxJsxAttribute'
  name: string
  value?: MDXJsxAttributeValueExpression | string | null
}

export interface MDXJsxExpressionAttribute extends Literal {
  type: 'mdxJsxExpressionAttribute'
  data?: {estree?: Program} & Literal['data']
}

interface MDXJsxElementFields {
  name: string | null
  attributes: Array<MDXJsxAttribute | MDXJsxExpressionAttribute>
}

export interface MDXJsxFlowElement extends MDXJsxElementFields, Parent {
  type: 'mdxJsxFlowElement'
  children: BlockContent[]
}

export interface MDXJsxTextElement extends MDXJsxElementFields, Parent {
  type: 'mdxJsxTextElement'
  children: PhrasingContent[]
}

declare module 'mdast' {
  interface StaticPhrasingContentMap {
    mdxJsxTextElement: MDXJsxTextElement
  }

  interface BlockContentMap {
    mdxJsxFlowElement: MDXJsxFlowElement
  }
}
