import Head from 'next/head'
import { square } from '../../utils/r.js'

export default function Home({ input, output }) {
  const rFunction = [
    'square = function(data) {',
    '  return(data * data)',
    '}',
  ].join('\n')

  return (
    <article
      style={{
        padding: '2rem'
      }}
    >
      <Head>
        <title>Square</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <strong>Your input: {input}<br />
      Output: {output}</strong>

      <p>
        Change the number in the URL to change the input
      </p>

      <p>
        The input is run through the following R function:
      </p>

      <pre>
        <code>
          {rFunction}
        </code>
      </pre>
    </article>
  )
}

export async function getServerSideProps ({ params }) {
  const { num } = params
  const result = square(num)
  return {
    props: {
      input: num,
      output: result,
    }
  }
}
