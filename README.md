# Shwetas Blog

Shwetas Blog is a fullstack application dedicated to blogging about various software topics. To access the blogs, logging in is mandatory. Alternatively, users can log in directly via their GitHub account or fill out a custom form.

## Demo

Live demo : http://shwetasdhake.blogs.vercel.app/

### Steps to Run Locally

1. Clone the repo:
   Clone the GitHub repository to your local machine using the following command:

   ```sh
   git clone https://github.com/shwetd19/personal-blog-patform.git
   ```

1. Install NPM packages

```sh
    npm install npm@latest -g
```

3. Enter your API in `.env`

   ```js
   NEXT_PUBLIC_MONGO = "";

   NEXT_PUBLIC_GITHUB_ID = "";

   NEXT_PUBLIC_GITHUB_SECRET = "";

   NEXTAUTH_SECRET = "";
   ```

4. Run the project

```sh
    npm run dev
```

## Features

- Next.js and TypeScript Integration: Combining Next.js and TypeScript ensures a robust and statically-typed frontend, enhancing development capabilities and code maintainability.

- GitHub OAuth Integration: Users can log in using their GitHub account, leveraging the OAuth protocol for secure

- MongoDB Database Integration: Leveraging MongoDB provides flexibility and scalability for efficient data storage and retrieval.

- User Authentication and Authorization: Enabling users to sign in using GitHub credentials or a custom form. Implementing an authorization system controls user access to specific functionalities.

- Active Panel Features: A dedicated panel for managing blog posts, facilitating creation and deletion operations.

- SEO-Friendly Structure: Utilizing SEO-friendly URLs and optimizing meta tags enhances search engine visibility.

- Responsive Design: Ensuring seamless and user-friendly experiences across various screen sizes and devices through responsive design principles.

## Technologies Used

- Next JS | Server Actions
- TypeScript
- Next Auth
- Mongo DB / Mongoose
- Bcryptjs
- Nodemailer
- Framer Motion
- Sass

## Contributing

Open to your ideas! Share feedback, report issues, or send pull requests to enhance this project.

```

```
