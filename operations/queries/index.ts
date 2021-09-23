import { gql } from '@apollo/client'

import { CORE_MEDIA_FIELDS } from '../fragments'

export const GET_HOME_PAGE_DETAILS = gql`
  ${CORE_MEDIA_FIELDS}
  query HomePageDetails(
    $season: MediaSeason
    $seasonYear: Int
    $nextSeason: MediaSeason
    $nextYear: Int
  ) {
    trending: Page(page: 1, perPage: 5) {
      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
        ...MediaFragment
      }
    }
    season: Page(page: 1, perPage: 5) {
      media(
        season: $season
        seasonYear: $seasonYear
        sort: POPULARITY_DESC
        type: ANIME
        isAdult: false
      ) {
        ...MediaFragment
      }
    }
    nextSeason: Page(page: 1, perPage: 5) {
      media(
        season: $nextSeason
        seasonYear: $nextYear
        sort: POPULARITY_DESC
        type: ANIME
        isAdult: false
      ) {
        ...MediaFragment
      }
    }
    popular: Page(page: 1, perPage: 5) {
      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
        ...MediaFragment
      }
    }
    top: Page(page: 1, perPage: 5) {
      media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
        ...MediaFragment
      }
    }
  }
`
