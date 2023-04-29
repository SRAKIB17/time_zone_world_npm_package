# version 1.0.3

```
npm i time_zone_world
```

```javascript
import {time_zone_with_value, time_zone, time_zone_specific_all, time_zone_specific , time_zone_country_all, time_zone_country_by_name, time_zone_country_by_code} from 'time_zone_world';

const test1 = time_zone_specific({zone: 'Pacific'})
const test2 = time_zone_specific_all
const test3 = time_zone
const test4 = time_zone_with_value
const test4 = time_zone_country_all
const test5 = time_zone_country_by_name({country_name:"United States"})
const test6 = time_zone_country_by_code({ country_code: "US" })

```
