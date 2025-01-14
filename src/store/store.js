import { createApp } from 'vue'
import { createStore } from 'vuex'


// Create a new store instance.
export default createStore({
    state: {
        count: 0,
        weatherData: {
            icon: 'icon',
            temp: 0,
            textId: 0,
            location: 'location',
            city: 'Seoul',
            previousCity: '', // 이전 도시 값을 저장
        },
        toggle: false
    },
    mutations: {
        updateWeather(state, payload) {
            state.weatherData.icon = payload.weather[0].icon;
            state.weatherData.temp = payload.main.temp;
            state.weatherData.textId = payload.weather[0].id;
            state.weatherData.location = payload.sys.country;
            state.weatherData.city = payload.name;
        },
        onSearchCity(state, payload) {
            // 이전 값을 저장
            state.weatherData.previousCity = state.weatherData.city;

            if (!payload || payload.trim() === "") {
                alert("지역명은 빈 값일 수 없습니다.");
                return;
            }
            state.weatherData.city = payload;
        },
        resetCityToPrevious(state) {
            // 이전 값으로 되돌리기
            state.weatherData.city = state.weatherData.previousCity;
        },
        toggleButton(state) {
            state.toggle = !state.toggle;
        }
    },
    actions: {
        getWeather(context) {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}&units=metric`;

            fetch(API_URL)
                .then(res => {
                    if (!res.ok) {
                        if (res.status === 404) {
                            throw new Error('404'); // 404 오류 강제 발생
                        } else {
                            throw new Error(`Error: ${res.status}`); // 기타 오류 강제 발생
                        }
                    }
                    return res.json(); // 응답 데이터 JSON 변환
                })
                .then(data => {
                    context.commit('updateWeather', data); // 정상적으로 상태 업데이트
                })
                .catch(err => {
                    if(err.message==404){
                        alert('검색된 도시없음');
                    }else{
                        alert('오류발생');
                    }
                   
                    console.error('오류 발생:', err);
                    context.commit('resetCityToPrevious'); // 오류 발생 시 이전 값으로 복원
                });
        }
    }
})
