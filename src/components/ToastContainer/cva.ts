import { cva } from 'class-variance-authority'

export const toastCva = cva(
  'max-w-[21rem] w-[21rem] rounded border-2 leading-none w-fit flex gap-6 items-center py-[0.875rem] text-white px-[1.375rem] rounded-md ToastRoot bg-black',
  {
    variants: {
      type: {
        info: 'border-blue-400 hover:bg-blue-200/25',
        success: 'border-green-400 hover:bg-success-200/25',
        error: 'border-red-400 hover:bg-danger-200/25',
      },
    },
  },
)
