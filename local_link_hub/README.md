# locallink-hub-34054-88228803

---

## Local Development Setup (AI Skill Recommender)

To get started with local development, follow these steps to securely configure your OpenAI API key, install dependencies, and run both backend and frontend.

### 1. Create a `.env` file for your API key

From the `local_link_hub/` directory, create a file called `.env` and add:
```
OPENAI_API_KEY=your-openai-api-key-here
```
_Never commit your real API key to source control or version history!_

### 2. Install Backend Dependencies

(If you haven't already) install all required dependencies for the Express backend and API integration:
```
npm install express node-fetch body-parser dotenv openai
```

### 3. Start the Backend Server

From the same directory, launch:
```
node server.js
```
This starts the Express backend on [http://localhost:5000](http://localhost:5000), proxying API calls securely.

### 4. Ensure API Proxy for React Development

Make sure your `package.json` inside `local_link_hub/` contains:
```json
"proxy": "http://localhost:5000"
```
_This routes all `/api/...` requests from your React frontend to the Express backend automatically in dev mode, to securely hide API keys._

### 5. Start the React Frontend

In a separate terminal (also from `local_link_hub/`), run:
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

Now, any use of the Skill Recommender (from the sidebar navigation) will POST to `/api/skillRecommender`, which the backend handles by talking to OpenAI, so your API keys are _never_ exposed to the browser.

---

## AI Skill Recommender Feature

### Secure OpenAI Integration (Backend)

- An API route (`src/api/skillRecommender.js`) securely calls OpenAI for skill suggestions.
- **You must set** your OpenAI key (e.g., in `.env.local` or deployment env):
  ```
  OPENAI_API_KEY=sk-...
  ```
- Never expose your API key in frontend code.

### React Integration

- `SkillRecommenderContext` and `SkillRecommenderUI` power the frontend feature.
- Access "AI Skill Recommender" via the sidebar navigation in the app.
- To customize or extend:
  - AI call and business logic: `src/SkillRecommenderContext.js`
  - User UI/experience: `src/SkillRecommenderUI.js`

### Local Development & Deployment

- API route expects the `OPENAI_API_KEY` environment variable. For most React templates, backend routes require an environment variable setup compatible with your project structure (e.g., `.env.local`, Netlify/VERCEL env config, or your hosting provider's preferred system).
- Do **not** commit your OpenAI key to source control.

### Usage

- From the navigation, users can access "AI Skill Recommender".
- Users can enter their skills and interest areas, submit, and receive 3 locally-impactful AI-powered skill suggestions.

---

## Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

### Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify

### Getting Started

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm test`

Launches the test runner in interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### Customization

#### Colors

The main brand colors are defined as CSS variables in `src/App.css`:

```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

#### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css`. 

Common components include:
- Buttons (`.btn`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

### Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
