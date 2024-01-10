/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVoting = /* GraphQL */ `
  query GetVoting($id: ID!) {
    getVoting(id: $id) {
      id
      caTruong
      caPho
      doanTruong
      activityCoordinator1
      activityCoordinator2
      thuKy
      thuQuy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listVotings = /* GraphQL */ `
  query ListVotings(
    $filter: ModelVotingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        caTruong
        caPho
        doanTruong
        activityCoordinator1
        activityCoordinator2
        thuKy
        thuQuy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
