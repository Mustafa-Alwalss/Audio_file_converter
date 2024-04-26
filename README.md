# ABOUT THE PROJECT

This project is a full-stack web application built to convert audio files. It utilizes React and bootstrap the for front-end and Nodejs for the back-end and Fluent-ffmpeg for file converting. TypeScript is used for type safety across both front-end and back-end

# Features

### Front-end

- Made using `react` for building user interfaces and `bootstrap` for styling.
- Responsive and simple design.
- Implements file handling features:
  - Allows file storage in a `State` after meeting specified conditions such as file size and format.
  - Includes a file format check to detect if a file format is falsely represented as another format (e.g., `audio.txt` changed to `audio.mp3`) by checking it's file signature.
  - Displays a popup modal in case of errors, indicating the nature of the `error`.

### back-end

- Made using `node` and `express`.
- `fluent-ffmpeg` used for file conversion.
- The processing of commands is handled by the `concurrently` npm package for cross-platform.

# Usage

After cloning this repository run `npm install` in both folders, `audio_file_converter` , `backend`. After that run `npm run dev` in each directory.
