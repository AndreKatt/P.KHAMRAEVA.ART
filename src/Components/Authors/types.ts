export type IAuthorsProps = {
  Items: ReadonlyArray<IAuthorItem>;
  ProjectName?: string;
}

type IAuthorItem = {
  Role: string;
  Name: string;
}