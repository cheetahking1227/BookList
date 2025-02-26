import { StyleSheet } from "react-native";
import { wp, hp } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0f17',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: 50,
    textAlign: 'center',
  },
  textInputGroup: {
    paddingHorizontal: wp('5%'),
    gap: 20,
  },
  registerButtonContainer: {
    paddingHorizontal: wp('5%'),
    marginTop: 40,
  },
  registerButton: {
    backgroundColor: '#1d202b',
    borderRadius: 3,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsContainer: {
    alignItems: 'center'
  },
  terms: {
    color: '#ddd',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 12,
  },
  link: {
    color: '#fc1855',
    fontWeight: 'bold',
  },
});