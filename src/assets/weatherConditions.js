const weatherConditions = [
    { id: 200, en: "thunderstorm with light rain", kr: "가벼운 비를 동반한 천둥구름" },
    { id: 201, en: "thunderstorm with rain", kr: "비를 동반한 천둥구름" },
    { id: 202, en: "thunderstorm with heavy rain", kr: "폭우를 동반한 천둥구름" },
    { id: 210, en: "light thunderstorm", kr: "약한 천둥구름" },
    { id: 211, en: "thunderstorm", kr: "천둥구름" },
    { id: 212, en: "heavy thunderstorm", kr: "강한 천둥구름" },
    { id: 221, en: "ragged thunderstorm", kr: "불규칙적 천둥구름" },
    { id: 230, en: "thunderstorm with light drizzle", kr: "약한 연무를 동반한 천둥구름" },
    { id: 231, en: "thunderstorm with drizzle", kr: "연무를 동반한 천둥구름" },
    { id: 232, en: "thunderstorm with heavy drizzle", kr: "강한 안개비를 동반한 천둥구름" },
    { id: 300, en: "light intensity drizzle", kr: "가벼운 안개비" },
    { id: 301, en: "drizzle", kr: "안개비" },
    { id: 302, en: "heavy intensity drizzle", kr: "강한 안개비" },
    { id: 310, en: "light intensity drizzle rain", kr: "가벼운 적은비" },
    { id: 311, en: "drizzle rain", kr: "적은비" },
    { id: 312, en: "heavy intensity drizzle rain", kr: "강한 적은비" },
    { id: 313, en: "shower rain and drizzle", kr: "소나기와 안개비" },
    { id: 314, en: "heavy shower rain and drizzle", kr: "강한 소나기와 안개비" },
    { id: 321, en: "shower drizzle", kr: "소나기" },
    { id: 500, en: "light rain", kr: "악한 비" },
    { id: 501, en: "moderate rain", kr: "중간 비" },
    { id: 502, en: "heavy intensity rain", kr: "강한 비" },
    { id: 503, en: "very heavy rain", kr: "매우 강한 비" },
    { id: 504, en: "extreme rain", kr: "극심한 비" },
    { id: 511, en: "freezing rain", kr: "우박" },
    { id: 520, en: "light intensity shower rain", kr: "약한 소나기 비" },
    { id: 521, en: "shower rain", kr: "소나기 비" },
    { id: 522, en: "heavy intensity shower rain", kr: "강한 소나기 비" },
    { id: 531, en: "ragged shower rain", kr: "불규칙적 소나기 비" },
    { id: 600, en: "light snow", kr: "가벼운 눈" },
    { id: 601, en: "snow", kr: "눈" },
    { id: 602, en: "heavy snow", kr: "강한 눈" },
    { id: 611, en: "sleet", kr: "진눈깨비" },
    { id: 612, en: "shower sleet", kr: "소나기 진눈깨비" },
    { id: 615, en: "light rain and snow", kr: "약한 비와 눈" },
    { id: 616, en: "rain and snow", kr: "비와 눈" },
    { id: 620, en: "light shower snow", kr: "약한 소나기 눈" },
    { id: 621, en: "shower snow", kr: "소나기 눈" },
    { id: 622, en: "heavy shower snow", kr: "강한 소나기 눈" },
    { id: 701, en: "mist", kr: "박무" },
    { id: 711, en: "smoke", kr: "연기" },
    { id: 721, en: "haze", kr: "연무" },
    { id: 731, en: "sand, dust whirls", kr: "모래 먼지" },
    { id: 741, en: "fog", kr: "안개" },
    { id: 751, en: "sand", kr: "모래" },
    { id: 761, en: "dust", kr: "먼지" },
    { id: 762, en: "volcanic ash", kr: "화산재" },
    { id: 771, en: "squalls", kr: "돌풍" },
    { id: 781, en: "tornado", kr: "토네이도" },
    { id: 800, en: "clear sky", kr: "구름 한 점 없는 맑은 하늘" },
    { id: 801, en: "few clouds", kr: "약간의 구름이 낀 하늘" },
    { id: 802, en: "scattered clouds", kr: "드문드문 구름이 낀 하늘" },
    { id: 803, en: "broken clouds", kr: "구름이 거의 없는 하늘" },
    { id: 804, en: "overcast clouds", kr: "구름으로 뒤덮인 흐린 하늘" },
    { id: 900, en: "tornado", kr: "토네이도" },
    { id: 901, en: "tropical storm", kr: "태풍" },
    { id: 902, en: "hurricane", kr: "허리케인" },
    { id: 903, en: "cold", kr: "한랭" },
    { id: 904, en: "hot", kr: "고온" },
    { id: 905, en: "windy", kr: "바람부는" },
    { id: 906, en: "hail", kr: "우박" },
    { id: 951, en: "calm", kr: "바람이 거의 없는" },
    { id: 952, en: "light breeze", kr: "약한 바람" },
    { id: 953, en: "gentle breeze", kr: "부드러운 바람" },
    { id: 954, en: "moderate breeze", kr: "중간 세기 바람" },
    { id: 955, en: "fresh breeze", kr: "신선한 바람" },
    { id: 956, en: "strong breeze", kr: "센 바람" },
    { id: 957, en: "high wind", kr: "돌풍에 가까운 센 바람" },
    { id: 958, en: "gale", kr: "돌풍" },
    { id: 959, en: "severe gale", kr: "심각한 돌풍" },
    { id: 960, en: "storm", kr: "폭풍" },
    { id: 961, en: "violent storm", kr: "강한 폭풍" },
    { id: 962, en: "hurricane", kr: "허리케인" },
];

export default weatherConditions;