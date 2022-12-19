import mock from '../mock'

import { useData } from '../data'

const handleCategories = (categoryIds) => {
  const filteredCategories = []
  categoryIds.map(categoryId => {
    const Index = useData.categories.findIndex(e => e.id === categoryId)
    const categoryData = useData.categories[Index]
    if (categoryData) {
      filteredCategories.push(categoryData)
    }
  })
  return filteredCategories
}

mock.onGet('/api/slides').reply(() => {  
  const slidesData = useData.slides.map(movie => {
    return {
      ...movie,
      categories: handleCategories(movie.categories)
    }
  })
  return [200, { data: slidesData }]
})
