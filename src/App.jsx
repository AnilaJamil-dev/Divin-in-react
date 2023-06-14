import React from 'react'
import NavigationBar from './Componenets/NavigationBar'
import ProductSection from './Componenets/ProductSection'
import ContactDetails from './Componenets/ContactDetails'

function App() {
  return (
  <>
  <NavigationBar companyName="Silk world" ownerName="Sam"/>
  <ProductSection sectionTitle="Silk"/>
  <ProductSection sectionTitle="Cotton"/>
  <ContactDetails/>
  </>
  )
}

export default App