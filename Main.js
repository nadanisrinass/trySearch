import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SearchBase, SearchBox } from '@appbaseio/react-native-searchbox';

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <SearchBase
          // Elasticsearch index
          index="good-books-ds"
          // Appbase credentials
          credentials="a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61"
          // Appbase URL
          url="https://arc-cluster-appbase-demo-6pjy6z.searchbase.io"
          // Configure the appbase analytics
          appbaseConfig={{
            recordAnalytics: true,
            enableQueryRules: true,
            userId: 'jon3@appbase.io',
            customEvents: {
              platform: 'ios',
              device: 'iphoneX',
            },
          }}>
          <SearchBox
            // A unique identifier for each component
            id="search-component"
            // Data fields to search on
            dataField={[
              {
                field: 'original_title',
                weight: 1,
              },
              {
                field: 'original_title.search',
                weight: 3,
              },
            ]}
          />
        </SearchBase>
      </View>
    );
  }
}

export default Main;
