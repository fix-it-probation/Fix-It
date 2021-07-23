import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Home from '../Screens/Home';

const Router = createStackNavigator(
  {
    // Login: {
    //   screen: Login,
    // },
    Register: {
      screen: Register,
    },
    Home: {
      screen: Home,
    }
  },
  {
    headerMode: 'none',
  },
);
export default createAppContainer(Router);
