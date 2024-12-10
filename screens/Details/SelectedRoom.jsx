import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native'
import React,{useState}  from 'react'
import { useRoute} from '@react-navigation/native'
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';
import {AntDesign} from '@expo/vector-icons'
import { AssetImage, HeightSpacer, NetworkImage, Rating, ReusableBtn, ReusableText, WidthSpacer } from '../../components';
import checkUser from '../../hook/checkUser';
import ip from '../../hook/ip_address'
const SelectedRoom = ({navigation}) => {

  const {userLogin,userData ,isLoading, time, token}  = checkUser()
  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue}/>
  }
    const router = useRoute();
    const {item, id} = router.params
    // console.log(item)
    // console.log(id);
    
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
    }

    const handleBooking = async () => {
      if (count === 0) {
        Alert.alert('Error', 'Please select the number of days for your stay.');
        return;
      }
      let daystay = count
      const bookingData = {
        user_id: userData._id, 
        hotel_id: id,
        room_id: item._id, 
        daystay: daystay,
      };
      
  
      try {
        const response = await fetch('http://'+ip+':5003/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(bookingData),
        });
  
        const result = await response.json();
        console.log(result);
        
  
        if (response.ok) {
          navigation.navigate('Successful',{item, count })
          
        } else {
          Alert.alert('Error', result.error || 'Failed to create booking.');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'An unexpected error occurred.');
      }
    };
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          title={item.title}
          color={COLORS.lightGreen}
          onPress={() => navigation.goBack()}
          top={40}
          left={10}
          right={10}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 20 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            raidus={20}
          />

          <HeightSpacer height={20} />

          <View style={{ marginHorizontal: 10 }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={item.title}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWithSpace("flex-start")}>
                <Rating rating={item.rating} />

                <WidthSpacer width={10} />

                <ReusableText
                  text={`(${item.review})`}
                  family={"regular"}
                  size={SIZES.small}
                  color={COLORS.gray}
                />
              </View>
            </View>

            <HeightSpacer height={10} />

            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.lightGrey,
                marginVertical: 15,
              }}
            ></View>

            <ReusableText
              text={"Room Requirements"}
              family={"regular"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <HeightSpacer height={30} />
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Price per night"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <ReusableText
                text={`$${item.price}`}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Payment Methods"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWithSpace("flex-start")}>
                <AssetImage
                  data={require("../../assets/images/Visa.png")}
                  mode={"contain"}
                  width={30}
                  height={20}
                />
                <ReusableText
                  text={"Visa"}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>
            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Days stay"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <View style={reusable.rowWithSpace("flex-start")}>
                <AntDesign
                  name="minussquareo"
                  size={26}
                  color={COLORS.gray}
                  onPress={() => {
                    decrement();
                  }}
                />
                <ReusableText
                  text={`  ${count}  `}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
                <AntDesign
                  name="plussquareo"
                  size={26}
                  color={COLORS.gray}
                  onPress={() => {
                    increment();
                  }}
                />
              </View>
            </View>

            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.lightGrey,
                marginVertical: 15,
              }}
            ></View>

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Total"}
                family={"bold"}
                size={SIZES.xLarge}
                color={COLORS.black}
              />
              <View style={reusable.rowWithSpace("flex-start")}>
                <ReusableText
                  text={`  $${count * item.price}  `}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>
            <HeightSpacer height={30} />

            <ReusableBtn
              onPress={handleBooking}
              btnText={"Book Now"}
              width={SIZES.width - 60}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default SelectedRoom

const styles = StyleSheet.create({})