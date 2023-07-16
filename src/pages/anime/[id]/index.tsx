import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client'
import { convertMinutesToString, getCollections, getRating } from '@/utils';

import { GetDetailAnimeDocument, GetDetailAnimeQuery, GetDetailAnimeQueryVariables } from '../../../../generated/graphql'
import { css } from '@emotion/react';
import Image from 'next/image';
import Modal from '@/components/Modal/BaseModal';
import AddToCollectionModal from '@/components/Modal/AddToCollectionModal';
import CollectionListModal from '@/components/Modal/CollectionListModal';
import CreateCollectionModal from '@/components/Modal/CreateCollectionModal';
import { useCallback, useEffect, useState } from 'react';

const detailAnimeWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '24px'
})

const detailAnimeImg = css({
  borderRadius: '16px',
  marginBottom: '16px'
})

const detailAnimeTitleGenreWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
})

const detailAnimeTitle = css({
  fontSize: '24px',
  color: 'white',
  fontWeight: 'bold'
})

const detailAnimeGenre = css({
  fontSize: '16px',
  color: 'white',
  fontWeight: 'normal'
})

const detailAnimeDescriptionWrapper = css({
  paddingTop: '24px',
  marginBottom: '24px'
})

const button = css({
  padding: '8px 16px'
})

const DetailAnime = () => {
  const router = useRouter();
  const { id } = router.query;
  const idNumber = typeof id === 'string' ? parseInt(id) : 0
  const { loading, data } = useQuery<GetDetailAnimeQuery, GetDetailAnimeQueryVariables>(GetDetailAnimeDocument, { variables: { id: idNumber } })
  const [collections, setCollections] = useState<[]>([])

  const detailAnime = data?.Media

  useEffect(() => {
    setCollections(getCollections(window.localStorage))
  }, [])

  const [modalState, setModalState] = useState({
    isAddToCollectionOpen: false,
    isCollectionListOpen: false,
    isCreateCollectionOpen: false
  })

  const onAddAnimeToCollection = useCallback(() => {
    setModalState(prevState => ({
      ...prevState,
      isAddToCollectionOpen: true
    }))

  }, [])

  const onCloseAddtoCollectionModal = useCallback(() => {
    setModalState(prevState => ({
      ...prevState,
      isAddToCollectionOpen: false
    }))
  }, [])

  const onCloseCollectionListModal = useCallback(() => {

  }, [])

  const onCloseCreateCollectionModal = useCallback(() => {
    setModalState(prevState => ({
      ...prevState,
      isCreateCollectionOpen: false
    }))
  }, [])

  const onPositiveAddtoCollectionModal = useCallback(() => {
    if (collections.length === 0) {
      setModalState(prevState => ({
        ...prevState,
        isCreateCollectionOpen: true
      }))
      return
    }

    setModalState(prevState => ({
      ...prevState,
      isCollectionListOpen: true
    }))
  }, [collections])

  const onPositiveCollectionListModal = useCallback(() => {

  }, [])

  const onPositiveCreateCollectionModal = useCallback(() => {

  }, [])

  const onPressItemCollectionModal = useCallback(() => {

  }, [])

  const onChangeInputCreateCollectionModal = useCallback(() => {

  }, [])

  return (
    <div css={detailAnimeWrapper}>
      <img src={detailAnime?.coverImage?.extraLarge ?? ''} css={detailAnimeImg} />
      <div css={detailAnimeTitleGenreWrapper}>
        <p css={detailAnimeTitle}>{detailAnime?.title?.english ?? ''}</p>
        <p css={detailAnimeGenre}>{detailAnime?.genres?.map(el => `${el}, `)}</p>
        <p>Runtime: {convertMinutesToString(detailAnime?.duration ?? 0)}</p>
        <p>Total Episode: {detailAnime?.episodes ?? 0}</p>
        <p>Rating: {getRating(detailAnime?.averageScore ?? 0)}</p>
      </div>
      <div css={detailAnimeDescriptionWrapper} >
        <p dangerouslySetInnerHTML={{ __html: detailAnime?.description ?? '' }} />
      </div>
      <button css={button} onClick={onAddAnimeToCollection}>
        Add Anime: '{detailAnime?.title?.english ?? ''}' into my collection
      </button>
      <AddToCollectionModal
        isOpen={modalState.isAddToCollectionOpen}
        onClose={onCloseAddtoCollectionModal}
        onPositive={onPositiveAddtoCollectionModal}
      />
      <CollectionListModal
        isOpen={modalState.isCollectionListOpen}
        onClose={onCloseCollectionListModal}
        onPressItem={onPressItemCollectionModal}
        collections={collections}
        onPositive={onPositiveCollectionListModal}
      />
      <CreateCollectionModal
        isOpen={modalState.isCreateCollectionOpen}
        onClose={onCloseCreateCollectionModal}
        onPositive={onPositiveCreateCollectionModal}
        onChange={onChangeInputCreateCollectionModal}
      />
    </div>
  )
}

export default DetailAnime