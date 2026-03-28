import type { ReactNode } from "react";

export type IAuthorsProps = {
  Items: ReadonlyArray<IAuthorItem>;
  ProjectName?: string | ReactNode;
}

type IAuthorItem = {
  Role: string;
  Name: string;
}