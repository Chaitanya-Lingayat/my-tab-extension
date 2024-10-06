// import '~/App.css'
import { BentoDemo } from '~/components/containers/bento'
import { Docker } from '~/components/containers/docker'
import { MeteorBackground } from '~/components/containers/meteor-background'
// import HyperText from '~/components/ui/hyper-text'
import { ThemeToggle } from '~/components/containers/theme-toggle'
import ShineBorder from '~/components/ui/shine-border'
import TypingAnimation from '~/components/ui/typing-animation'
import ClockWidget from './components/widgets/clock-widget'
import WeatherWidget from './components/widgets/weather/weather-widget'
// import GoogleCalendar from './components/widgets/google-events'
import GoogleAuthenticator from './components/widgets/google-authenticator'

function App() {
  return (
    <ShineBorder
      className="relative flex w-full h-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl z-[1]"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
      <ThemeToggle />
      <GoogleAuthenticator />
      <div className='flex flex-col w-full h-full py-4 px-20 gap-5'>
        <TypingAnimation
          className="text-4xl font-bold text-black dark:text-white py-2 px-5"
          text="Welcome Chaitanya"
        />
        <div className='flex flex-row gap-10'>
          <ClockWidget />
          <WeatherWidget />
          {/* <GoogleCalendar /> */}
        </div>
        <MeteorBackground />
        {/* <HyperText text='Welcome Chaitanya' /> */}

        <BentoDemo />
        <Docker />
      </div>
    </ShineBorder >
  )
}

export default App
