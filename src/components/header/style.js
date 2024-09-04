import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewHeader: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'black',
  },
  textHeader: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    alignItems:'left'
  },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#000000',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
    marginHorizontal: 5
  },
  navText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight:'bold'
  },
});

export default styles;