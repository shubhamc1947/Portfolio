export const blogData = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    slug: "getting-started-with-react-hooks",
    date: "May 10, 2025",
    summary: "Learn how to use React Hooks to simplify your functional components.",
    coverImage: "/images/blog/react-hooks.jpg", // These would be placed in your public folder
    content: `
# Getting Started with React Hooks

React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component.

## useState Hook

The useState hook lets you add state to functional components:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

The useEffect hook lets you perform side effects in function components:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

Try implementing these hooks in your own projects to see how they can simplify your code!
    `,
    tags: ["React", "JavaScript", "Hooks"]
  },
  {
    id: 2,
    title: "CSS Grid vs Flexbox: When to Use Each",
    slug: "css-grid-vs-flexbox",
    date: "May 5, 2025",
    summary: "A comprehensive comparison of CSS Grid and Flexbox with practical examples.",
    coverImage: "/images/blog/css-layout.jpg",
    content: `
# CSS Grid vs Flexbox: When to Use Each

When it comes to layout in CSS, two powerful systems dominate: CSS Grid and Flexbox. Understanding when to use each can greatly improve your development workflow.

## Flexbox

Flexbox is designed for one-dimensional layouts - either a row or a column:

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
  margin: 0 10px;
}
\`\`\`

## CSS Grid

Grid is designed for two-dimensional layouts - rows and columns at the same time:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.item {
  grid-column: span 2;
}
\`\`\`

## When to Use Each

![React Hooks Diagram](/images/blog/hooks-diagram.png)

- Use **Flexbox** for:
  - Navigation bars
  - Card layouts
  - Centering items
  - Simple one-directional layouts

- Use **Grid** for:
  - Complex two-dimensional layouts
  - Image galleries
  - Overall page layout
  - Areas that require overlap

Choose the right tool based on your specific layout requirements!
    `,
    tags: ["CSS", "Web Design", "Layout"]
  }
];

