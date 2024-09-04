import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  navbar: {
    height: 60,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, 
  },
  navbarTitle: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold'
  },
  imageBanner: {
    width: '100%',
    height: 400,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textBanner: {
    fontSize: 30,
    color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:20
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(25,26,48,0.8)',
    borderRadius: 27,
    marginTop: -380,
    alignItems: 'center',
    justifyContent: "center",
    marginLeft: 20,
  },
  ratingContainer: {
    marginTop: 350,
    alignItems: 'center',
  },
  ratingTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
});

export default styles;