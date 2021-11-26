import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  const createUrl = (num) => '/square/' + num

  return (
    <div>
      <Head>
        <title>Using R</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        Go to "/square/" with a number behind it to square the number. Examples:
      </p>

      <ul
        style={{
          color: 'blue',
        }}
      >
        <li>
          <Link href={createUrl(2)}><a>Square 2</a></Link>
        </li>
        <li>
          <Link href={createUrl(3)}><a>Square 3</a></Link>
        </li>
        <li>
          <Link href={createUrl(-4)}><a>Square -4</a></Link>
        </li>
      </ul>
    </div>
  )
}
