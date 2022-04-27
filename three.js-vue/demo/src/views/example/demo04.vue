<template>
  <div class="home">
    <div id="example"></div>
    <div id="myStats"></div>
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
  Fog,
  FogExp2,
} from "three";
import Stats from 'three/examples/jsm/libs/stats.module'
import * as dat from 'dat.gui'

export default {
  name: "Home",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var scene = new Scene(); // Scene 创建场景
      // 1. 添加雾化效果（场景中的物体离得越远，就会变得越模糊）
      // scene.fog = new Fog(0xffffff, 0.01, 100) // 第一个参数是雾化的颜色，第二个参数是雾化近处的值，第三个参数是雾化的远处值
      // scene.fog = new FogExp2(0x00ffff, 0.02) // 第一个是雾化的颜色， 第二个是雾化的浓度

      // 强制让场景的材质统一设置
      // scene.overrideMaterial = new MeshLambertMaterial({
      //   color: 0x0000ff
      // })
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
      cube.castShadow = true;

      cube.position.x = 4;
      cube.position.y = 8;
      cube.position.z = 10;

      scene.add(cube);


      var geometry2 = new BoxGeometry(4,4,4);
      var material2 = new MeshLambertMaterial({ color: 0x00ff00 })
      var cube2 = new Mesh(geometry2, material2)
      cube2.castShadow = true;

      cube2.position.x = -10;
      cube2.position.y = 10;
      cube2.position.z = 0;
      cube2.name = 'cube2'

      scene.add(cube2);
      const findObj = scene.getObjectByName('cube2', false)

      

      

      // 地面网格
      var planeGeometry = new PlaneGeometry(100, 100);
      var planeMaterial = new MeshLambertMaterial({color: 0xc8c8c8}) // 地面网格对象
      var plane = new Mesh(planeGeometry, planeMaterial)

      plane.rotation.x = -0.5 * Math.PI
      plane.position.set(15,0,0);
      plane.receiveShadow = true;

      scene.add(plane)
      

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

      var stats = addStats()

      // var ctrlObj = {
      //   rotationSpeed: 0.01,
      //   jumpSpeed: 0.01
      // }
      // var ctrl = new dat.GUI()
      // ctrl.add(ctrlObj, "rotationSpeed", 0, 1) // 旋转范围进行限制
      // ctrl.add(ctrlObj, "jumpSpeed", 0, 1) // 跳跃范围进行限制
      
      // console.log('场景内包含几个对象', scene.children.length); // 场景内有3个对象

      

      var ctrlObj2 = new function() {
        this.removeFindCube = function() {
          if(findObj instanceof Mesh) {
            scene.remove(findObj)
          }
        }
        this.addNewCube = function() {
          var geometryTemp = new BoxGeometry(4,4,4);
          var materialTemp = new MeshLambertMaterial({ color: 0x0000ff })
          var cubeTemp = new Mesh(geometryTemp, materialTemp)
          cubeTemp.castShadow = true;

          cubeTemp.position.x = Math.random() * 10;
          cubeTemp.position.y = Math.random() * 10;
          cubeTemp.position.z = Math.random() * 10;
          scene.add(cubeTemp);
        }
      }
      var ctrl2 = new dat.GUI()
      ctrl2.add(ctrlObj2, 'removeFindCube')
      ctrl2.add(ctrlObj2, 'addNewCube')
      

      // renderer.render(scene, camera);
      renderScene()

      var gap = 0;
      // 添加动画
      function renderScene() {
        // 旋转动画
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        // cube.rotation.z += 0.01;

        // cube2.rotation.x += 0.01;
        // cube2.rotation.y += 0.01;
        // cube2.rotation.z += 0.01;

        // 批量进行操作
        scene.traverse(function(obj) {
          if (obj instanceof Mesh && obj != plane) {
            obj.rotation.x += 0.01;
            obj.rotation.y += 0.01;
            obj.rotation.z += 0.01;
          }
        })

        // gap += 0.01
        // gap += ctrlObj.jumpSpeed;
        cube.position.x = 25 + (20* (Math.sin(gap)));
        cube.position.y = 6 + (20 * Math.abs(Math.cos(gap)));

        stats.update()
        requestAnimationFrame(renderScene)
        renderer.render(scene, camera)
      }
      // 添加帧数监听
      function addStats() {
        var stats = new Stats()
        stats.domElement.style.position = 'absolute'
        stats.domElement.style.left = '60px'
        stats.domElement.style.top = '0px'
        stats.setMode(0)
        document.getElementById('myStats').appendChild(stats.domElement)
        return stats

      }
      // 自适应屏幕
      window.addEventListener('resize', onWindowResize, false)
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

    }
  },
};
</script>
