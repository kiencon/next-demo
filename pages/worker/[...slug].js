export default function Worker({ id, name }) {
  return (
    <>
      Worker: {id} : {name}
    </>
  )
}

export async function getStaticPaths() {
  const paths = [
    { params: { slug: ['1', '1'] }, },
    { params: { slug: ['2', '2'] }, },
    { params: { slug: ['3', '3'] }, },
  ]
  return {
    paths,
    fallback: true
  }
}

const getPostData = params => {
  const [id, name] = params;
  return Promise.resolve({id, name});
}

export async function getStaticProps({ params }) {
  const {id, name} = await getPostData(params.slug)
  return {
    props: {
      id, name
    }
  }
}
