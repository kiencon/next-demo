import React from 'react';
import { fetchSubLandingPageSite, getEditableConfig } from '../../api';

const EditablePage = ({ params, data }) => {
  return (
    <>
      { `sub landing page ${params}: ${data?.length}` }
      {
        data?.map(({newFeaturedImage, id, title, thumbWidth, thumbHeight}) => (
          <img loading='lazy' key={id}
            src={`https://images.template.net${newFeaturedImage}`} 
            title={title} 
            alt={title} height={thumbHeight} width={thumbWidth} />
        ))
      }
    </>
  );
};

export default EditablePage;

export const getStaticPaths = async () => {
  const result = await getEditableConfig();
  const paths = result.map(slug => `/editable/${slug}`)
    .map(path => (
      { params: { slug: [path] }, }
    )).slice(0, 10);
  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const [ slug ] = params.slug;
  const data = await fetchSubLandingPageSite(slug);
  return {
    props: {
      params: slug || '',
      data: data || []
    }
  };
};
