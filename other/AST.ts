interface Identifier {
  readonly text: string;
}

enum SyntaxKind {
  InterfaceDeclaration,
  ExportKeyword,
  TypeParameter,
}

interface Token<TKind extends SyntaxKind> {
  readonly kind: TKind;
}

type Modifier = Token<SyntaxKind.ExportKeyword>;

interface Statement {
  readonly kind: SyntaxKind;
}

interface TypeElement extends NamedDeclaration {
    _typeElementBrand: any;
    readonly name?: PropertyName;
    readonly questionToken?: QuestionToken | undefined;
}

interface TypeParameterDeclaration {
  readonly kind: SyntaxKind.TypeParameter;
  readonly name: Identifier;
  readonly default?: TypeNode;
}

interface InterfaceDeclaration extends Statement {
  readonly kind: SyntaxKind.InterfaceDeclaration;
  readonly modifiers?: Modifier;
  readonly name: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: TypeElement[];
}
