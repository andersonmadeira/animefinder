import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { gql } from '@apollo/client'

import styled from 'styled-components'

import client from '../apollo-client'

import { GET_HOME_PAGE_DETAILS } from '../operations/queries'
import { HomePageDetails } from '../operations/queries/__generated__/HomePageDetails'
import { Layout } from '../components'

export interface PageProps {
  data: HomePageDetails
}

const Title = styled.h1<{ color?: string }>`
  color: ${({ color }) => color || 'blue'};
`

const Home: NextPage<PageProps> = ({ data }) => {
  console.log('data', data)
  return (
    <Layout>
      <Title color="red">Red title</Title>
      <Title>Blue title</Title>
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
