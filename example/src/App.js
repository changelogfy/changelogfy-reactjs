import React from 'react'

import { Changelogfy } from 'changelogfy-reactjs'
import 'changelogfy-reactjs/dist/index.css'

const App = () => {
  return (
    <div className='App'>
      <button className='changelogfy-icon'>
        Test
        <Changelogfy
          app_id='INSERT_YOUR_APP_ID_HERE'
          selector='.changelogfy-icon'
          user_id='af12f993-1a0d-3cde-4144-89af158c39e2'
          user_name='Paulo Castellano'
          user_email='paulo@changelogfy.com'
          custom_data={{
            JobRole: 'CEO',
            Plan: 'Pro',
            Teammates: 4,
            MonthlySpend: '50 USD'
          }}
        />
      </button>
    </div>
  )
}

export default App
