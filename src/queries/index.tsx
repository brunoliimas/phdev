import { gql } from '@apollo/client';

export const GET_PROFILE_QUERY = gql`
    query {
        profiles {
            photo {
                url
            }
            name
            city
            position
        }
    }
`;
export const GET_INTRO_QUERY = gql`
    query {
        introductions {
            title
            span
            position
            description
            years_experience
            finished_projects
        }
    }
`;
export const GET_ABOUT_QUERY = gql`
query {
    abouts {
        title
        span
        description
    }
}
`;