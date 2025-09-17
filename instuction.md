🎯 Objective
Build a mini dashboard using Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.
This test is UI-focused.
We want to evaluate how you:
Structure and reuse components
Handle API data with hooks and state
Add meaningful animations
Maintain clean, consistent, and scalable code
👉 You do not need to solve algorithm-style problems here.

🛠 Requirements
1. Framework & Setup
Use Next.js 15 (App Router) with TypeScript.
❌ Do not use shadcn/ui or other component libraries. Use only Tailwind CSS and your own custom components.
Use Framer Motion for animations.

2. Pages / Routes
/ → Dashboard Home
Show a static summary section (e.g., welcome text, placeholder stats).
Add a small animated element (chart, card, or header).
/posts → Posts Page
Fetch posts from: https://jsonplaceholder.typicode.com/posts.
Display them in reusable Card components.
Use your custom hook (e.g., useFetch) to handle the API call.
Each post card should link to a dynamic route: /posts/[id].
/posts/[id] → Fetch and display details of that single post.
/users → Users Page
Fetch users from: https://jsonplaceholder.typicode.com/users.
