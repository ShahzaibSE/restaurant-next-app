import Image from 'next/image'
import HomeComponent from '@/custom_components/home/home'

export default function home() {
  return (
    <main className="min-h-screen px-12 py-24 xl:p-24">
      <HomeComponent />
    </main>
  )
}
