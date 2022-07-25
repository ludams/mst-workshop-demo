import { defineConfig } from 'windicss/helpers'
import FormsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  shortcuts: {
    'main': 'flex items-center justify-center h-screen',
    'app': 'flex flex-col justify-stretch p-4 rounded-xl border-1 border-black h-110 overflow-hidden bg-orange-50',
    'app-children': 'flex flex-row justify-center flex-1 overflow-hidden',
    'title': 'text-xl font-medium mb-4',
    'heading': 'text-lg font-medium mb-2',
    'container': 'flex flex-col items-start p-4 border-black border-1 rounded-xl w-55 overflow-hidden',
    'time-tracking-id-list': 'container mr-4 bg-blue-200',
    'time-tracking-id': 'px-2 py-1 mb-1 rounded-xl bg-blue-100',
    'right-side': 'flex flex-col h-full',
    'tracking-timer': 'container mb-4 bg-red-200',
    'timer': 'flex flex-row items-center p-2 rounded-xl bg-red-100 w-full',
    'timer-button': 'flex items-center justify-center rounded-[50%] border-black border-1 w-8 h-8 mr-2 flex-shrink-0',
    'timer-name': 'overflow-hidden truncate',
    'track-history': 'container flex-1 bg-yellow-200',
    'history-item': 'mb-2 px-2 py-1 rounded-xl bg-yellow-100',
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
