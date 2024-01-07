import React from 'react'
import Header from '../components/Header'
import ActualMenu from '../components/ActualMenu'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

export default function MenuPage() {
  return (
    <div>
        <Header />
        <ActualMenu />
        <Reservation />
        <Footer />
    </div>
  )
}
