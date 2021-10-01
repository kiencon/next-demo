// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import students from './data';

const handler = async (req, res) => {
  res.status(200).json(students)
}

export default handler;
