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

const movieTransformer = (movie) => {
  // Default wallpaper
  movie.wallpaper = movie.wallpaper ? movie.wallpaper : movie.image
  // Get categories by array caregoryId
  movie.categories = handleCategories(movie.categories)
  return movie
}

mock.onGet('/api/movies').reply(() => {  
  const moviesData = useData.movies.map(movie => {
    return movieTransformer(movie)
  })
  return [200, { data: moviesData }]
})

mock.onGet('/api/movies-recomendation').reply(() => {  
  const moviesData = useData.movies.slice(0, 5).map(movie => {
    return movieTransformer(movie)
  })
  return [200, { data: moviesData }]
})

const moviesDetailUri = new RegExp(`/api/movies/*`);
mock.onGet(moviesDetailUri).reply(config => {
  // // Get event id from URL
  const slug = config.url?.substring(config.url.lastIndexOf('/') + 1)

  const Index = useData.movies.findIndex(e => e.slug === slug)
  const movie = useData.movies[Index]
  
  if (movie) {
    return [200, { data: movieTransformer(movie) }]
  }
  
  return [404, { message: 'Data Not Found' }]
})
