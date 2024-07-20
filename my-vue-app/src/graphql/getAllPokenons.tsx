import { gql } from '@apollo/client';

export const GET_ALL_POKEMON = gql`
  query pokemon_v2_pokemon {
    pokemon_v2_pokemon {
        id
        pokemon_species_id
        name
        base_experience
        is_default
        order
        height
        pokemon_v2_pokemonstats {
            base_stat 
        }
     }
  }
`;

