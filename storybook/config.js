import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

/*
  Add new stories here
*/
function loadStories() {
  // Get the dependency tree and setup a regex expr for getting components
  const { dependencies } = require('../package.json')
  const re = /(-component)/g

  // Get the component names, filter and camel case them, then require
  Object.keys(dependencies)
    .filter(dep => dep.match(re))
    .map(dep =>
      dep
        .split('-component')[0]
        .split('-')
        .map(string => string.charAt(0).toUpperCase() + string.slice(1))
        .join('')
    )
    .forEach(dep => require(`./stories/${dep}.jsx`))
}

/*
  Need to wrap the stories in the theme provider for any components that are
  expecting a theme prop
*/
addDecorator(story => <ThemeProvider theme={{}}>{story()}</ThemeProvider>)

/*
  Configure the stories
*/
configure(loadStories, module)
