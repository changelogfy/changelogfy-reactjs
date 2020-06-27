import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const promise = new Promise((resolve, reject) => {
  const script = document.createElement('script')
  script.src = 'https://widget.changelogfy.com/index.js'
  script.id = 'changelogfy-script'
  script.setAttribute('async', true)
  document.head.appendChild(script)
  script.onload = resolve // Resolve when loaded
  script.onerror = reject
})

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
  async function getData() {
    try {
      await promise
      changelogfy.destroy()
      changelogfy.init(obj)
    } catch (error) {
      console.log(error.response)
    }
  }
  const obj = {
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
    getData()

    return () => {
      /* global changelogfy */
      changelogfy.destroy()
      changelogfy.init(obj)
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
