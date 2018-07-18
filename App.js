/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {Image} from 'react-native'
import {
  Container,
  Header,
  Form,
  Label,
  Item,
  Input,
  Content,
  Button,
  Text
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Grid>
          <Row style={{ backgroundColor: "#ffffff", justifyContent: "center" }}>
            <Content
              contentContainerStyle={{ justifyContent: "center", flex: 1, marginLeft: 10, marginRight:10 }}
            >
              <Image source={{uri: 'https://lanhlala.files.wordpress.com/2017/09/452framgia-logo-170-151.png?w=237&h=237&crop=1'}} style={{width:100, height:100}}/>
            
              <Form>
                <Item floatingLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>

                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input secureTextEntry={true}/>
                </Item>
              </Form>

              <Button block style={{marginTop: 20}}>
                <Text>Login</Text>
              </Button>
              <Button block light style={{marginTop: 10}}>
                <Text>Register</Text>
              </Button>
            </Content>
          </Row>
        </Grid>
      </Container>
    );
  }
}
