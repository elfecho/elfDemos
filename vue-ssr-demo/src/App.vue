<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <p>{{ asyncData }}</p>
    <p>{{ propsData }}</p>
    <ul>
      <li>
        <router-link to="/">home</router-link>
      </li>
      <li>
        <router-link to="/about">about</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
