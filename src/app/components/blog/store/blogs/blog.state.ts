import { IBlogs } from './blog.interface';

export const initBlogsState: IBlogs = {
  blogs: [
    {
      id: '0',
      title: 'Angular',
      description: `Angular is an application-design framework and development platform for creating efficient
       and sophisticated single-page apps.These Angular docs help you learn and use the Angular framework and
       development platform, from your first application to optimizing complex single-page applications for enterprises.
        Tutorials and guides include downloadable examples to help you start your projects.`,
    },
    {
      id: '1',
      title: 'React',
      description: `React apps are made out of components. A component is a piece of the UI (user interface) that has its own
       logic and appearance. A component can be as small as a button, or as large as an entire page.`,
    },
    {
      id: '2',
      title: 'Angular material',
      description: 'Material Design components for Angular',
    },
  ],
};
