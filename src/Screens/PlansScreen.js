import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView,} from 'react-native';
import { Card,  Title, Paragraph} from "react-native-paper";

export const PointofSale = ({navigation}) => {

  const pointOfSale = [
      {   
          id: 1,
          planName: 'Point of Sale',
          price: '184.48',
          item1: 'Unlimted Users',
          item2: 'Unlimted Customers',
          item3: 'Unlimted Venders',
          item4: 'Unlimted Clients',
          item5: 'Disable CRM',
          item6: 'Disable HRM',
          item7: 'Disable Account',
          item8: 'Disable Project',
          item9: 'Disable POS',
      }
  ]

  //const [isModalVisible, setIsModalVisible] = React.useState(false);

  //const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return pointOfSale.map(
  (plan) => <Card key={plan.id} style={styles.container}> 
  <Card.Content style={styles.content}>
      <Title style={styles.title}>{plan.planName}</Title>
      <Paragraph style={styles.price}>ZMW {plan.price}</Paragraph>
      <Paragraph style={styles.time}>per month</Paragraph>
      <Card.Actions style={styles.horizontalLine}></Card.Actions>
  </Card.Content>
  <Card.Content>
      <Title style={styles.contentHeader}>Point of sale Includes:</Title>
      <Paragraph style={styles.contentMaintainer}>{plan.item1}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item2}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item3}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item4}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item5}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item7}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item8}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item9}</Paragraph>
      <Card.Actions style={styles.bannerPlayer}>
          <Text style={styles.banner}>Free 14 Days Trial</Text>
      </Card.Actions>
  </Card.Content>
  <Card.Content style={styles.content}>
      <Card.Actions style={styles.horizontalLine}></Card.Actions>
      <Card.Actions>
          <Text style={styles.text}>See all features</Text>
      </Card.Actions>
      <Card.Actions  style={styles.touchplayer}>
          <Text onPress={() => navigation.navigate('Plans')} style={styles.getstarted}>Get Started</Text>
      </Card.Actions>
  </Card.Content>
  </Card>
  )

}

export const Accounting = ({navigation}) => {

  const Accounting = [
      {
          planName: 'Accounting',
          price: '184.48',
          item1: 'Unlimted Users',
          item2: 'Unlimted Customers',
          item3: 'Unlimted Venders',
          item4: 'Unlimted Clients',
          item5: 'Disable CRM',
          item6: 'Disable HRM',
          item7: 'Disable Account',
          item8: 'Disable Project',
          item9: 'Disable POS',
      }
  ]
  
return Accounting.map(
  (plan) => <Card key={plan.id} style={styles.container}>
  <Card.Content style={styles.content}>
      <Title style={styles.title}>{plan.planName}</Title>
      <Paragraph style={styles.price}>ZMW {plan.price}</Paragraph>
      <Paragraph style={styles.time}>per month</Paragraph>
      <Card.Actions style={styles.horizontalLine}></Card.Actions>
  </Card.Content>
  <Card.Content>
      <Title style={styles.contentHeader}>Point of sale Includes:</Title>
      <Paragraph style={styles.contentMaintainer}>{plan.item1}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item2}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item3}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item4}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item5}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item7}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item8}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item9}</Paragraph>
      <Card.Actions style={styles.bannerPlayer}>
          <Text style={styles.banner}>Free 14 Days Trial</Text>
      </Card.Actions>
  </Card.Content>
  <Card.Content style={styles.content}>
      <Card.Actions style={styles.horizontalLine}></Card.Actions>
      <Card.Actions>
          <Text style={styles.text}>See all features</Text>
      </Card.Actions>
      <Card.Actions  style={styles.touchplayer}>
          <Text onPress={() => navigation.navigate('Register')} style={styles.getstarted}>Get Started</Text>
      </Card.Actions>
  </Card.Content>
  </Card>
  )
}

