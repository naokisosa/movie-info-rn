import React from 'react';
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
  const renderItem: ListRenderItem<Movie> = ({item}) => (
    <Pressable>
      <Text onPress={() => onPressItem(item.Title)}>{item.Title}</Text>
    </Pressable>
  );
  return (
    <View>
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
          <FlatList
            data={results}
            renderItem={renderItem}
            keyExtractor={item => item.imdbID}
          />
        )
      )}
    </View>
  );
};

export default React.memo(HomeUI);

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
