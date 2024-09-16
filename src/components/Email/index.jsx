import * as React from 'react'
import { Html, Button } from '@react-email/components'

function Email(props) {
  const { url } = props
  return (
    <Html lang="es">
      <Button href={url}>Click me</Button>
    </Html>
  )
}

export default Email