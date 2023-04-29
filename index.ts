import { time_zone_with_value } from './lib/time_zone_with_value'
import { time_zone } from './lib/time_zone'
import { time_zone_specific_all } from './lib/time_zone_custom'


const time_zone_specific = ({ zone }: { zone: "Pacific" | "America" | "Atlantic" | "Antarctica" | "Africa" | "Etc" | "Europe" | "Asia" | "Indian" | "Australia" }) => {
    return time_zone_specific_all.find((t) => {
        if (t.zone == zone) {
            return true
        }
        return false
    })
}



export {
    time_zone_with_value,
    time_zone,
    time_zone_specific_all,
    time_zone_specific
}