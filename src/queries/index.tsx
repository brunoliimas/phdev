import { gql } from '@apollo/client';

export const GET_PROFILE_QUERY = gql`
    query {
        user (where: { id: "cllzz6qm90fhs01ug6wws492y" }){
            name
            picture
        }
    }
`;

export const GET_ABOUT_QUERY = gql`
query {
    abouts {
        title
        description
    }
}
`;