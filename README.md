# React Image Gallery with Pagination

## Overview

This project is a simple image gallery built using React.  It fetches images from the Pixabay API and displays them in a grid layout with pagination.

## Features

* **Image Gallery:** Displays a grid of images fetched from Pixabay.
* **Pagination:** Allows users to navigate through multiple pages of images.
* **Responsive Design:** The image grid adapts to different screen sizes.

## Technologies Used

* React
* Axios (for fetching data from the Pixabay API)
* Tailwind CSS (for styling)

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd <project_directory>
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Add your Pixabay API key:**
    * Create a `constant.js` file in the root directory.
    * Add your API key to the file:
        ```javascript
        export const API_KEY = 'YOUR_PIXABAY_API_KEY';
        ```
    * Replace `YOUR_PIXABAY_API_KEY` with your actual API key from Pixabay.
5.  **Run the application:**
    ```bash
    npm start
    ```
6.  **View the application:**
    Open your browser and navigate to `http://localhost:3000`.

## How it Works

1.  The `Pagination` component is the main component.
2.  It uses the `useState` hook to manage the image data (`myData`) and the current page number (`page`).
3.  The `fetchData` function fetches images from the Pixabay API using Axios.  It uses the API key from `constant.js` and the current page number.  The `per_page` parameter is set to 8.
4.  The `useEffect` hook calls `fetchData` whenever the `page` state variable changes.
5.  The component displays the images in a grid layout using Tailwind CSS classes.
6.  The pagination controls (Prev and Next buttons) allow the user to change the page, updating the `page` state and triggering the `useEffect` hook to fetch the new set of images.

## Component Structure

* `Pagination`:
    * Fetches and displays images from Pixabay.
    * Provides pagination controls.

## API

* Pixabay API: `https://pixabay.com/api/`
    * Endpoint:  `https://pixabay.com/api/?key=${API_KEY}&q=flowers&page=${page}&per_page=8`
    * Parameters:
        * `key`:  Your Pixabay API key.
        * `q`:  The search query (in this case, "flowers").
        * `page`:  The page number.
        * `per_page`: The number of images per page.

## Notes

* Ensure you have a valid Pixabay API key and add it to the `constant.js` file.
* The search query is hardcoded as "flowers". You can modify this in the `fetchData` function if needed.
* The number of images per page is set to 8.  You can adjust this by changing the `per_page` parameter in the API request.
