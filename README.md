# Full-Stack Developer Portfolio

Welcome to my Full-Stack Developer Portfolio project! This project showcases my skills and expertise in web development, featuring a collection of my work, a blog, and a contact form. The project is built using modern web technologies and follows best practices for performance, security, and scalability.

## Table of Contents
- [Full-Stack Developer Portfolio](#full-stack-developer-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Development Workflow](#development-workflow)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Features
- **Home Page**: An introduction and overview of my skills and experiences.
- **About Page**: A detailed description of my professional background.
- **Projects Page**: A gallery showcasing my completed projects with descriptions and links.
- **Blog**: A section where I share articles, tutorials, and insights.
- **Contact Form**: A form for visitors to get in touch with me.
- **Comments System**: Allows users to leave comments on blog posts.
- **Emoji Reactions**: Users can react to blog posts with emojis.
- **Social Sharing**: Blog posts can be shared on social media platforms.

## Technologies Used
- **Frontend**:
  - [Next.js](https://nextjs.org/) (React-based framework)
  - SASS/SCSS for styling
- **Backend**:
  - Next.js API routes for backend logic
  - JWT and Auth0 for authentication
- **Database**:
  - [PostgreSQL](https://www.postgresql.org/) for data storage
- **Deployment**:
  - Docker and Docker Compose for containerization
- **Testing**:
  - Jest for unit and integration tests
- **Monitoring**:
  - Prometheus for application monitoring

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/MatthieuGriffon/portefolio.git
    cd portefolio
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env.local` file in the root directory.
    - Add your environment variables (e.g., database connection strings, API keys).

4. **Start the development server**:
    ```bash
    npm run dev
    ```

5. **Access the application**:
    - Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Home Page**: Introduces your skills and provides navigation to other sections.
- **About Page**: Details your professional journey and expertise.
- **Projects Page**: Displays your work with links to live projects or repositories.
- **Blog**: Browse and read articles, tutorials, and technical insights.
- **Contact Form**: Send a message directly from the website.

## Development Workflow

This project is dockerized to ensure a consistent development environment.

1. **Start the development environment**:
    ```bash
    docker-compose -f .devcontainer/docker-compose.dev.yml up --build
    ```

2. **Hot Reloading**:
    - The development server supports hot reloading, so changes made to the code will be reflected in real-time.

3. **Running Tests**:
    ```bash
    npm run test
    ```

## Deployment

To deploy this project, follow these steps:

1. **Build the Docker image**:
    ```bash
    docker build -t yourusername/portefolio:latest .
    ```

2. **Push the Docker image to a registry**:
    ```bash
    docker push yourusername/portefolio:latest
    ```

3. **Deploy the container to your server**:
    - Use Docker Compose or another orchestration tool to run the container on your production server.

## Contributing

Contributions are welcome! If you have any ideas or suggestions, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
