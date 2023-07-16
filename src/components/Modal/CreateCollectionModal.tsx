import { FC } from "react";
import BaseModal from "./BaseModal";
import { css } from "@emotion/react";

const createCollectionModalnWrapper = css({
  display: 'flex',
  flexDirection: 'column',
})

const createCollectionModalTitleWrapper = css({
  alignSelf: 'center',
  textAlign: 'center',
  color: 'black',
  fontWeight: 'bold',
  marginBottom: '8px'
})

const createCollectionModalBodyWrapper = css({
  width: '100%',
  color: 'black',
  marginBottom: '16px'
})

const input = css({
  width: '100%',
  backgroundColor: 'white',
  color: 'black',
  padding: '4px 8px'
})

interface AddToCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPositive: () => void;
  onChange: () => void;
}

const CreateCollectionModal: FC<AddToCollectionModalProps> = ({ isOpen, onClose, onPositive, onChange }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} onPositive={onPositive} negativeWord="Cancel" positiveWord="Create New Collection">
      <div css={createCollectionModalnWrapper}>
        <div css={createCollectionModalTitleWrapper}>
          <p>Create New Collection</p>
        </div>
        <div css={createCollectionModalBodyWrapper}>
          <input css={input} onChange={onChange}/>
        </div>
      </div>
    </BaseModal>
  )
}

export default CreateCollectionModal