class MyImage {
  constructor() {
    this.img = new Image()
    document.body.appendChild(this.img)
  }
  setSrc(src) {
    this.img.src = src
  }
}

class ProxyImage {
  constructor() {
    this.proxyImage = new Image()
  }

  setSrc(src) {
    let myImageObj = new MyImage()
    myImageObj.img.src = './loading.gif'
    this.proxyImage.src = src
    this.proxyImage.onload = () => {
      myImageObj.img.src = src
    }
  }
}

// const proxyImage = new ProxyImage()
// proxyImage.setSrc('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1303771866,3369435064&fm=26&gp=0.jpg')

var myImage = new MyImage()
myImage.setSrc('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1303771866,3369435064&fm=26&gp=0.jpg')