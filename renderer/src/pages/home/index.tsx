import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const [message, setMessage] = React.useState('No message found')

  React.useEffect(() => {
    window.ipc.on('message', (message: string) => {
      setMessage(message)
    })
  }, [])

  return (
    <React.Fragment>
      <div>
        estou na pagina 1
      </div>
      <Link href='/next'>Pagina 2</Link>
      <div>
        <button
          onClick={() => {
            window.ipc.send('message', 'Hello')
          }}
        >
          Test IPC
        </button>
        <p>{message}</p>
      </div>
    </React.Fragment>
  )
}
