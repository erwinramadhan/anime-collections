import { FC, ReactNode } from 'react';
import { css, keyframes } from '@emotion/react';

const fadeIn = keyframes({
  from: {
    opacity: '0'
  },
  to: {
    opacity: '1'
  }
})

const modalStyles = css({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${fadeIn} 0.3s ease`
})

const modalContentStyles = css({
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  margin: '0 20px'
})

const buttonsWrapper = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px'
})

const buttonWrapper = css({
  padding: '4px 8px'
})

interface BaseModalProps {
  isOpen: boolean;
  negativeWord: string;
  positiveWord?: string;
  onClose: () => void;
  onPositive?: () => void;
  children: ReactNode
}



const BaseModal: FC<BaseModalProps> = ({ isOpen, onClose, onPositive, children, negativeWord, positiveWord }) => {
  if (!isOpen) return null;

  return (
    <div css={modalStyles}>
      <div css={modalContentStyles}>
        {children}
        <div css={buttonsWrapper}>
          <button css={buttonWrapper} onClick={onClose}>{negativeWord}</button>
          {positiveWord ? <button css={buttonWrapper} onClick={onPositive}>{positiveWord}</button> : null}
        </div>
      </div>
    </div>
  );
};

export default BaseModal