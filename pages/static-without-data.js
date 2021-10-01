import Head from 'next/head';
const StaticWithoutData = () => {
  return (
    <>
      <Head>
        <title>Test static page</title>
      </Head>
      <h1>Test static page</h1>
      <p>
        Please make sure you have the correct access rights
        and the repository exists.
        Templatenets-MacBook-Pro:nextdemo template.net$ git branch -M master
        Templatenets-MacBook-Pro:nextdemo template.net$ git remote add origin https://github.com/kiencon/next-demo.git
        Templatenets-MacBook-Pro:nextdemo template.net$ git push -u origin master
        Enumerating objects: 24, done.
        Counting objects: 100% (24/24), done.
        Delta compression using up to 8 threads
        Compressing objects: 100% (21/21), done.
        Writing objects: 100% (24/24), 14.25 KiB | 7.13 MiB/s, done.
        Total 24 (delta 0), reused 0 (delta 0), pack-reused 0
        To https://github.com/kiencon/next-demo.git
        * [new branch]      master - master
        Branch 'master' set up to track remote branch 'master' from 'origin'.
        Templatenets-MacBook-Pro:nextdemo template.net$ yarn dev
      </p>
    </>
  )
}

export default StaticWithoutData;
