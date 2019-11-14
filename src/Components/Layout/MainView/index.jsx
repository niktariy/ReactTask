import React from 'react';
import Icon from 'react-eva-icons';
import {PLACES, CITY, COUNTRY} from 'const';
import styles from './MainView';

import Button from 'Components/UI/Button';
import List from 'Components/UI/List';

import WeatherList from 'Components/Weather/WeatherList';
import WeatherCard from 'Components/Weather/WeatherCard';

class MainView extends React.Component {
  constructor() {
    super(),
    this.state = {
      items: undefined,
      displayCard: true,
    }
  }

  showWeatherCard = () => {
    this.setState( {displayCard: true} );
  }

  getWeatherItems = () => {
   this.setState({
      items: PLACES.map(({id, city, country}) => ({ id, location: `${city}, ${country}`})),
      displayCard: false,
    });
  }

  render() {
    return (
      <main className={styles.mainView}>
        { this.state.items && !this.state.displayCard
          ? <WeatherList items={this.state.items} />
          : <WeatherCard location={`${CITY}, ${COUNTRY}`} />
        }
        { this.state.displayCard
          ? (
            <Button
              onClick={this.getWeatherItems}
              label={'More'}
              iconRight={
                <Icon
                  name='arrow-forward'
                  size='large'
                  fill='#FFF'
                  animation={{
                    type: 'shake',
                    hover: true,
                    infinite: false
                  }}
                />
              }
            />
          )
          : (
            <Button
              onClick={this.showWeatherCard}
              label={'Back'}
              iconLeft={
                <Icon
                  name='arrow-back'
                  size='large'
                  fill='#FFF'
                  animation={{
                    type: 'shake',
                    hover: true,
                    infinite: false
                  }}
                />
              }
            />
          )
        }
      </main>
    );
  }
};

export default MainView;
