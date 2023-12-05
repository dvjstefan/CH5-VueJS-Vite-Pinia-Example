# Vue 3 + Vite + Pinia example

Description

I took https://github.com/jeffderek/crestron-vue-simpl-example and converted it to Vite & Pinia instead. I am very grateful that Jeff made the first version of this. It was very easy to understand and modify to fit my program.

The code is full of comments, but if you still have issue with something, just ping me.

I haven't got webXpanel to work with this setup, yet. Maybe there are someone that have time to make it work with that.

It's been tested on CP4 and TSW-1060. What I have notice, it works :)

## Installation

To install and run this project, follow these steps:

#### Prerequisites

- Node.js (version 20.10.0 or higher) (this is the version i have used)
- A package manager like npm or yarn
- Double check so you don't install latest CrComLib - DO NOT GO HIGER THAN 2.5.0

#### Clone the Repository

<pre><code>git clone https://github.com/dvjstefan/CH5-VueJS-Vite-Pinia-Example.git
cd CH5-VueJS-Vite-Pinia-Example
cd UI</code></pre>

#### Install Dependencies

<pre><code>npm install</code></pre>

or

<pre><code>yarn install</code></pre>

#### Run the Application

<pre><code>npm run dev</code></pre>

or

<pre><code>yarn dev</code></pre>

# Project Dependencies

This project uses several dependencies and development tools, each serving a specific purpose in the development and functionality of the application.

## Dependencies

- `@crestron/ch5-crcomlib`  
  **Crestron CH5 Component Library** - Provides JavaScript APIs for communication with Crestron control systems, facilitating integration of Crestron hardware capabilities into Vue apps.

- `eruda`  
  **Mobile Web Debugger** - A console tool for debugging web pages on mobile devices, essential for mobile environment testing and debugging.

- `lodash`  
  **JavaScript Utility Library** - Offers modularity, performance, and extras for utility functions like deep object manipulation, array sorting, and more.

- `pinia`  
  **Vue Store Library** - Provides a streamlined, effective way to manage and share state across components in Vue.js, with improved TypeScript support.

- `vue`  
  **Vue.js Framework** - The core library of Vue.js, used for building interactive user interfaces.

- `vue-router`  
  **Vue.js Router** - The official router for Vue.js, it simplifies the creation and management of Single Page Applications.

## DevDependencies

- `@crestron/ch5-utilities-cli`  
  **Crestron CH5 Utilities CLI** - A CLI tool for Crestron CH5 projects, aiding in tasks like component creation and project builds.

- `@vitejs/plugin-vue`  
  **Vite Vue Plugin** - The official plugin for integrating Vue 3 Single File Components (SFC) with Vite.

- `sass`  
  **CSS Extension Language** - Enables the use of advanced CSS features such as variables and nested rules in the project.

- `vite`  
  **Modern Web Project Builder** - A fast and lean build tool for modern web development, central to the project's build process.

- `vite-plugin-singlefile`  
  **Vite Single File Bundler** - A plugin for Vite to bundle the entire project into a single HTML file, simplifying deployment.
