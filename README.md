# react-from-scratch
React 0.13 + Babel (ES6/JSX) + Browserify

#React From Scratch

A simple React shell that contains all you need to run and build a basic React project.

#Installing and Usage
1. Clone the repository and run 'npm install' in the root.
2. Then run 'npm run dev' to start the build watchers and dev server.  Type Control-C to stop them.
3. Point your web browser to http://localhost:8888 and enjoy.
4. Edit src/js/hello.js and then refresh the browser.

#Contents
1. Browserify, JS bundler. 
2. Babel/Babify - the browserify plugin for Babel, an ES6/JSX transpiler.
3. Watchify - wraps browserify and watches for source code changes.
4. Watchy - Simple file watcher to copy src/html to build directory.
5. http-server - Simple web server that serves /build
6. React 0.13
7. Uglifify - Uglify plugin for Browserify
