// const moment = require('moment')








function convertTime(post_date, post_time) {


   


    // console.log(currentDate.toLocaleString)




    const sliceDate = post_date.toString().split(' ')
    // console.log(post_date)

    // const sliceTime = post_time.slice(0, 12)
    // const formattedDateString = `${sliceDate}T${sliceTime}Z`;

    // console.log(formattedDateString)
    
    const year = new Date().getFullYear()
    //  const time = sliceTime.toLocaleString('en-US')
    //  console.log(time)
    const convertedDate = `${sliceDate[0]} ${sliceDate[1]} ${sliceDate[2]} ${year}`
// console.log(time , year)

    const dateObj = {
        post_date: convertedDate,
        post_time: post_time
    }
    return dateObj



}


module.exports = { convertTime }
