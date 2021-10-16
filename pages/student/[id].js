export default function Student({ postData }) {
  return (
    <div className='student'>
      <img src='https://images.template.net/20661/Free-Basic-Fashion-Sale-Instagram-Post-Template.jpeg'
        alt='https://images.template.net/20661/Free-Basic-Fashion-Sale-Instagram-Post-Template.jpeg'
        title='imgage'
      />
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
