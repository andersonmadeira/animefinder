import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { gql } from '@apollo/client'
import client from '../apollo-client'

import styles from '../styles/Home.module.css'

const Home: NextPage<{ data: MediaFragment }> = ({ data }) => {
  console.log('data', data)
  console.log('data.popular', data.popular)
  return <div>Home page</div>
}

export const mediaFragment = gql`
  fragment media on Media {
    id
    title {
      userPreferred
    }
    coverImage {
      extraLarge
      large
      color
    }
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    bannerImage
    season
    description
    type
    format
    status(version: 2)
    episodes
    duration
    chapters
    volumes
    genres
    isAdult
    averageScore
    popularity
    mediaListEntry {
      id
      status
    }
    nextAiringEpisode {
      airingAt
      timeUntilAiring
      episode
    }
    studios(isMain: true) {
      edges {
        isMain
        node {
          id
          name
        }
      }
    }
  }
`

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query ($season: MediaSeason, $seasonYear: Int, $nextSeason: MediaSeason, $nextYear: Int) {
        trending: Page(page: 1, perPage: 6) {
          media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
            ...media
          }
        }
        season: Page(page: 1, perPage: 6) {
          media(
            season: $season
            seasonYear: $seasonYear
            sort: POPULARITY_DESC
            type: ANIME
            isAdult: false
          ) {
            ...media
          }
        }
        nextSeason: Page(page: 1, perPage: 6) {
          media(
            season: $nextSeason
            seasonYear: $nextYear
            sort: POPULARITY_DESC
            type: ANIME
            isAdult: false
          ) {
            ...media
          }
        }
        popular: Page(page: 1, perPage: 6) {
          media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
            ...media
          }
        }
        top: Page(page: 1, perPage: 10) {
          media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
            ...media
          }
        }
      }
    `,
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
