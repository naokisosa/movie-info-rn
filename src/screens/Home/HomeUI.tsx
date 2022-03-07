import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ListRenderItem,
  FlatList,
  Pressable,
} from 'react-native';
import {Movie} from '../../utils/types/movie.type';
import SearchItem from './components/SearchItem';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  title?: string;
  year?: string;
  onChangeTitle: (value: string) => void;
  onChangeYear: (value: string) => void;
  results?: Movie[];
  error?: string;
  onPressItem: (movieTitle: string) => void;
};

const HomeUI: React.FC<Props> = ({
  title,
  year,
  onChangeTitle,
  onChangeYear,
  results,
  error,
  onPressItem,
}) => {
  const renderItem: ListRenderItem<Movie> = useCallback(
    ({item}) => (
      <Pressable
        onPress={() => onPressItem(item.Title)}
        style={styles.searchItemsContainer}>
        <SearchItem movieTitle={item.Title} />
      </Pressable>
    ),
    [onPressItem],
  );

  const keyExtractor = useCallback((item: Movie) => item.imdbID, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        editable={!!title}
        selectTextOnFocus={!!title}
        keyboardType="decimal-pad"
        onChangeText={onChangeYear}
        value={year}
        placeholder="Year"
      />

      {error ? (
        <Text>{error}</Text>
      ) : (
        results && (
          <View style={styles.container}>
            <FlatList
              data={results}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              maxToRenderPerBatch={5}
            />
          </View>
        )
      )}
    </SafeAreaView>
  );
};

export default React.memo(HomeUI);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  searchItemsContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    borderWidth: 1,
  },
});
