export default function Student({ postData }) {
  return (
    <div className='student'>
      <p className='light'>Student: {postData}</p>
    </div>
  )
}

import students from '../api/data';

export async function getStaticPaths() {
  const paths = students.map(({id}) => ({
    params: { id: id.toString() }
  }))
  return {
    paths,
    fallback: false
  }
}

const getPostData = (id) => Promise.resolve(id);

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