export function HumanResource() {

const HumanResource = [
  {
      planName: 'Human Resources',
      price: '189.8',
      item1: 'Unlimted Users',
      item2: 'Unlimted Customers',
      item3: 'Unlimted Venders',
      item4: 'Unlimted Clients',
      item5: 'Disable CRM',
      item6: 'Disable HRM',
      item7: 'Disable Account',
      item8: 'Disable Project',
      item9: 'Disable POS',
  }
]

return HumanResource.map(
(plan) => <Card key={plan.id} style={styles.container}>
<Card.Content style={styles.content}>
  <Title style={styles.title}>{plan.planName}</Title>
  <Paragraph style={styles.price}>ZMW {plan.price}</Paragraph>
  <Paragraph style={styles.time}>per month</Paragraph>
  <Card.Actions style={styles.horizontalLine}></Card.Actions>
</Card.Content>
<Card.Content>
  <Title style={styles.contentHeader}>Point of sale Includes:</Title>
  <Paragraph style={styles.contentMaintainer}>{plan.item1}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item2}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item3}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item4}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item5}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item7}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item8}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item9}</Paragraph>
  <Card.Actions style={styles.bannerPlayer}>
      <Text style={styles.banner}>Free 14 Days Trial</Text>
  </Card.Actions>
</Card.Content>
<Card.Content style={styles.content}>
  <Card.Actions style={styles.horizontalLine}></Card.Actions>
  <Card.Actions>
      <Text style={styles.text}>See all features</Text>
  </Card.Actions>
  <Card.Actions  style={styles.touchplayer}>
      <Text style={styles.getstarted}>Get Started</Text>
  </Card.Actions>
</Card.Content>
</Card>
)
}

export function CustomerRelationshipManagement() {

const CustomerRelationshipManagement = [
  {
      planName: 'Customer Relationship Management',
      price: '189.8',
      item1: 'Unlimted Users',
      item2: 'Unlimted Customers',
      item3: 'Unlimted Venders',
      item4: 'Unlimted Clients',
      item5: 'Disable CRM',
      item6: 'Disable HRM',
      item7: 'Disable Account',
      item8: 'Disable Project',
      item9: 'Disable POS',
  }
]

return CustomerRelationshipManagement.map(
  (plan) => <Card key={plan.id} style={styles.container}>
  <Card.Content style={styles.content}>
      <Title style={styles.title}>{plan.planName}</Title>
      <Paragraph style={styles.price}>ZMW {plan.price}</Paragraph>
      <Paragraph style={styles.time}>per month</Paragraph>
      <Card.Actions style={styles.horizontalLine}></Card.Actions>
  </Card.Content>
  <Card.Content>
      <Title style={styles.contentHeader}>Point of sale Includes:</Title>
      <Paragraph style={styles.contentMaintainer}>{plan.item1}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item2}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item3}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item4}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item5}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item7}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item8}</Paragraph>
      <Paragraph style={styles.contentMaintainer}>{plan.item9}</Paragraph>
      <Card.Actions style={styles.bannerPlayer}>
          <Text style={styles.banner}>Free 14 Days Trial</Text>
      </Card.Actions>
  </Card.Content>
  <Card.Content style={styles.content}>
      <Card.Actions style={styles.horizontalLine}></Card.Actions>
      <Card.Actions>
          <Text style={styles.text}>See all features</Text>
      </Card.Actions>
      <Card.Actions  style={styles.touchplayer}>
          <Text style={styles.getstarted}>Get Started</Text>
      </Card.Actions>
  </Card.Content>
  </Card>
  )
}

export function ProjectManagent() {

const ProjectManagent = [
  {
      planName: 'Project Managent',
      price: '189.8',
      item1: 'Unlimted Users',
      item2: 'Unlimted Customers',
      item3: 'Unlimted Venders',
      item4: 'Unlimted Clients',
      item5: 'Disable CRM',
      item6: 'Disable HRM',
      item7: 'Disable Account',
      item8: 'Disable Project',
      item9: 'Disable POS',
  }
]

return ProjectManagent.map(
(plan) => <Card key={plan.id} style={styles.container}>
<Card.Content style={styles.content}>
  <Title style={styles.title}>{plan.planName}</Title>
  <Paragraph style={styles.price}>ZMW {plan.price}</Paragraph>
  <Paragraph style={styles.time}>per month</Paragraph>
  <Card.Actions style={styles.horizontalLine}></Card.Actions>
</Card.Content>
<Card.Content>
  <Title style={styles.contentHeader}>Point of sale Includes:</Title>
  <Paragraph style={styles.contentMaintainer}>{plan.item1}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item2}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item3}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item4}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item5}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item7}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item8}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item9}</Paragraph>
  <Card.Actions style={styles.bannerPlayer}>
      <Text style={styles.banner}>Free 14 Days Trial</Text>
  </Card.Actions>
