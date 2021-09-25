import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'

import { GET_HOME_PAGE_DETAILS } from '../operations/queries'
import { HomePageDetails } from '../operations/queries/__generated__/HomePageDetails'
import { Layout } from '../components'
import client from '../apollo-client'
import {
  MediaTitle,
  HorizontalMediaList,
  ListTitle,
  MediaWrapper,
  MediaListSection,
  Card,
} from './styles'

export interface PageProps {
  data: HomePageDetails
}

const MediaCard = styled(Card)`
  margin-bottom: 15px;
`

const Home: NextPage<PageProps> = ({ data }) => {
  return (
    <Layout>
      <MediaListSection>
        <ListTitle>Trending Now</ListTitle>
        <HorizontalMediaList>
          {data.trending?.media?.map(m => (
            <MediaWrapper key={m?.id}>
              <MediaCard>
                <Image
                  src={m?.coverImage?.large || ''}
                  alt={m?.title?.userPreferred || ''}
                  width={172}
                  height={259}
                />
              </MediaCard>
              <MediaTitle>{m?.title?.userPreferred}</MediaTitle>
            </MediaWrapper>
          ))}
        </HorizontalMediaList>
      </MediaListSection>
      <MediaListSection>
        <ListTitle>This season</ListTitle>
        <HorizontalMediaList>
          {data.season?.media?.map(m => (
            <MediaWrapper key={m?.id}>
              <MediaCard key={m?.id}>
                <Image
                  src={m?.coverImage?.large || ''}
                  alt={m?.title?.userPreferred || ''}
                  width={172}
                  height={259}
                />
              </MediaCard>
              <MediaTitle>{m?.title?.userPreferred}</MediaTitle>
            </MediaWrapper>
          ))}
        </HorizontalMediaList>
      </MediaListSection>
      <MediaListSection>
        <ListTitle>Next Season</ListTitle>
        <HorizontalMediaList>
          {data.nextSeason?.media?.map(m => (
            <MediaWrapper key={m?.id}>
              <MediaCard key={m?.id}>
                <Image
                  src={m?.coverImage?.large || ''}
                  alt={m?.title?.userPreferred || ''}
                  width={172}
                  height={259}
                />
              </MediaCard>
              <MediaTitle>{m?.title?.userPreferred}</MediaTitle>
            </MediaWrapper>
          ))}
        </HorizontalMediaList>
      </MediaListSection>
      <MediaListSection>
        <ListTitle>Most Popular</ListTitle>
        <HorizontalMediaList>
          {data.popular?.media?.map(m => (
            <MediaWrapper key={m?.id}>
              <MediaCard key={m?.id}>
                <Image
                  src={m?.coverImage?.large || ''}
                  alt={m?.title?.userPreferred || ''}
                  width={172}
                  height={259}
                />
              </MediaCard>
              <MediaTitle>{m?.title?.userPreferred}</MediaTitle>
            </MediaWrapper>
          ))}
        </HorizontalMediaList>
      </MediaListSection>
      <MediaListSection>
        <ListTitle>Top Anime</ListTitle>
        <HorizontalMediaList>
          {data.top?.media?.map(m => (
            <MediaWrapper key={m?.id}>
              <MediaCard key={m?.id}>
                <Image
                  src={m?.coverImage?.large || ''}
                  alt={m?.title?.userPreferred || ''}
                  width={172}
                  height={259}
                />
              </MediaCard>
              <MediaTitle>{m?.title?.userPreferred}</MediaTitle>
            </MediaWrapper>
          ))}
        </HorizontalMediaList>
      </MediaListSection>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_HOME_PAGE_DETAILS,
    variables: {
      type: 'ANIME',
      season: 'SUMMER',
      seasonYear: 2021,
      nextSeason: 'FALL',
      nextYear: 2021,
    },
  })

  return {
    props: {
      data,
    },
  }
}

export default Home
