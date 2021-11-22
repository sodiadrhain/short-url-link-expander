# SHORT URL LINK EXPANDER

A tool that gets the full url of a short url

### Background

There are many tools like bitly, shorturl etc. through which we can convert our long and messy URL into a short and better looking URL. 

**But a URL expander will do the opposite.**
So we can get the original long URL from the short URL using it.

**But why?**
Well some bad guy can take this virus download link eg. [https://www.badsite.com/virus.exe](https://www.badsite.com/virus.exe) and shorten it to [https://shorturl.at/wDPZ5](https://shorturl.at/wDPZ5). 
And now just by seeing the short URL you won't be able to tell that this link downloads a virus. 
So sometimes to prevent viruses and inappropriate websites we can use a URL Expander.

## Development Environment

### Setup

Ensure you have the following softwares installed:

- [Node](https://nodejs.org)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
- [Docker](https://docs.docker.com/install/) (if you need to run as container)
- [Git](https://www.atlassian.com/git/tutorials/install-git)

Clone the [repository](https://github.com/sodiadrhain/short-url-link-expander) and proceed with the instructions below.

### Running App locally

This app is written with Vuejs so Nodejs powers it; Enter the following commands to start app locally

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run dev
```

### Open browser and visit

```
http://localhost:5000
```

## Running as Docker Container

**From within the project directory run the following:**

```
yarn docker:bash
```

to build image and container for app

when this is done, app will basically start on port `5000`.

### Viewing the running ports

Open a new terminal window and run the following command:

```
docker ps
```

You will be given a printout showing your running containers. Part of the printout should contain something like this:

```
.....   0.0.0.0:5000->5000/tcp,     short_url_link_expander

```

This tells you that the various machines exist "locally" at 0.0.0.0 and that the exposed web port have been mapped to port 5000.

### Stopping Container

To stop the docker development environment, issue the following command from the project root:

```
yarn docker:down
```

This will stop all the container and related to this project.

### Starting Container

To start the docker development environment another time run:

```
yarn docker:up
```

This will start the container again.

### View the Home Page

To load the homepage of the app, visit the url below in a browser:

    http://0.0.0.0:5000

Thus your adventure begins... The project is up and running.