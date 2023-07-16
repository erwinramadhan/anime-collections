import Head from 'next/head'
import { css } from "@emotion/react"
import { useQuery } from "@apollo/client";
import { useRouter } from 'next/navigation'

import Card from '@/components/Card/Card';

import { GetAnimeListDocument, GetAnimeListQuery, GetAnimeListQueryVariables } from '../../generated/graphql'
import { useCallback, useState } from 'react';
import ReactPaginate from 'react-paginate';

const cardsWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '24px'
})

const paginationWrapperStyle = css`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .pagination {
      display: flex;
      justify-content: center;
      li {
        list-style: none;
        margin: 0 2px;
        a {
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: #333;
          cursor: pointer;
          &:hover {
            background-color: #f0f0f0;
          }
          &.selected {
            background-color: #3498db;
            color: white;
            border-color: #3498db;
          }
        }
      }
    }
  `;

export default function Home() {
  const router = useRouter()
  const [selectedPage, setSelectedPage] = useState(1)
  const { loading, data } = useQuery<GetAnimeListQuery, GetAnimeListQueryVariables>(GetAnimeListDocument, { variables: { page: selectedPage, perPage: 10 } })

  const animes = data?.Page?.media
  const pageInfo = data?.Page?.pageInfo

  const onClickCard = useCallback((id: number) => {
    router.push(`/anime/${id}`)
  }, [router])

  const onPageChange = useCallback((event: { selected: number }) => {
    setSelectedPage(event.selected + 1)
  }, [])

  return (
    <main>
      <div css={cardsWrapperStyle}>
        {animes?.map(el => <Card key={el?.id} title={el?.title?.english ?? ''} image={el?.coverImage?.large ?? ''} onClick={() => onClickCard(el?.id ?? 0)} />)}
      </div>
      <div css={paginationWrapperStyle}>
        <ReactPaginate
          onPageChange={onPageChange}
          pageCount={pageInfo?.total ?? 0}
          previousLabel={'Prev'}
          nextLabel={'Next'}
          containerClassName={'pagination'}
          activeClassName={'selected'}
          forcePage={selectedPage}
        />
      </div>
    </main>
  )
}
