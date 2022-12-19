import mock from './mock'
import './categories'
import './movies'
import './slides'

// forwards the matched request over network
mock.onAny().passThrough()
