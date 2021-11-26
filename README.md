This example shows how to run R code using Next.js

It takes user generated input (a number from the URL), runs it through a squaring function in R, and shows the output on the web page.

## Setting up

- Install R
- Install Node.js: https://nodejs.org/en/
  - Go for the LTS version if you're not sure
- Clone this repo to your machine
- On the command line go to the root of this project
  - Run `npm install` and wait for the installation to finish
  - Run `npm run dev`
  - In your browser go to `localhost:3000`
  - To square any number go to `http://localhost:3000/square/NUMBER` where you can replace `NUMBER` with any number
    - The squaring is done by the R code in `r-scripts/test-method.R`
