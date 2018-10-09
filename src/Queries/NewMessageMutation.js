import gql from 'graphql-tag';

export default gql`

mutation AddMessageMutation($id: ID!, $username: String!, $text: String!) {
    addMessage(
        id: $id
        username: $username
        text: $text
    ) {
        __typename
        id
        username
        text
    }
}`;