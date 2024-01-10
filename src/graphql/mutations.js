/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVoting = /* GraphQL */ `
  mutation CreateVoting(
    $input: CreateVotingInput!
    $condition: ModelVotingConditionInput
  ) {
    createVoting(input: $input, condition: $condition) {
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
export const updateVoting = /* GraphQL */ `
  mutation UpdateVoting(
    $input: UpdateVotingInput!
    $condition: ModelVotingConditionInput
  ) {
    updateVoting(input: $input, condition: $condition) {
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
export const deleteVoting = /* GraphQL */ `
  mutation DeleteVoting(
    $input: DeleteVotingInput!
    $condition: ModelVotingConditionInput
  ) {
    deleteVoting(input: $input, condition: $condition) {
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
