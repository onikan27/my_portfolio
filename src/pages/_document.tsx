import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

// interface Props {}
class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document