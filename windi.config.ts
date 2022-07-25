import { defineConfig } from 'windicss/helpers'
import FormsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  shortcuts: {
    'app': 'flex flex-col justify-stretch p-4 rounded-xl border-1 border-black h-110 overflow-hidden',
    'app-children': 'flex flex-row justify-center flex-1 overflow-hidden',
    'title': 'text-xl font-medium',
    'heading': 'text-lg font-medium mb-2',
    'container': 'flex flex-col items-start p-4 border-black border-1 rounded-xl w-55 overflow-hidden',
    'input': 'border-1 border-black rounded-lg w-32 pl-2',
    'add-button': 'border-1 border-black rounded-lg px-2 py-1 ml-2',
    'add-tracking-id': 'flex flex-row mt-4'
  },
  plugins: [FormsPlugin],
  theme: {
    colors: {
    }
  }
})
