/* Automatic generated by './build/bin/build-entry.js' */

import Button from '../src/components/button/index.js'
import Checkbox from '../src/components/checkbox/index.js'
import Radio from '../src/components/radio/index.js'
import Toggle from '../src/components/toggle/index.js'
import Dropdown from '../src/components/dropdown/index.js'
import Input from '../src/components/input/index.js'
import Pagination from '../src/components/pagination/index.js'
import Progress from '../src/components/progress/index.js'
import Navbar from '../src/components/navbar/index.js'
const plugins = [
  Button,
  Checkbox,
  Radio,
  Toggle,
  Dropdown,
  Input,
  Pagination,
  Progress,
  Navbar
]
const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  plugins.map(plugin => {
    Vue.use(plugin)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  Button,
  Checkbox,
  Radio,
  Toggle,
  Dropdown,
  Input,
  Pagination,
  Progress,
  Navbar
}
