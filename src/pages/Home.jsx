import { Button } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <>

      <div className="p-10">
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'primary.main', // MUI styling
          }}
          className="text-white px-6 py-2 rounded-lg hover:bg-blue-600" // Tailwind CSS classes
        >
          MUI + Tailwind Button
        </Button>
      </div>
    </>
  )
}
