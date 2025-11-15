export interface TestCase {
  markdown: string
  html: string
}

export type Spec = Record<string, TestCase>
