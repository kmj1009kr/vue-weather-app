<template>
  <div class="weather-info">
    <div class="icon">
      <img :src="`https://openweathermap.org/img/wn/${$store.state.weatherData.icon}@2x.png`"
        :alt="$store.state.weatherData.icon" />
    </div>
    <div class="temp">
      {{ $store.state.weatherData.temp }}&deg;
    </div>
    <div class="text">{{ weatherConditions.find(i => i.id == $store.state.weatherData?.textId)?.kr || '정보 없음' }}</div>
    <div class="location">
      {{ $store.state.weatherData.city }},
      {{ $store.state.weatherData.location }}
    </div>
  </div>
</template>

<script setup>
import weatherConditions from '../assets/weatherConditions.js'
</script>

<style lang="scss" scoped>
.weather-info {
  padding: 20px;

  &>div {
    margin-bottom: 20px;
    padding: 20px;
    // border: 1px solid #ccc;
  }

  .icon img {
    width: 140px;
  }

  .temp {
    font-size: 4em;
  }

  .text {
    font-size: 2em;
  }
}
</style>