import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import styles from './singin.style'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { COLORS, SIZES } from '../../constants/theme'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {WidthSpacer,HeightSpacer, ReusableBtn} from '../../components/index'
import ip from '../../hook/ip_address'
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";


const validationSchema = Yup.object().shape({
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters. Example: Anhhao@0603')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character'
  )
  .required('Required'),
  email: Yup.string()
  .email('Provided a valid email address')
  .required('Required')

})

const Singin = ({navigation}) => {
  const [loader, setLoader] = useState(false)
  const [obsecureText, setObsecureText] = useState(false);
  const errorLogin = () => {
    Alert.alert('Login failed', 'PLease fill in all required fields', [
      {
        text: 'Cancel',
        onPress: ()=> {}      
      },
      {defaultIndex: 1}
    ])
  }

  const login = async (values) => {
    setLoader(true);

    try {
      const endpoint = 'http://'+ip+':5003/api/login';
      const data = values;

      const response = await axios.post(endpoint, data);
      if (response.status === 200) {
        setLoader(false);
        await AsyncStorage.setItem("id", JSON.stringify(response.data.id));
        await AsyncStorage.setItem("token", JSON.stringify(response.data.token));
        const userId = response.data.id;
        navigation.replace("Bottom", { id: userId }); // Truyền ID qua navigation
      } else {
        Alert.alert("Error Logging in ", "Incorrect Email/Password", [
          {
            text: "Cancel",
            onPress: () => {},
          },
          {
            text: "Continue",
            onPress: () => {},
          },
          { defaultIndex: 1 },
        ]);
      }
    } catch (error) {
      console.log(error);
      
      Alert.alert(
        "Error ",
        "Oops, Something went wrong",
        [
          {
            text: "Cancel",
            onPress: () => {},
          },
          { defaultIndex: 1 },
        ]
      );
    } finally {
      setLoader(false);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          login(values)    
        }}
      >
        {({
          handleChange,
          touched,
          values,
          errors,
          isValid,
          handleSubmit,
          setFieldTouched,
        }) => (
          <View>
            <View style={styles.wrapper}>
              <Text style={styles.label}>Email</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLORS.blue : COLORS.lightGrey
                  )}
                >
                  <MaterialCommunityIcons 
                  name='email-outline'
                  size={20}
                  color={COLORS.gray}
                  />

                  <WidthSpacer width={10}/>

                  <TextInput
                  placeholder='Enter your email address'
                  onFocus={() => setFieldTouched('email')}
                  onBlur={() => setFieldTouched('email','')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={{flex: 1}}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style= {styles.errorMessage}>{errors.email}</Text>
                )}
              </View>
            </View>


            <View style={styles.wrapper}>
              <Text style={styles.label}>Password</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.password ? COLORS.blue : COLORS.lightGrey
                  )}
                >
                  <MaterialCommunityIcons 
                  name='lock-outline'
                  size={20}
                  color={COLORS.gray}
                  />

                  <WidthSpacer width={10}/>

                  <TextInput
                  secureTextEntry={obsecureText}
                  placeholder='Enter your password'
                  onFocus={() => setFieldTouched('password')}
                  onBlur={() => setFieldTouched('password','')}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={{flex: 1}}
                  />

                  <TouchableOpacity onPress={()=>{
                    setObsecureText(!obsecureText)
                  }}>
                    <MaterialCommunityIcons
                    name={obsecureText ? 'eye-outline' : 'eye-off-outline'}
                    size={18}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style= {styles.errorMessage}>{errors.password}</Text>
                )}
              </View>
            </View>

            <HeightSpacer height={20}/>

            <ReusableBtn
            onPress={isValid ? handleSubmit : errorLogin}
            btnText={"SIGN IN"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Singin
