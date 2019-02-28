import React, { Component } from 'react';
import { Dimensions, Text, View, StatusBar, Platform, ScrollView } from 'react-native';
import { Asset, AppLoading, SplashScreen } from 'expo';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';
import { VictoryCandlestick, VictoryChart, VictoryAxis } from "victory-native";

const StatusBarAndroid = styled.View`
  height: 24;
  background-color: #fff;
`;

const Root = styled.View`
  flex: 1;
  background-color: transparent;
`;

const Container = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  background-color: transparent;
  padding-left: 20px;
  padding-right: 20px;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: #333;
`;

const ItemTitleText = styled.Text`
  fontSize: 25;
  color: #333;
`;

const ChartContainer = styled.View`
  width: 100%;
  height: 200;
  margin-top: 10;
  margin-bottom: 10;
  background-color: transparent;
  border-top-width: 1;
  border-bottom-width: 1;
  border-color: #333;
  alignItems: center;
  padding-bottom: 20;
`;

const MarketInfoContainer = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
}))`
  flex: 1;
`;

const ItemContainer = styled.View`
  margin-top: 10;
  padding: 10px;
  border-width: 1;
  background-color: #CDCACA;
  border-radius: 2;
`;

const ItemDescText = styled.Text`
  fontSize: 20;
  color: #333;
  text-align: left
`;

const BottomContainer = styled.View`
  flexDirection: row;
  height: 100px;
  alignItems: flex-end;
  background-color: transparent;
`;

const SellContainer = styled.View`
  width: 50%;
  justifyContent: center;
  alignItems: center;
  background-color: transparent;
  border-width: 1;
  background-color: #CDCACA;
  border-radius: 2;
  padding: 10px;
`;

const BuyContainer = styled.View`
  width: 50%;
  justifyContent: center;
  alignItems: center;
  background-color: transparent;
  border-width: 1;
  background-color: #CDCACA;
  border-radius: 2;
  padding: 10px;
`;

class App extends Component {
  render() {
    return (
      <Root>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
        { Platform.OS === 'android' && Platform.Version >= 20 ? <StatusBarAndroid /> : null }
        <Container>
          <TitleText>BTCUSD</TitleText>
          <ItemTitleText>Bitcoin/US Dollar</ItemTitleText>
          <ChartContainer>
            <VictoryChart
              scale={{ x: "time" }}
              domainPadding={{ x: 50 }}
            >
              <VictoryCandlestick
                candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
                data={[
                  {x: 0, open: 15, close: 20, high: 23, low: 12},
                  {x: 15, open: 18, close: 23, high: 26, low: 15},
                  {x: 30, open: 20, close: 25, high: 28, low: 17},
                  {x: 45, open: 23, close: 18, high: 26, low: 15},
                  {x: 60, open: 20, close: 15, high: 23, low: 12},
                  {x: 75, open: 18, close: 13, high: 21, low: 10},
                  {x: 90, open: 17, close: 23, high: 26, low: 14},
                  {x: 105, open: 20, close: 25, high: 28, low: 17},
                  {x: 120, open: 23, close: 18, high: 26, low: 15}
                ]}
              />
              <VictoryAxis dependentAxis offsetX={60} orientation="right" domain={[20, 0]} />
            </VictoryChart>
          </ChartContainer>
          <MarketInfoContainer>
            <TitleText>Market info</TitleText>
            <ItemContainer>
              <ItemTitleText>USD jumps up</ItemTitleText>
              <ItemDescText>Proin maximun s portits mi quis elements. Sednec leo ut sdf sdfsd sdfsdf...</ItemDescText>
            </ItemContainer>
            <ItemContainer>
              <ItemTitleText>USD jumps up</ItemTitleText>
              <ItemDescText>Proin maximun s portits mi quis elements. Sednec leo ut sdf sdfsd sdfsdf...</ItemDescText>
            </ItemContainer>
            <ItemContainer>
              <ItemTitleText>USD jumps up</ItemTitleText>
              <ItemDescText>Proin maximun s portits mi quis elements. Sednec leo ut sdf sdfsd sdfsdf...</ItemDescText>
            </ItemContainer>
          </MarketInfoContainer>
        </Container>
        <BottomContainer>
          <SellContainer>
            <ItemTitleText>SELL</ItemTitleText>
            <ItemTitleText>O.1235634</ItemTitleText>
          </SellContainer>
          <BuyContainer>
            <ItemTitleText>BUY</ItemTitleText>
            <ItemTitleText>O.1235634</ItemTitleText>
          </BuyContainer>
        </BottomContainer>
      </Root>
    );
  }
}

export default App;
