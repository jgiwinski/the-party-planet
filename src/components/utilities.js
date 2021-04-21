export const getData = () => {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=53v8Y7IFlUi4zxNuImN5cZ8W8kghwuo0kqF7hOta')
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('this request isn\'t available')
        }
    })
}