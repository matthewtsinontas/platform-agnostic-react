import React from 'react'
import { storiesOf } from '@storybook/react'
import Title from 'title-component'

storiesOf('Title', module)
    .add('w/ text', () => <Title text="This is a title" />)
