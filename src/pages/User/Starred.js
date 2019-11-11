import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Stars,
  Starred,
  Info,
  OwnerAvatar,
  Author,
  Title,
  Warning,
} from './styles';

export default class StarredComponent extends Component {
  constructor(props) {
    super(props);

    const {stars} = this.props;

    this.state = {
      stars,
      pageNumber: 1,
      loading: false,
      refreshing: false
    };
  }

  async loadPages(pageNumber){
    const {login} = this.props;
    const response = await api.get(`/users/${login}/starred`, {
      params: {
        page: pageNumber,
      },
    });

    return response;
  }

  loadMore = async () => {
    this.setState({loading: true});

    const {pageNumber, stars} = this.state;

    const response =await this.loadPages(pageNumber + 1);

    this.setState({
      loading: false,
      stars: [...stars].concat(response.data),
      pageNumber: pageNumber + 1,
    });
  };

  refreshList = async () => {
    this.setState({refreshing: true});

    const response = await this.loadPages(1);

    this.setState({
      refreshing: false,
      stars: response.data,
      pageNumber: 1,
    });
  }


  render() {
    const {stars, loading, refreshing} = this.state;
    return (
      <>
        {stars.length > 0 ? (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            onRefresh={this.refreshList}
            refreshing={refreshing}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
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
        {loading ? <ActivityIndicator size="small" color="#7159c1" /> : <></>}
      </>
    );
  }
}

StarredComponent.propTypes = {
  stars: PropTypes.arrayOf(PropTypes.object).isRequired,
  login: PropTypes.string.isRequired,
};
