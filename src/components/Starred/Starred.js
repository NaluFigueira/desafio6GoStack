import React from 'react';
import PropTypes from 'prop-types';

import {
  Stars,
  Starred,
  Info,
  OwnerAvatar,
  Author,
  Title,
  Warning,
} from './styles';

export default function StarredComponent(props) {
  const {stars} = props;
  return (
    <>
      {stars.length > 0 ? (
        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({item}) => (
            <Starred>
              <OwnerAvatar source={{uri: item.owner.avatar_url}} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      ) : (
        <Warning>This user has no starred repositories!</Warning>
      )}
    </>
  );
}

StarredComponent.propTypes = {
  stars: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.object)).isRequired,
};
