import { useRouter } from 'next/router';
import React from 'react';
import { getEditableUrls } from '../../api';

const EditablePage = ({ params }) => {
  const router = useRouter();
  const { query } = router;
  return (
    <>
      { JSON.stringify(params) }
      { JSON.stringify(query) }
    </>
  );
};

export default EditablePage;

export async function getStaticPaths() {
  const result = await getEditableUrls();
  const paths = result
    .map(({ url }) => url.replace('/editable/', '').replace('/', ''))
    .filter(url => url)
    .map(url => (
      { params: { slug: [url] }, }
    ));
  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps(ctx) {
  console.log('params', ctx);
  return {
    props: {
      params: ctx.params
    }
  };
}
