import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ActivityIndicator} from 'react-native';

import {Container, Header, Avatar, Name, Bio, LoadingArea} from './styles';

import Starred from '../../components/Starred/Starred';

import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    loading: false,
  };

  async componentDidMount() {
    const {navigation} = this.props;
    const user = navigation.getParam('user');

    this.setState({loading: true});

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({stars: response.data, loading: false});
  }

  render() {
    const {navigation} = this.props;
    const {stars, loading} = this.state;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {loading ? (
          <LoadingArea>
            <ActivityIndicator size={60} color="#7159c1" />
          </LoadingArea>
        ) : (
          <Starred stars={stars} />
        )}
      </Container>
    );
  }
}