</Card.Content>
<Card.Content style={styles.content}>
  <Card.Actions style={styles.horizontalLine}></Card.Actions>
  <Card.Actions>
      <Text style={styles.text}>See all features</Text>
  </Card.Actions>
  <Card.Actions  style={styles.touchplayer}>
      <Text style={styles.getstarted}>Get Started</Text>
  </Card.Actions>
</Card.Content>
</Card>
)
}

export function FullNikkleSystem() {

const FullNikkleSystem = [
  {
      planName: 'Full Nikkle System',
      price: '854.08',
      item1: 'Unlimted Users',
      item2: 'Unlimted Customers',
      item3: 'Unlimted Venders',
      item4: 'Unlimted Clients',
      item5: 'Disable CRM',
      item6: 'Disable HRM',
      item7: 'Disable Account',
      item8: 'Disable Project',
      item9: 'Disable POS',
  }
]

return FullNikkleSystem.map(
(plan) => <Card key={plan.id} style={styles.container}>
<Card.Content style={styles.content}>
  <Title style={styles.title}>{plan.planName}</Title>
  <Paragraph style={styles.price}>ZMW {plan.price}</Paragraph>
  <Paragraph style={styles.time}>per month</Paragraph>
  <Card.Actions style={styles.horizontalLine}></Card.Actions>
</Card.Content>
<Card.Content>
  <Title style={styles.contentHeader}>Point of sale Includes:</Title>
  <Paragraph style={styles.contentMaintainer}>{plan.item1}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item2}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item3}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item4}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item5}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item7}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item8}</Paragraph>
  <Paragraph style={styles.contentMaintainer}>{plan.item9}</Paragraph>
  <Card.Actions style={styles.bannerPlayer}>
      <Text style={styles.banner}>Free 14 Days Trial</Text>
  </Card.Actions>
</Card.Content>
<Card.Content style={styles.content}>
  <Card.Actions style={styles.horizontalLine}></Card.Actions>
  <Card.Actions>
      <Text style={styles.text}>See all features</Text>
  </Card.Actions>
  <Card.Actions  style={styles.touchplayer}>
      <Text style={styles.getstarted}>Get Started</Text>
  </Card.Actions>
</Card.Content>
</Card>
)
}

const PlansScreen = ({navigation}) => {
  
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
          <View>
              <Text style={styles.text}>Start Managing your money with zero cost!</Text>
          </View>
      </View> 
      <PointofSale/>
      <Accounting/>
      <HumanResource/>
      <CustomerRelationshipManagement/>
      <ProjectManagent/>
      <FullNikkleSystem/>
      </ScrollView>
      </SafeAreaView>
    )
  }

export default PlansScreen;

const styles = StyleSheet.create({
container : {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
},
getstarted: {
  color: '#FFFFFF',
  padding: 5,
  fontSize: 18,
},
headingtext: {
    fontSize: 28,
    paddingBottom: 15
  },
touchplayer: {
    backgroundColor: '#008ecc',
    padding: 10,
    borderRadius: 5,
    marginTop: 30,

  },
button: {
    textAlign: 'center',
    widthTop: 10,
    fontSize: 26,
    color: '#fff'
  },

title: {
    fontSize: 30,
    color: '#1F5C76',
},
price: {
    fontSize: 18,
},
time: {
    fontSize: 16,
    color: '#929292',
},
content: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
},
contentHeader: {
    fontSize: 22,
    color: '#1F5C76',
},
contentMaintainer: {
    color: '#929292',
},
text: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#1F5C76',
  },
buttontext: {
    marginRight: 68,
    fontSize: 18,
    color: '#008ecc',
    padding: 5,
  },
bannerPlayer: {
    backgroundColor: '#00CCC9',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    width: 250
  },
banner: {
    marginRight: 45,
    fontSize: 18,
    color: '#FFFFFF',
    padding: 5,
  },
horizontalLine: {
    borderBottomColor: '#25252520',
    borderBottomWidth: 2,
    width: 280,
    borderRadius: 5,
    marginBottom: 10,
  },
})