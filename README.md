# Gatsby Blog

This is a Gatsby.js blog project, designed for fast and modern web development.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

This project leverages the following key technologies and features:

- **Gatsby.js**: A powerful static site generator for React.
- **MDX**: Write JSX in your Markdown documents.
- **Emotion**: A CSS-in-JS library for styling.
- **Algolia**: For fast and relevant search capabilities.
- **Netlify CMS**: A Git-based CMS for content management.
- **Responsive Design**: Adapts to various screen sizes.
- **Image Optimization**: Using `gatsby-image` and `gatsby-plugin-sharp` for optimized image delivery.

## Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/gatsby-blog.git
    cd gatsby-blog
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

## Scripts

Here are the available scripts for developing and building your Gatsby blog:

- **`npm run develop`** (or `npm start`):
  Starts the development server. You can view your site at `http://localhost:8000`.
  The GraphiQL IDE is also available at `http://localhost:8000/___graphql`.

  ```bash
  npm run develop
  ```

- **`npm run build`**:
  Compiles your Gatsby site for production. The static files will be generated in the `public` directory.

  ```bash
  npm run build
  ```

- **`npm run serve`**:
  Serves the production build locally. This is useful for testing your built site before deployment.

  ```bash
  npm run serve
  ```

- **`npm run clean`**:
  Clears the Gatsby cache and public directory. This can be helpful when you encounter build issues or want a fresh start.

  ```bash
  npm run clean
  ```

- **`npm run format`**:
  Formats your code using Prettier.

  ```bash
  npm run format
  ```

- **`npm test`**:
  Currently a placeholder. You should add your unit tests here.

  ```bash
  npm test
  ```

## Deployment

This project is configured for deployment on Netlify. The `npm run build` command generates the necessary static files, which Netlify then serves.

**Netlify Configuration**:

- **Build command**: `npm run build`
- **Publish directory**: `public/`

Make sure to configure your Algolia environment variables in Netlify for search functionality:

- `ALGOLIA_ADMIN_KEY`
- `GATSBY_ALGOLIA_APP_ID`
- `GATSBY_ALGOLIA_SEARCH_KEY`

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and ensure they adhere to the project's coding style.
4.  Write or update tests as necessary.
5.  Submit a pull request.

## License

This project is open source and available under the MIT License.
