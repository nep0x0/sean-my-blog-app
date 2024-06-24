# sean-my-blog-app

## My Blog App

This project is a blog application developed by following Sean's tutorial on YouTube. The stack includes Supabase, Astro, Express, and Node.js.

### Tutorial Details

The tutorial can be found on YouTube: [Sean's Blog App Tutorial](https://www.youtube.com/watch?v=OQOY7hSyz80&t=1354s)

### Technologies Used

- **Supabase**: An open-source Firebase alternative providing backend services.
- **Astro**: A modern static site builder that delivers lightning-fast performance.
- **Express**: A minimal and flexible Node.js web application framework.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.

### Project Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/sean-my-blog-app.git
    cd sean-my-blog-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Supabase**:
    - Create a new project on Supabase.
    - Copy the Supabase URL and Anon Key to your `.env` file:
        ```env
        SUPABASE_URL=your-supabase-url
        SUPABASE_ANON_KEY=your-supabase-anon-key
        ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

5. **Open your browser** and navigate to `http://localhost:3000` to see the application in action.

### Features

- User authentication with Supabase.
- CRUD operations for blog posts.
- Fast and responsive UI built with Astro.
- RESTful API created with Express and Node.js.

### Contributions

Feel free to open issues or submit pull requests. Contributions are welcome!

### License

This project is licensed under the MIT License.
