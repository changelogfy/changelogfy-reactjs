import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

export const Changelogfy = ({
  selector,
  app_id,
  init_badge,
  user_id = null,
  user_name = null,
  user_email = null,
  custom_data = null,
  children
}) => {
  const loadScript = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://widget.changelogfy.com/index.js'
      script.id = 'changelogfy-script'
      script.setAttribute('async', true)
      document.head.appendChild(script)
      script.onload = resolve
      script.onerror = reject
    })
  }

  const start = async () => {
    try {
      await loadScript()
      changelogfy.destroy()
      changelogfy.init(data)
    } catch (error) {
      console.log(error.response)
    }
  }
  const data = {
    selector,
    app_id,
    init_badge,
    data: {
      user_id,
      user_name,
      user_email,
      custom_data
    }
  }
  useEffect(() => {
    start()

    return () => {
      /* global changelogfy */
      changelogfy.destroy()
      changelogfy.init(data)
    }
  })

  return <div>{children}</div>
}

Changelogfy.propTypes = {
  selector: PropTypes.string.isRequired,
  app_id: PropTypes.string.isRequired,
  init_badge: PropTypes.bool,
  user_id: PropTypes.string,
  user_name: PropTypes.string,
  user_email: PropTypes.string,
  custom_data: PropTypes.object
}
