import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { searchPageSite } from '../../../api';

// const SubLandingPage = ({ data }) => {
//   <
// };

const useSubLandingPage = ({ productsRelated }) => {
  const [modal, setModalShow] = useState(false);

  const SubLandingPage = () => (
    <Modal
      //class="modal-dialog modal-dialog-scrollable modal-xl"
      animation={false}
      show={modal}
      onHide={() => setModalShow(false)}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-90w"
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          Array.isArray(productsRelated) ? 
            productsRelated.map(({newFeaturedImage, title, thumbHeight, thumbWidth }) => (
              <img
                loading='lazy' 
                key={title} 
                src={`https://images.template.net${newFeaturedImage}`} 
                title={title} alt={title} height={thumbHeight} width={thumbWidth} />
            )) :
            null
        }
      </Modal.Body>
    </Modal>
  );

  return [SubLandingPage, setModalShow];
};

// const SubLandingPage = ({productsRelated, ...props}) => {
//   return (
//     <Modal
//       class="fade modal-dialog modal-dialog-scrollable modal-xl"
//       {...props}
//       size="xl"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       dialogClassName="modal-90w"
//       scrollable={true}
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {
//           Array.isArray(productsRelated) ? 
//             productsRelated.map(({newFeaturedImage, title, thumbHeight, thumbWidth }) => (
//               <img
//                 loading='lazy' 
//                 key={title} 
//                 src={`https://images.template.net${newFeaturedImage}`} 
//                 title={title} alt={title} height={thumbHeight} width={thumbWidth} />
//             )) :
//             null
//         }
//       </Modal.Body>
//     </Modal>
//   );
// };

function SearchPage({ searchPageDataResult, slug }) {
  const { productsRelatedCount, productsRelatedPage, productsRelated } = searchPageDataResult.config;
  const [searchValue, setSearchValue] = useState(slug);
  // const [showSubLandingPage, setShowSubLandingPage] = useState(false);

  const [SubLandingPage, setModal] = useSubLandingPage({productsRelated});

  const onHandleKeyPress = e => {
    if (e.charCode === 13) {
      window.location.replace(`http://localhost:3000/editable/search/${searchValue}`);
    }
  };

  return (
    <>
      <SubLandingPage />
      <div>
        <h1>Search page</h1>
        <p>productsRelatedCount: {productsRelatedCount}</p>
        <p>productsRelatedPage: {productsRelatedPage}</p>
        <input target={searchValue}
          onKeyPress={(e) => onHandleKeyPress(e)}
          value={searchValue} 
          onChange={(e) => setSearchValue(e.target.value)} />
        {
          Array.isArray(productsRelated) ? 
            productsRelated.map(({newFeaturedImage, title, thumbHeight, thumbWidth }) => (
              <img
                onClick={() => setModal(true)}
                loading='lazy' 
                key={title} 
                src={`https://images.template.net${newFeaturedImage}`} 
                title={title} alt={title} height={thumbHeight} width={thumbWidth} />
            )) :
            null
        }
      </div>
    </>
  );
}

export default SearchPage;

export const getServerSideProps = async ({ params }) => {
  const searchPageData = await searchPageSite(params.slug);
  return {
    props: {
      slug: params.slug,
      searchPageDataResult: searchPageData
    },
  };
};
