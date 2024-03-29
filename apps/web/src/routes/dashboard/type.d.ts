declare type Project = {
  id: string;
  userId: string;
  templateId: string;
  name: string;
  createdAt: number;
  updatedAt?: number;
};

declare type Template = {
  id: string;
  userId: string;
  name: string;
  createdAt: number;
  updatedAt?: number;
};
