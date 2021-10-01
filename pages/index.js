import Link from 'next/link';
import students from './api/data';

const Index = ({ students }) => {
  return (
    <>
      <h1>Test fallback</h1>
      <h2>Worker</h2>
      {
        students.map(({ id, name, des }) => {
          const classes = id % 2 === 0 ? 'dark' : 'light';
          return (
            <div className='student-block worker' key={id}>
              <Link href={`worker/${id}`}>
                <a>
                  <div className={classes}>
                    <p>id: {id}</p>
                    <p>name: {name}</p>
                    <p>descripton: {des}</p>
                  </div>
                </a>
              </Link>       
            </div>
          )
        })
      }
      <h2>Students:</h2>
      {
        students.map(({ id, name, des }) => {
          const classes = id % 2 === 0 ? 'dark' : 'light';
          return (
            <div className='student-block student' key={id}>
              <Link href={`student/${id}`}>
                <a>
                  <div className={classes}>
                    <p>id: {id}</p>
                    <p>name: {name}</p>
                    <p>descripton: {des}</p>
                  </div>
                </a>
              </Link>       
            </div>
          )
        })
      }
    </>
  )
}

export default Index;

const mockFunc = () => Promise.resolve(students);

export async function getStaticProps(context) {
  const data = await mockFunc();
  return {
    props: {
      students: data
    }, // will be passed to the page component as props
  }
}