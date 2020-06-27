import React from 'react'

import { Changelogfy } from 'changelogfy-reactjs'
import 'changelogfy-reactjs/dist/index.css'

const App = () => {
  return (
    <div className='App'>
      <button className='changelogfy-icon'>
        Test
        <Changelogfy
          app_id='af12f992-0a0c-4cdf-8144-89af158c39e2'
          selector='.changelogfy-icon'
          user_id='1231231423'
          user_name='Paulo 12321313'
          user_email='paulO@123.com.br'
          init_badge={true}
          custom_data={{ Key: 'Value' }}
        />
      </button>
    </div>
  )
}

export default App
