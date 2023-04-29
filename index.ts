import { time_zone_with_value } from './lib/time_zone_with_value'
import { time_zone } from './lib/time_zone'
import { time_zone_specific_all } from './lib/time_zone_custom'
import { time_zone_country_all } from './lib/time_zone_country'
import { Z54sfdf3454Country_name_5453432232423423432, z4534Country_code35345453453453 } from './lib/hooks/country_name_interface'


const time_zone_specific = ({ zone }: { zone: "Pacific" | "America" | "Atlantic" | "Antarctica" | "Africa" | "Etc" | "Europe" | "Asia" | "Indian" | "Australia" }) => {
    return time_zone_specific_all.find((t) => {
        if (t.zone == zone) {
            return true
        }
        return false
    })
}


const time_zone_country_by_name = ({ country_name }: Z54sfdf3454Country_name_5453432232423423432) => {

    return time_zone_country_all.find((r) => {
        return r.country.toLowerCase() == country_name.toLowerCase()
    })
}
const time_zone_country_by_code = ({ country_code }: z4534Country_code35345453453453) => {

    return time_zone_country_all.find((r) => {
        return r.code.toLowerCase() == country_code.toLowerCase()
    })
}
export {
    time_zone_with_value,
    time_zone,
    time_zone_specific_all,
    time_zone_specific,
    time_zone_country_all,
    time_zone_country_by_name,
    time_zone_country_by_code
}