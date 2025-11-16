export interface TestCase {
  input: string
  snapshot: string
  manual?: true
}

export type Spec = Record<string, TestCase>
