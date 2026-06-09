import React from 'react'

const Spinner: React.FC = () => {
  return (
     <div className="flex flex-col items-center justify-center h-screen gap-3">
      <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-blue-400 text-sm font-medium">Loading...</p>
    </div>
  )
}

export default Spinner