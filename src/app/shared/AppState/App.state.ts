import { counterReducer } from 'src/app/components/arithmetic-method/store/counter/counter.reducer';
import { blogReducer } from 'src/app/components/blog/store/blogs/blog.reducer';

export const AppState = { counter: counterReducer, blogs: blogReducer };
