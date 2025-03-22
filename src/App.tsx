import { Docker } from '~/components/containers/docker'
import { MeteorBackground } from '~/components/containers/meteor-background'
// import HyperText from '~/components/ui/hyper-text'
import { ThemeToggle } from '~/components/containers/theme-toggle'
import ShineBorder from '~/components/ui/shine-border'
import TypingAnimation from '~/components/ui/typing-animation'
import ClockWidget from './components/widgets/clock-widget'
import WeatherWidget from './components/widgets/weather/weather-widget'
// import GoogleCalendar from './components/widgets/google-events'
import SwapBlocks from './components/widgets/swap-blocks/swap-blocks'

function App() {
  return (
    <ShineBorder
      className="relative flex w-full min-h-[100dvh] flex-col items-center justify-start rounded-lg border bg-background md:shadow-xl z-[1]"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
      <ThemeToggle />
      {/* <GoogleAuthenticator /> */}
      <div className='flex flex-col w-full h-[100dvh] py-2 px-2 sm:py-4 sm:px-4 md:px-8 gap-2 sm:gap-3 overflow-y-auto pb-24'>
        <TypingAnimation
          className="text-xl sm:text-2xl md:text-4xl font-bold text-black dark:text-white py-1 px-1 sm:py-2 sm:px-2"
          text="Welcome Chaitanya"
        />
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
          <ClockWidget />
          <WeatherWidget />
        </div>
        <MeteorBackground />
        <div className="relative w-full">
          <SwapBlocks />
        </div>
        <Docker />
      </div>
    </ShineBorder>
  )
}

export default App
