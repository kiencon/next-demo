import React from 'react';
import { searchPageSite } from '../../../api';

function SearchPage(ctx) {
  console.log(ctx);
  return (
    <>
      <div>
        <h1>Search page</h1>
      </div>
    </>
  );
}

export default SearchPage;

export const getServerSideProps = async ({ params }) => {
  console.log(params);
  const searchPageData = await searchPageSite(params.slug);
  return {
    props: {
      searchPageData: searchPageData
    }, // will be passed to the page component as props
  };
};
