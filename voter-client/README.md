# voter-client

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Installation

```text
# https://github.com/yeoman/generator-angular#readme

yo angular voter-client

     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │    Welcome to Yeoman,    │
   `---------´   │   ladies and gentlemen!  │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

Out of the box I include Bootstrap and some AngularJS recommended modules.

? Would you like to use Gulp (experimental) instead of Grunt? No
? Would you like to use Sass (with Compass)? No
? Would you like to include Bootstrap? Yes
? Which modules would you like to include? (Press <space> to select, <a> to toggle all, <i> to inverse selection)angular-animate.js, angular-cookies.js, angular-resource.js, angu
lar-route.js, angular-sanitize.js, angular-touch.js
```

## Commands

```bash
# fix error with initial generated project
npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev

# create components
yo angular:route voter
yo angular:service voter

grunt

# uses 'serve-static' for development
grunt serve

# uses 'aliv' for development
grunt build && npm start

# uses 'serve-static' for production
grunt build && cd dist
node server.js

# local Protractor testing
webdriver-manager start # first terminal window
protractor protractor.conf.js # second terminal window

# for Protractor with Docker
# https://github.com/SeleniumHQ/docker-selenium

# install selenium stack
PROJECT_PATH="/Users/garystafford/Documents/projects/voter-services/voter-client" \
  && sh stack_deploy_local.sh ${PROJECT_PATH}

# run protractor tests from within protractor container
# against running voter client in another container (tests running app)
PROTRACTOR_CONTAINER=$(docker ps | grep protractor | awk '{print $1}')
docker exec -it ${PROTRACTOR_CONTAINER} protractor project/protractor.conf.js

# http://localhost:4444/grid/console?config=true&configDebug=true
# http://localhost:4444/grid/console

# SonarQube SCA
grunt sonarRunner
```
