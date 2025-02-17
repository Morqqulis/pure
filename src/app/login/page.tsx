import { AdminLogo } from '@/components/common/icons/icons'
import LoginForm from '@/components/sections/Login/LoginForm/LoginForm'
import { HeroGeometric } from '@/components/sections/Login/shape-landing-hero'
import * as motion from 'motion/react-client'

export default function LoginPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <HeroGeometric badge="" title1="" title2="" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="z-10 absolute inset-0 flex justify-center items-center"
      >
        <div className="bg-black/30 shadow-xl backdrop-blur-xl p-6 border border-white/20 rounded-lg w-full max-w-sm">
          <div className="flex justify-center mb-8">
            <AdminLogo className="w-auto h-12" />
          </div>

          <LoginForm />
        </div>
      </motion.div>
    </div>
  )
}
