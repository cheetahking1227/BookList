import { StyleSheet } from "react-native";
import { wp, hp } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0f17',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  logoImage: {
    width: wp('50%'),
    height: wp('50%'),
  },
  socialContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
    paddingHorizontal: wp('10%'),
    gap: 30,
  },
  socialButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 8,
    height: hp('5%'),
    width: wp('35%'),
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  separator: {
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#ddd',
  },
  textInputGroup: {
    paddingHorizontal: wp('5%'),
    gap: 20,
  },
  input: {
    backgroundColor:'#0c0f17',
  },
  forgotPasswordContainer: {
    paddingHorizontal: wp('5%'),
    marginTop: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: '#fc1855',
    fontSize: 14,
  },
  loginButtonContainer: {
    paddingHorizontal: wp('5%'),
    marginTop: 40,
  },
  loginButton: {
    backgroundColor: '#1d202b',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
    marginTop: 40,
  },
  registerText: {
    color: '#ddd',
  },
  registerLink: {
    color: '#fc1855',
    fontWeight: 'bold',
  },
});