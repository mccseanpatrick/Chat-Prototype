import gql from 'graphql-tag';

export default gql`
query AllMessages {
    allMessage {
        messages {
            __typename
            id
            username
            text      
        }
    }
}`;