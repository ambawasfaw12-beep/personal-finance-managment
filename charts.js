
const ctx = chart.getContext("2d")

const width = chart.width
const height = chart.height

const padding = 50
const chartWidth = width - (padding + padding)
const chartHeight = height - (padding + padding)


// 1. Combine all transactions into 3 categories
const chartData = {
    income: 0,
    expense: 0,
    saving: 0
}

transactions.forEach(item => {
    chartData[item.type] += item.amount
})


// 2. Find the highest value
const maxValue = Math.max(...Object.values(chartData), 1)


// 3. Draw the X and Y axis
ctx.lineWidth = 3
ctx.beginPath()
ctx.strokeStyle = "#fefefe"

ctx.moveTo(padding, padding)
ctx.lineTo(padding, height - padding)
ctx.lineTo(width - padding, height - padding)

ctx.stroke()


// 4. Draw Y-axis numbers and grid lines
const ticks = 6

ctx.textAlign = "right"
ctx.textBaseline = "middle"
ctx.font = "12px Arial"

for (let i = 0; i <= ticks; i++) {

    const value = ((maxValue * i) / ticks).toFixed(0)

    const y = (height - padding) -
        (chartHeight * i) / ticks

    ctx.beginPath()

    ctx.strokeStyle = i === 0 ? "black" : "gray"

    ctx.moveTo(padding, y)
    ctx.lineTo(width - padding, y)

    ctx.stroke()

    ctx.fillStyle = "#666"

    ctx.fillText(
        value,
        padding - 10,
        y
    )
}


// 5. Draw exactly 3 bars
const categories = ["income", "expense", "saving"]

const barGap = 30

const barWidth =
    (chartWidth - (barGap * (categories.length + 1))) /
    categories.length


categories.forEach((type, index) => {

    // Position of each bar
    const x =
        padding +
        barGap +
        index * (barWidth + barGap)


    // Get the total amount for this category
    const amount = chartData[type]


    // Calculate bar height
    const barHeight =
        (amount / maxValue) * chartHeight


    // Calculate Y position
    const y =
        (height - padding) -
        barHeight


    // Draw bar
    ctx.fillStyle = "#3b83f6"

    ctx.fillRect(
        x,
        y,
        barWidth,
        barHeight
    )


    // Draw category name
    ctx.fillStyle = "#666"

    ctx.textAlign = "center"

    ctx.fillText(
        type,
        x + barWidth / 2,
        height - padding + 20
    )

})

// const ctx = chart.getContext('2d')
// const maxValue = Math.max(...transactions.map(item => item.amount))
// const width = chart.width
// const height = chart.height

// const padding = 50
// const chartWidth = width - (padding + padding)
// const chartHeight = height - (padding + padding)

// ctx.lineWidth = 3
// ctx.beginPath()
// ctx.strokeStyle = '#fefefe'
// ctx.moveTo(padding, padding)
// ctx.lineTo(padding, height - padding)
// ctx.lineTo(width - padding, height - padding)
// ctx.stroke()

// const tricks = 6
// ctx.textAlign = 'right'
// ctx.textBaseline = 'middle'
// ctx.font = '12px arial'

// for (let i = 0; i <= tricks; i++) {
//     const value = ((maxValue * i) / tricks).toFixed(0)

//     const y = (height - padding) - (chartHeight * i) / tricks

//     ctx.beginPath()
//     ctx.strokeStyle = i === 0 ? 'black' : 'gray'
//     ctx.moveTo(padding, y)
//     ctx.lineTo(width - padding, y)
//     ctx.stroke()

//     ctx.fillText(value, padding - 10, y)
// }

// const chartData = {
//     Expense: 0,
//     Income: 0,
//     Saving: 0
// }

// transactions.forEach(item => {
//     chartData[item.type] += item.amount
// })

// const categories = ["income", "expense", "saving"]

// const barGap = 30
// const totalGap = 4
// const barWidth = (chartWidth - (barGap + totalGap)) / transactions.length

// categories.forEach((type, index) => {
//     const x = padding + barGap + index * (barWidth + barGap)
//     const barHeight = (chartData[type] / maxValue) * chartHeight
//     const y = (height - padding) - barHeight

//     ctx.beginPath()
//     ctx.fillStyle = '#3b83f6'
//     ctx.fillRect(x, y, barWidth, barHeight)

//     ctx.fillStyle = '#666666'
//     ctx.fillText(item.type, x + (barWidth / 2), height - padding + 10)
// })

