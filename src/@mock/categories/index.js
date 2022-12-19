import mock from '../mock'

import { useData } from '../data'

mock.onGet('/api/categories').reply(() => {  
  const categoriesData = useData.categories
  return [200, { data: categoriesData }]
})
