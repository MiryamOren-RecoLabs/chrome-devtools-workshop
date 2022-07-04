import Head from "next/head"

const CustomHead = (): JSX.Element => {
    return <Head>
    <title>Learn Chrome Devtools</title>
    <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/6507/6507424.png" />

    <meta property='og:title' content='Learn Chrome Devtools'/>
    <meta property='og:image' content='https://i.postimg.cc/28QBf8HK/image.png'/>
    <meta property='og:description' content='Online challenge to improve your Chrome Devtools usage and understanding'/>
    <meta property="og:type" content="website"/>
    <meta property='og:url' content='//www.learnchromedev.tools/'/>
    <meta property="og:site_name" content="learnchromedev.tools"></meta>

    <meta name="twitter:title" content="Learn Chrome Devtools"></meta>
    <meta name="twitter:site" content="@MFromTheRiver" />
    <meta name="twitter:card" content="summary"></meta>
    <meta name="twitter:description" content="Online challenge to improve your Chrome Devtools usage and understanding"></meta>
    <meta name="twitter:image" content="https://i.postimg.cc/1RkcYy2N/chrome-devtools-1x1-pic.jpg"></meta>
  </Head>
}

export default CustomHead;