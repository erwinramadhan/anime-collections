import { FC } from "react";
import BaseModal from "./BaseModal";
import { css } from "@emotion/react";

const addToCollectionWrapper = css({
  display: 'flex',
  flexDirection: 'column',
})

const addToCollectionTitleWrapper = css({
  alignSelf: 'center',
  textAlign: 'center',
  color: 'black',
  fontWeight: 'bold',
  marginBottom: '8px'
})

const addToCollectionBodyWrapper = css({
  alignSelf: 'center',
  textAlign: 'center',
  color: 'black',
  marginBottom: '16px'
})

interface AddToCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPositive: () => void;
}

const AddToCollectionModal: FC<AddToCollectionModalProps> = ({ isOpen, onClose, onPositive }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} onPositive={onPositive} negativeWord="Cancel" positiveWord="Add to Collection">
      <div css={addToCollectionWrapper}>
        <div css={addToCollectionTitleWrapper}>
          <p>Add to Collection</p>
        </div>
        <div css={addToCollectionBodyWrapper}>
          <p>Are you sure to add this anime into your collection?</p>
        </div>
      </div>
    </BaseModal>
  )
}

export default AddToCollectionModal