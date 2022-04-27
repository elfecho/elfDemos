<template>
  <div class="home">
    <div id="example"></div>
  </div>
</template>

<script>
// 添加坐标轴、光源和阴影效果
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  AxesHelper,
  PlaneGeometry,
  MeshLambertMaterial,
  AmbientLight,
  SpotLight,
  Vector2,
} from "three";
export default {
  name: "Home",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var scene = new Scene(); // Scene 创建场景
      var camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      ); // PerspectiveCamera 后置摄像机

      var renderer = new WebGLRenderer(); // 渲染器
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true; // 设置阴影时需要设置shadowMap.enabled为真
      document.getElementById("example").appendChild(renderer.domElement);

      // 新建坐标轴
      var axes = new AxesHelper(50); // 50为轴长度
      // axes.setColors(0x00ffff, 0xffff00, 0x00ff00); 设置轴的颜色
      scene.add(axes);

      var geometry = new BoxGeometry(8, 8, 8); // BoxGeometry 正方形几何体
      var material = new MeshLambertMaterial({ color: 0xff2288 }); // MeshBasicMaterial 网格基础材质
      var cube = new Mesh(geometry, material); // cube正方体对象  // Mesh 网格
      scene.add(cube);

      cube.castShadow = true;
      cube.position.x = 4;
      cube.position.y = 10;
      cube.position.z = 20;

      // 地面网格
      var planeGeometry = new PlaneGeometry(100, 100);
      var planeMaterial = new MeshLambertMaterial({color: 0xc8c8c8}) // 地面网格对象
      var plane = new Mesh(planeGeometry, planeMaterial)

      plane.rotation.x = -0.5 * Math.PI
      plane.position.set(15,0,0);
      plane.receiveShadow = true;
      

      camera.position.x = -30;
      camera.position.y = 45;
      camera.position.z = 35;
      camera.lookAt(scene.position); // 让坐标轴设为中心点

      // 阴影效果
      var spotLight = new SpotLight(0xFFFFFF);
      spotLight.position.set(-60, 40, -65);
      spotLight.castShadow = true; // 要让聚光灯产生阴影，castShadow必须设置为真
      spotLight.shadow.mapSize = new Vector2(1024, 1024)
      spotLight.shadow.camera.far = 130
      spotLight.shadow.camera.near = 40
      scene.add(spotLight);


      // Lamber光源
      var ambienLight = new AmbientLight(0xAAAAAA)
      scene.add(ambienLight)

      

      scene.add(plane)

      cube.rotation.x += 0.80;
      cube.rotation.y += 0.80;

      renderer.render(scene, camera);
    },
  },
};
</script>
