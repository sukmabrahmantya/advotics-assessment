import moment from "moment"

export const thisMonth = (moment(moment().endOf("month"))).diff(moment((moment().startOf("month"))), "days") + 1;