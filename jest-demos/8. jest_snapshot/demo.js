export const generateConfig = () => {
  return {
    server: 'http://localhost',
    port: 8080,
    domain: 'localhost',
    time: new Date(),
    id: Math.floor(Math.random() * 50)
  }
}

export const generateAnotherConfig = () => {
  return {
    server: 'http://localhost',
    port: 8080,
    domain: 'localhost2',
    time: new Date()
  }
}