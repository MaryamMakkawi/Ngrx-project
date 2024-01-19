export interface IBlogState {
  id: string;
  title: string;
  description: string;
  type?: string;
}
export interface IBlogs {
  blogs: IBlogState[];
}
