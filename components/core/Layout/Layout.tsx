import React from 'react';
import { usePreventScroll } from '@react-aria/overlays';
// import debounce from 'lodash.debounce';
import { Modal } from '@components/ui';
import { useUI } from '@components/ui/context';

import { Root, Main } from './Layout.styles';

const Layout: React.FC = ({ children }) => {
  const { displayModal, closeModal, modalView } = useUI();
  // const [hasScrolled, setHasScrolled] = React.useState<boolean>(false);

  usePreventScroll({
    isDisabled: !displayModal,
  });

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     debounce(() => {
  //       const offset = 0;
  //       const { scrollTop } = document.documentElement;
  //       setHasScrolled(scrollTop > offset);
  //     }, 1);
  //   };
  //   document.addEventListener('scroll', handleScroll);
  //   return () => document.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <Root>
      <header />
      <Main>{children}</Main>
      <Modal open={displayModal} onClose={closeModal}>
        {modalView === 'TEST_VIEW' && <div>TEST_MODAL ON!!!</div>}
      </Modal>
    </Root>
  );
};

export default Layout;
