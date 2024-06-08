import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function NextPage() {
  return (
    <React.Fragment>
      <div>
        <p>
          Estou na pagina 2<Link href="/home">Go to home page</Link>
        </p>
      </div>
    </React.Fragment>
  )
}
