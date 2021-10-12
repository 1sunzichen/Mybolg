import React, { useState, useEffect } from "react"

function Timers({ endTime }) {
  const [time, setTime] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  })

  useEffect(() => {
    let times = (endTime - new Date().getTime()) / 1000
    const timer = setInterval(() => {
      times -= 1
      let day = Math.floor(times / 60 / 60 / 24)
      let hour = Math.floor((times / 60 / 60) % 24)
      let minute = Math.floor((times / 60) % 60)
      let second = Math.floor(times % 60)
      setTime({
        day: day,
        hour: hour < 10 ? "0" + hour : hour,
        minute: minute < 10 ? "0" + minute : minute,
        second: second < 10 ? "0" + second : second,
      })
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [endTime])

  return (
    <span>
      还剩{time.day}天{time.hour}时:{time.minute}分:{time.second}秒
    </span>
  )
}
export default Timers
