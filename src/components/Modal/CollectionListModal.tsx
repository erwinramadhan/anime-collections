import { FC } from "react";
import BaseModal from "./BaseModal"
import { css } from "@emotion/react";

const collectionListWrapper = css({
  display: 'flex',
  flexDirection: 'column',
})

const collectionListTitleWrapper = css({
  alignSelf: 'center',
  textAlign: 'center',
  color: 'black',
  fontWeight: 'bold',
  marginBottom: '8px'
})

const collectionListBodyWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignSelf: 'center',
  textAlign: 'center',
  color: 'black',
  marginBottom: '16px',
  gap: '8px'
})

const list = css({
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  width: '100%',
  textAlign: 'left',
  padding: '4px 8px'
})

interface CollectionListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPressItem: () => void;
  onPositive: () => void;
  collections: string[];
}

const CollectionListModal: FC<CollectionListModalProps> = ({ onClose, onPressItem, isOpen, collections }) => {
   return (
     <BaseModal isOpen={isOpen} onClose={onClose} negativeWord="Cancel" positiveWord="Create New Collection">
       <div css={collectionListWrapper}>
         <div css={collectionListTitleWrapper}>
           <p>Please Pick Your Collection</p>
         </div>
         <div css={collectionListBodyWrapper}>
           {collections.map(el => (
             <div css={list} onClick={onPressItem}>
              <p>{el}</p>
            </div>))
          }
         </div>
       </div>
     </BaseModal>
   )
}

export default CollectionListModal